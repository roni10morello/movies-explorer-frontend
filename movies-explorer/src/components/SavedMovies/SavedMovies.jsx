import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movieList } from "../../utils/constants";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies() {
  const movieData = movieList;
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <>
      <Header isLogin={true} />
      <main className="saved-movies">
        <SearchForm />
        <FilterCheckbox />
        {isLoading ? <Preloader /> : <MoviesCardList movies={movieData} />}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
