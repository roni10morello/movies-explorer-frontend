import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <nav className="portfolio__navigation">
        <ul className="portfolio__links">
          <a
            className="portfolio__link"
            href="https://practicum.yandex.ru/"
            target="blank"
          >
            <li className="portfolio__element">
              <p className="portfolio__name-link">Статичный сайт</p>
              <p className="portfolio__element-link">↗</p>
            </li>
          </a>
          <a
            className="portfolio__link"
            href="https://practicum.yandex.ru/"
            target="blank"
          >
            <li className="portfolio__element">
              <p className="portfolio__name-link">Адаптивный сайт</p>
              <p className="portfolio__element-link">↗</p>
            </li>
          </a>
          <a
            className="portfolio__link"
            href="https://practicum.yandex.ru/"
            target="blank"
          >
            <li className="portfolio__element">
              <p className="portfolio__name-link">Одностраничное приложение</p>
              <p className="portfolio__element-link">↗</p>
            </li>
          </a>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
