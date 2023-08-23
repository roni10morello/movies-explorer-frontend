import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SideMenu from "../SideMenu/SideMenu";
import LogoHeader from "./LogoHeader/LogoHeader";

function Header({ isLogin }) {
  return (
    <>
      {!isLogin ? (
        <>
          <header className="header">
            <nav className="header__menu header__menu-promo">
              <LogoHeader />
              <Navigation isLogin={isLogin} />
            </nav>
          </header>
        </>
      ) : (
        <>
          <header className="header">
            <nav className="header__menu header__menu-login">
              <LogoHeader />
              <Navigation isLogin={isLogin} />
              <SideMenu />
            </nav>
          </header>
        </>
      )}
    </>
  );
}

export default Header;
