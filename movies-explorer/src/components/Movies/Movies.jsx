import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import moviesApi from "../../utils/MoviesApi";
import { DURATION } from "../../utils/constants";

function Movies({ onLikeClick, onDeleteLikeClick, savedMovieList }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  const [onShortFilm, setisShortFilm] = useState(false);

  const [isRequestError, setisRequestError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration <= DURATION);
  }

  function handleShortFilm() {
    setisShortFilm(!onShortFilm);
    if (!onShortFilm) {
      if (filterDuration(cards).length === 0) {
        setFilterMovies(filterDuration(cards));
      } else {
        setFilterMovies(filterDuration(cards));
      }
    } else {
      setFilterMovies(cards);
    }
    localStorage.setItem("shortMovies", !onShortFilm);
  }

  function handleFilterMoviesUpdate(movies, query, short) {
    const moviesList = movieFilter(movies, query, short);
    setCards(moviesList);
    setFilterMovies(short ? filterDuration(moviesList) : moviesList);
    localStorage.setItem("allMovies", JSON.stringify(movies));
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  function SearchMovies(query) {
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", onShortFilm);

    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleFilterMoviesUpdate(movies, query, onShortFilm);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          handleFilterMoviesUpdate(movies, query, onShortFilm);
          setisRequestError(false);
        })
        .catch((err) => {
          setisRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setCards(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilterMovies(filterDuration(movies));
      } else {
        setFilterMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setisShortFilm(true);
    } else {
      setisShortFilm(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filterMovies.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } else {
      setNotFound(false);
    }
  }, [filterMovies]);

  function movieFilter(movies, query) {
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

  return (
    <>
      {/* <Header isLogin={true} /> */}
      <main className="movies">
        <SearchForm
          SearchMovies={SearchMovies}
          onFilterMovies={handleShortFilm}
          onShortFilm={onShortFilm}
        />
        <MoviesCardList
          isSavedFilms={false}
          movies={filterMovies}
          onLikeClick={onLikeClick}
          onDeleteLikeClick={onDeleteLikeClick}
          savedMovieList={savedMovieList}
          isRequestError={isRequestError}
          notFound={notFound}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
