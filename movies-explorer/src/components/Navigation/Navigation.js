import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/sign-up" className="navigation__link">
        Регистрация
      </Link>
      <Link
        to="/sign-in"
        className="navigation__link navigation__link_type_login"
      >
        Войти
      </Link>
    </div>
  );
}

export default Navigation;
