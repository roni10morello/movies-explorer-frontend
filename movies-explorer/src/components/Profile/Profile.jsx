import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Profile({ onUpdateUser, onSignOut }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);
  const [isEditProfile, setIsEditProfile] = useState(false);

  function handleChangeProfile() {
    if (!isEditProfile) {
      setIsEditProfile(false);
    } else {
      setIsEditProfile(true);
    }
  }


  useEffect(() => {
    setValues(currentUser);
  }, [setValues, currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser(values.name, values.email);
    setIsEditProfile(false);
    resetForm();
  }

  return (
    <>
      <Header isLogin={true} />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form
          className="profile__form"
          name="profile"
          onSubmit={handleSubmit}
          id="profile"
          //isvalid={isvalid}
        >
          <div className="profile__info">
            <label className="profile__input-label">Имя</label>
            <input
              value={values.name || ""}
              className="profile__form-input"
              type="text"
              id="name"
              name="name"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
              disabled={!isEditProfile}
              onChange={handleChange}
            ></input>
          </div>
          <span
            id="name-error"
            className="profile__form-error profile__form-error_visible"
          >
            {" "}
            {errors.name}
          </span>
          <div className="profile__info">
            <label className="profile__input-label">E-mail</label>
            <input
              value={values.email || ""}
              className="profile__form-input"
              type="email"
              id="email"
              name="email"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
              disabled={!isEditProfile}
              onChange={handleChange}
            ></input>
          </div>
          <span
            id="email-error"
            className="profile__form-error profile__form-error_visible"
          >
            {" "}
            {errors.email}
          </span>
        </form>
        {isEditProfile ? (
          <button
            className={`profile__button-save profile__button-save_${
              isValid ? "enable" : "disable"
            }`}
            type="submit"
            form="profile"
            disabled={
              !isValid
            }
            onChange={handleChangeProfile}
          >
            Сохранить
          </button>
        ) : (
          <button
            //type="button"
            className="profile__form-button-edit"
            onClick={() => setIsEditProfile(true)}
          >
            Редактировать
          </button>
        )}
        <button className="profile__form-button-logout" type="submit">
          <Link
            className="profile__link-logout"
            to="/signin"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </Link>
        </button>
      </section>
    </>
  );
}

export default Profile;
