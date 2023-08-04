import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login() {


  return (
    <AuthForm
      name="login"
      title="Вход"
      textButton="Войти"
    >
      <input
        className="form__input form__input_form_authorize"
        type="email"
        id="email"
        name="email"
        minLength="2"
        maxLength="40"
        required
        placeholder="Email"
        autoComplete="off"
      />
      <span
        id="email-error"
        className="form__error form__error_visible form__error_email_error form__error_email_error"
      ></span>
      <input
        className="form__input form__input_form_authorize"
        type="password"
        name="password"
        id="password"
        minLength="4"
        maxLength="16"
        placeholder="Пароль"
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
export default Login;
