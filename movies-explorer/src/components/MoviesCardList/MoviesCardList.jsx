import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  movies,
  onLikeClick,
  onDeleteLikeClick,
  savedMovieList,
  isRequestError,
  notFound,
  isLoading,
}) {
  const [shownMovies, setShownMovies] = useState(0);
  const location = useLocation();
  const moviesPage = location.pathname === "/movies";
  const moviesSavedPage = location.pathname === "/saved-movies";

  function getSavedUserMovies(savedMovieList, movie) {
    return savedMovieList.find((item) => item.movieId === movie.id);
  }

  function shownCard() {
    const ScreenWidth = window.innerWidth;
    if (ScreenWidth > 1024) {
      setShownMovies(12);
    } else if (ScreenWidth > 750) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownCard);
    }, 1000);
  });

  useEffect(() => {
    shownCard();
  }, []);

  function showMoreCard() {
    const ScreenWidth = window.innerWidth;
    if (ScreenWidth > 1024) {
      setShownMovies(shownMovies + 3);
    } else if (ScreenWidth > 750) {
      setShownMovies(shownMovies + 2);
    } else {
      setShownMovies(shownMovies + 2);
    }
  }

  return (
    <section className="movies-cards">
      {isLoading && <Preloader />}
      {notFound && !isLoading && (
         <span className="movies-cards__search-error">Ничего не найдено</span>
      )}
      {isRequestError && !isLoading && (
        <span className="movies-cards__search-error">Произошла ошибка</span>
      )}
      {moviesSavedPage ? (
        <>
          <div className="movies-cards__list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id || movie._id}
                movie={movie}
                movies={movies}
                onLikeClick={onLikeClick}
                onDeleteLikeClick={onDeleteLikeClick}
                saved={getSavedUserMovies(savedMovieList, movie)}
                savedMovieList={savedMovieList}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="movies-cards__list">
            {movies.slice(0, shownMovies).map((movie) => (
              <MovieCard
                key={movie.id || movie._id}
                movie={movie}
                movies={movies}
                onLikeClick={onLikeClick}
                onDeleteLikeClick={onDeleteLikeClick}
                saved={getSavedUserMovies(savedMovieList, movie)}
                savedMovieList={savedMovieList}
              />
            ))}
          </div>
          {moviesPage && movies.length > shownMovies ? (
            <button
              className="movies-cards__button"
              type="submit"
              onClick={showMoreCard}
            >
              Еще
            </button>
          ) : (
            <></>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
