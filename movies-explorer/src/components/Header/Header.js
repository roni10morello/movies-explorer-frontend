import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__menu header__menu-promo">
          <Link to="/" className="header__homepagelink">
            <img className="header__logo" src={logo} alt="Логотип" />
          </Link>
          <Navigation />
        </nav>
      </header>
    </>
  );
}

export default Header;
