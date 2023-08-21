import { useState } from "react";
import "./MoviesCard.css";

function MovieCard({ movie }) {

  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <article className="movie-card">
      <img className="movie-card__image" src={movie.link} alt={movie.name} />
      <div className="movie-card__info">
        <h2 className="movie-card__name">{movie.name}</h2>
        <button
          className={
            isLiked
              ? "movie-card__like-button movie-card__like-button-active"
              : "movie-card__like-button"
          }
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className="movie-card__duration">{movie.duration}</p>
    </article>
  );
}

export default MovieCard;
