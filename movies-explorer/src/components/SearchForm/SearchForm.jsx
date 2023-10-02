import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ SearchMovies, onFilterMovies, onShortFilm }) {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [queryError, setQueryError] = useState(false);

  const moviesPage = location.pathname === "/movies";

  function handleFormSubmit(event) {
    event.preventDefault();
    if (query.length === 0) {
      setQueryError(true);
    } else {
      setQueryError(false);
      SearchMovies(query);
    }
  }

  function handleChangeInput(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    if (moviesPage && localStorage.getItem("movieSearch")) {
      const localStorageQuery = localStorage.getItem("movieSearch");
      setQuery(localStorageQuery);
    }
  }, []);

  return (
    <section className="search">
      <form
        className="search__form"
        id="search"
        name="search"
        onSubmit={handleFormSubmit}
      >
        <div className="search__form-container">
          <input
            className="search__form-input"
            type="text"
            id="search"
            name="search"
            placeholder="Фильм"
            value={query || ""}
            onChange={handleChangeInput}
          />
          <button className="search__form-button" type="submit"></button>
        </div>
      </form>
      {queryError && (
        <span className="search__form-error">Введите ключевое слово</span>
      )}
      <FilterCheckbox
        onFilterMovies={onFilterMovies}
        onShortFilm={onShortFilm}
      />
    </section>
  );
}

export default SearchForm;
