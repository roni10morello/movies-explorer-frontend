import "./AboutMe.css";
import profilePic from "../../images/profile-pic.png";

function AboutMe() {
  return (
    <>
      <section className="about-me" id="about-me">
        <h3 className="project__subtitle">Студент</h3>
        <div className="about-me__container">
          <div className="about-me__profile">
            <p className="about-me__author">Виталий</p>
            <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className="about-me__link" href="https://github.com/">
              Github
            </a>
          </div>
          <img
            className="about-me__profile-pic"
            src={profilePic}
            alt="Фото профиля"
          />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
