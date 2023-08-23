import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";

function Profile({ userInfo }) {
  return (
    <>
      <Header isLogin={true} />
      <section className="profile">
        <h2 className="profile__title">Привет, {userInfo.name}!</h2>
        <form className="profile__form" name="profile" noValidate>
          <div className="profile__info">
            <label className="profile__input-label">Имя</label>
            <input
              value={userInfo.name}
              className="profile__form-input"
              type="text"
              id="name"
              name="name"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
            ></input>
          </div>
          <div className="profile__info">
            <label className="profile__input-label">E-mail</label>
            <input
              value={userInfo.email}
              className="profile__form-input"
              type="email"
              id="email"
              name="email"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
            ></input>
          </div>
        </form>
        <button className="profile__form-button-edit" type="submit">
          Редактировать
        </button>
        <button className="profile__form-button-logout" type="submit">
          <Link className="profile__link-logout" to="/signin">
            Выйти из аккаунта
          </Link>
        </button>
      </section>
    </>
  );
}

export default Profile;
