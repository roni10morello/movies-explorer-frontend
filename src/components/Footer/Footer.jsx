import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__container">
          <p className="footer__copyright">© {currentYear}</p>
          <nav className="footer__navigation">
            <ul className="footer__links">
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  href="https://practicum.yandex.ru/"
                  target="blank"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  target="blank"
                  href="https://github.com/roni10morello/movies-explorer-frontend"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
