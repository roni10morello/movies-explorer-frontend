import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project" id="about-project">
      <h3 className="about-project__subtitle">О проекте</h3>
      <div className="about-project__container">
        <div className="about-project__container-info">
          <p className="about-project__container-subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__container-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__container-info">
          <p className="about-project__container-subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__container-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__progress">
        <div className="about-project__backend">
          <p className="about-project__work-time-back">1 неделя</p>
          <p className="about-project__work-type">Back-end</p>
        </div>
        <div className="about-project__frontend">
          <p
            className="about-project__work-time-front"
            style={{ color: "white" }}
          >
            4 недели
          </p>
          <p className="about-project__work-type">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
