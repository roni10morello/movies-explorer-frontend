import "./MoviesCard.css";
import { MOVIE_URL, HOUR } from "../../utils/constants";
import { useLocation } from "react-router-dom";

function MovieCard({
  movie,
  saved,
  onLikeClick,
  onDeleteLikeClick,
  savedMovieList,
}) {
  const location = useLocation();
  const savedMoviesPage = location.pathname === "/saved-movies";

  function timeConversion(duration) {
    const minutes = duration % HOUR;
    const hours = Math.floor(duration / HOUR);

    return `${hours}ч${minutes > 0 ? ` ${minutes}м` : ""}`;
  }

  function handleDeleteLikeClick() {
    onDeleteLikeClick(movie);
  }

  function onCardClick() {
    if (saved) {
      onDeleteLikeClick(
        savedMovieList.filter((c) => c.movieId === movie.id)[0]
      );
    } else {
      onLikeClick(movie);
    }
  }

  return (
    <article className="movie-card" key={movie.id}>
      <a
        className="movie-card__trailer-link"
        target="blank"
        href={movie.trailerLink}
      >
        <img
          className="movie-card__image"
          src={
            location.pathname === "/saved-movies"
              ? `${movie.image}`
              : `${MOVIE_URL}${movie.image.url}`
          }
          alt={movie.nameRU}
          title={movie.description}
        />
      </a>
      <div className="movie-card__info">
        <h2 className="movie-card__name">{movie.nameRU}</h2>
        {savedMoviesPage ? (
          <button
            className="movie-card__delete-button"
            type="button"
            onClick={handleDeleteLikeClick}
          ></button>
        ) : (
          <button
            className={
              saved
                ? "movie-card__like-button movie-card__like-button-active"
                : "movie-card__like-button"
            }
            type="button"
            onClick={onCardClick}
          ></button>
        )}
      </div>
      <p className="movie-card__duration">{timeConversion(movie.duration)}</p>
    </article>
  );
}

export default MovieCard;
