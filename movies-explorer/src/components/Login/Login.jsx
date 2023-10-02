import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { EMAIL_VALIDATION } from "../../utils/constants";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Login({ onLogin }) {

  
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values.email, values.password);
    resetForm();
  }

  // const { values, handleChange } = useForm({
  //   email: "",
  //   password: "",
  // });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onLogin(values);
  // }

  return (
    <AuthForm
      id="login"
      name="login"
      title="Рады видеть!"
      textButton="Войти"
      textLabel="Ещё не зарегистрированы?"
      textLink="Регистрация"
      link="/signup"
      onSubmit={handleSubmit}
      isValid={isValid}
      
      
    >
      <label className="form__input-label" htmlFor="email">
        E-mail
      </label>
      <input
        value={values.email || ""}
        className="form__input form__input_form_authorize"
        type="email"
        id="email"
        name="email"
        pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
        onChange={handleChange}
      />
      <span
        id="email-error"
        className="form__error form__error_visible form__error_email_error form__error_email_error"
      >
        {" "}
        {errors.email}
      </span>
      <label className="form__input-label" htmlFor="password">
        Пароль
      </label>
      <input
        value={values.password || ""}
        className="form__input form__input_form_authorize"
        type="password"
        name="password"
        id="password"
        minLength="4"
        maxLength="16"
        required
        autoComplete="off"
        onChange={handleChange}
      />
      <span
        id="password-error"
        className="form__error form__error_visible form__error_password-error"
      >
        {" "}
        {errors.password}
      </span>
    </AuthForm>
  );
}
export default Login;
