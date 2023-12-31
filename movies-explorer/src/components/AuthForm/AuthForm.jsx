import "./AuthForm.css";
import { Link } from "react-router-dom";
import LogoHeader from "../Header/LogoHeader/LogoHeader";

function AuthForm(props) {
  return (
    <>
      <div className="authorize">
        <div className="authorize__container">
          <LogoHeader />
          <h3 className="authorize__title">{props.title}</h3>
          <form
            className={`form form_type_auth form_type_${props.name}`}
            name={`form-type_${props.name}`}
            onSubmit={props.onSubmit}
          >
            {props.children}
          </form>
          <Link to="/profile">
            <button
              className="form__button-save form__button-save_type_auth"
              type="submit"
            >
              {props.textButton}
            </button>
          </Link>

          <p className="authorize__text-label">
            {props.textLabel}
            <Link to={props.link} className="authorize__link-login">
              {props.textLink}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
