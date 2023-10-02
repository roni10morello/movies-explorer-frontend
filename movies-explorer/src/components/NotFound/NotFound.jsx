import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link onClick={() => navigate(-2)} className="not-found__link">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
