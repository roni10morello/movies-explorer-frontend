import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" name="search">
        <div className="search__form-container">
          <input
            className="search__form-input"
            type="text"
            id="search"
            name="search"
            required
            minLength="2"
            maxLength="40"
            placeholder="Фильм"
          />
          <button className="search__form-button" type="submit"></button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
