import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <nav className="portfolio__navigation">
        <ul className="portfolio__links">
          <li className="portfolio__element">
            <a
              className="portfolio__link"
              href="https://practicum.yandex.ru/"
              target="blank"
            >
              <p className="portfolio__name-link">Статичный сайт</p>
              <p className="portfolio__element-link">↗</p>
            </a>
          </li>

          <li className="portfolio__element">
            <a
              className="portfolio__link"
              href="https://practicum.yandex.ru/"
              target="blank"
            >
              <p className="portfolio__name-link">Адаптивный сайт</p>
              <p className="portfolio__element-link">↗</p>
            </a>
          </li>
          <li className="portfolio__element">
            <a
              className="portfolio__link"
              href="https://practicum.yandex.ru/"
              target="blank"
            >
              <p className="portfolio__name-link">Одностраничное приложение</p>
              <p className="portfolio__element-link">↗</p>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
