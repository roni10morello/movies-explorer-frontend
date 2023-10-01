import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { DURATION } from "../../utils/constants";

function SavedMovies({ savedMovieList, onDeleteLikeClick }) {
  const [filterMovies, setFilterMovies] = useState(savedMovieList);
  const [shortFilm, setShortFilm] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);

  function SearchMovies(query) {
    setSearchQuery(query);
  }

  function handleShortFilm() {
    setShortFilm(!shortFilm);
  }

  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < DURATION);
  }

  function moviesFilter(movies, query) {
    const moviesQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase();
      const movieEn = String(movie.nameEN).toLowerCase();
      const userQuery = query.toLowerCase();
      return (
        movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
      );
    });
    return moviesQuery;
  }

  useEffect(() => {
    const moviesList = moviesFilter(savedMovieList, searchQuery);
    setFilterMovies(shortFilm ? filterDuration(moviesList) : moviesList);
  }, [savedMovieList, shortFilm, searchQuery]);

  useEffect(() => {
    if (filterMovies.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [filterMovies]);

  return (
    <>
      {/* <Header isLogin={true} /> */}
      <main className="saved-movies">
        <SearchForm
          SearchMovies={SearchMovies}
          onFilterMovies={handleShortFilm}
        />
        <MoviesCardList
          notFound={notFound}
          movies={filterMovies}
          onDeleteLikeClick={onDeleteLikeClick}
          savedMovieList={savedMovieList}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
