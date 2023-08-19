import { useState } from "react";
import "./MoviesCard.css";

function MovieCard({ movie }) {

  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <article className="movie__card">
      <img className="movie__image" src={movie.link} alt={movie.name} />
      <div className="movie__info">
        <h2 className="movie__name">{movie.name}</h2>
        <button
          className={
            isLiked
              ? "movie__like-button movie__like-button-active"
              : "movie__like-button"
          }
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className="movie__duration">{movie.duration}</p>
    </article>
  );
}

export default MovieCard;
