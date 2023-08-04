import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className=" navtab__list">
        <li className="navtab_element">
        <a className="navtab__link" href="#about-project">О проекте</a>
        </li>
        <li className="navtab_element">
        <a className="navtab__link" href="#techs">Технологии</a>
        </li>
        <li className="navtab_element">
          <a className="navtab__link" href="#about-me">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
