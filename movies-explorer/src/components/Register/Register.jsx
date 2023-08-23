import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
  return (
    <AuthForm
      name="register"
      title="Добро пожаловать!"
      textButton="Зарегистрироваться"
      textLabel="Уже зарегистрированы?"
      textLink="Войти"
      link="/signin"
    >
      <label className="form__input-label" for="name">
        Имя
      </label>
      <input
        className="form__input form__input_form_authorize"
        type="text"
        id="name"
        name="name"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
      />
      <span
        id="name-error"
        className="form__error form__error_visible form__error_name_error"
      ></span>
      <label className="form__input-label" for="email">
        E-mail
      </label>
      <input
        className="form__input form__input_form_authorize"
        type="email"
        id="email"
        name="email"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
      />
      <span
        id="email-error"
        className="form__error form__error_visible form__error_email_error"
      ></span>
      <label className="form__input-label" for="password">
        Пароль
      </label>
      <input
        className="form__input form__input_form_authorize"
        type="password"
        name="password"
        id="password"
        minLength="4"
        maxLength="16"
        required
        autoComplete="off"
      />
      <span
        id="password-error"
        className="form__error form__error_visible form__error_password-error"
      ></span>
    </AuthForm>
  );
}
export default Register;
