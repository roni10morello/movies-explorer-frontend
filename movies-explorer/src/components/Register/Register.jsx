// import { useForm } from "../../hooks/useForm";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import AuthForm from "../AuthForm/AuthForm";

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
    resetForm();
  }

  return (
    <AuthForm
      id="register"
      name="register"
      title="Добро пожаловать!"
      textButton="Зарегистрироваться"
      textLabel="Уже зарегистрированы?"
      textLink="Войти"
      onSubmit={handleSubmit}
      link="/signin"
      isValid={isValid}
    >
      <label className="form__input-label" htmlFor="name">
        Имя
      </label>
      <input
        value={values.name || ""}
        className="form__input form__input_form_authorize"
        type="text"
        id="name"
        name="name"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
        onChange={handleChange}
      />
      <span
        id="name-error"
        className="form__error form__error_visible form__error_name_error"
      >
        {errors.name}
      </span>
      <label className="form__input-label" htmlFor="email">
        E-mail
      </label>
      <input
        value={values.email || ""}
        className="form__input form__input_form_authorize"
        type="email"
        id="email"
        name="email"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
        onChange={handleChange}
      />
      <span
        id="email-error"
        className="form__error form__error_visible form__error_email_error"
      >
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
        {errors.password}
      </span>
    </AuthForm>
  );
}
export default Register;
