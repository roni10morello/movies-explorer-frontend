import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SideMenu from "../SideMenu/SideMenu";
import LogoHeader from "./LogoHeader/LogoHeader";
import { useLocation } from "react-router-dom";

function Header({ isLogin }) {
  const location = useLocation();
  const promoPage = location.pathname === "/";
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
      ) : promoPage ?(
        <>
          <header className="header">
            <nav className="header__menu header__menu-login-promo">
              <LogoHeader />
              <Navigation isLogin={isLogin} />
              <SideMenu />
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
