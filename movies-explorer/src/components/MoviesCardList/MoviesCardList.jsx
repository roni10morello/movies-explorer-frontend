import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import {
  DEKSTOP,
  TAB,
  MOBILE,
  DEKSTOP_WIDTH,
  TAB_WIDTH,
  DEKSTOP_CARDS,
  TAB_CARDS,
  MOBILE_CARDS,
} from "../../utils/constants";

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
    if (ScreenWidth > DEKSTOP_WIDTH) {
      setShownMovies(DEKSTOP_CARDS);
    } else if (ScreenWidth > TAB_WIDTH) {
      setShownMovies(TAB_CARDS);
    } else {
      setShownMovies(MOBILE_CARDS);
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
    if (ScreenWidth > DEKSTOP_WIDTH) {
      setShownMovies(shownMovies + DEKSTOP);
    } else if (ScreenWidth > TAB_WIDTH) {
      setShownMovies(shownMovies + TAB);
    } else {
      setShownMovies(shownMovies + MOBILE);
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
