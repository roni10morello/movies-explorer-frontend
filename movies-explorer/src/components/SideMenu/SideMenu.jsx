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
    <section className="side-menu">
      <button
        className={`side-menu__button side-menu__button_type_${
          !isOpen ? "active" : "close"
        }`}
        type="submit"
        onClick={MenuToggle}
      ></button>
      <nav className={`side-menu__navigation ${isOpen ? "open" : ""}`}>
        <div className="side-menu__navigation-list">
          <ul className="side-menu__navigation-links">
            <li className="side-menu__navigation-item">
              <Link to="/" className="side-menu__navigation-link">
                Главная
              </Link>
            </li>
            <li className="side-menu__navigation-item">
              <Link to="/movies" className="side-menu__navigation-link">
                Фильмы
              </Link>
            </li>
            <li className="side-menu__navigation-item">
              <Link to="/saved-movies" className="side-menu__navigation-link">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
            <Link
              to="/profile "
              className="side-menu__login-link side-menu__account-link "
            >
              Аккаунт
              <div className="side-menu__account-icon">
                <img
                  className="side-menu__account-button"
                  src={profileButton}
                  alt="Кнопка Аккаунт"
                />
              </div>
            </Link>
        </div>
      </nav>
    </section>
  );
}

export default SideMenu;
