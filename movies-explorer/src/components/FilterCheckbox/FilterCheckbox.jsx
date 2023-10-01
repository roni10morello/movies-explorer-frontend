import "./FilterCheckbox.css";

function FilterCheckbox({ onFilterMovies, onShortFilm }) {
  return (
    <div className="checkbox">
      <input
        className="checkbox__button"
        type="checkbox"
        onChange={onFilterMovies}
        checked={onShortFilm}
      ></input>
      <p className="checkbox__filter">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
