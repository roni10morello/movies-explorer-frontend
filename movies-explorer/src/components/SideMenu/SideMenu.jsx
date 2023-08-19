import "./SideMenu.css";
import { Link } from "react-router-dom";
import profileButton from "../../images/login-btn.svg";
import { useState } from "react";

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function MenuToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="side__menu">
      {/* <button
        className="side-menu__button"
        type="submit"
        onClick={MenuToggle}
      ></button> */}
      <button
        className={`side-menu__button side-menu__button_type_${
          !isOpen ? "active" : "close"
        }`}
        type="submit"
        onClick={MenuToggle}
      ></button>
      <nav className={`side-menu__navigation ${isOpen ? "open" : ""}`}>
        <ul className="side-menu__navigation-list">
          <div className="side-menu__navigation-links">
            <li className="side-menu__navigation-item">
              <Link to="/movies" className="side-menu__navigation-link">
                Главная
              </Link>
            </li>
            <li className="side-menu__navigation-item">
              <Link to="/movies" className="side-menu__navigation-link">
                Фильмы
              </Link>
            </li>
            <li className="side-menu__navigation-item">
              <Link to="/movies" className="side-menu__navigation-link">
                Сохранённые фильмы
              </Link>
            </li>
          </div>

          <li className="side-menu__navigation-item">
            <Link
              to="/profile "
              className="navigation__login-link navigation__account-link "
            >
              Аккаунт
              <div className="header__account-icon">
                <img
                  className="header__account-button"
                  src={profileButton}
                  alt="Кнопка Аккаунт"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default SideMenu;
