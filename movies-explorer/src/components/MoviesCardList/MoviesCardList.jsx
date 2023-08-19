import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
      <button className="movies-cards__button" type="submit">Еще</button>
    </section>
  );
}

export default MoviesCardList;
