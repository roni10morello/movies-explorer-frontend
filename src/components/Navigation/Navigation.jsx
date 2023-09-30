import "./Navigation.css";
import { Link } from "react-router-dom";
import profileButton from "../../images/login-btn.svg";

function Navigation({ isLogin }) {
  return !isLogin ? (
    <nav className="navigation">
      <Link to="/signup" className="navigation__link">
        Регистрация
      </Link>
      <Link
        to="/signin"
        className="navigation__link navigation__link_type_login"
      >
        Войти
      </Link>
    </nav>
  ) : (
    <nav className="navigation__account">
      <div className="navigation__account-links">
        <Link to="/movies" className="navigation__login-link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__login-link">
          Сохраненые фильмы
        </Link>
      </div>
      <Link
        to="/profile "
        className="navigation__login-link navigation__account-link "
      >
        Аккаунт
        <div className="navigation__account-icon">
          <img
            className="navigation__account-button"
            src={profileButton}
            alt="Кнопка Аккаунт"
          />
        </div>
      </Link>
    </nav>
  );
}

export default Navigation;
