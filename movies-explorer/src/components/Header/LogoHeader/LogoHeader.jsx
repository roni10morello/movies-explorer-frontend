import "./LogoHeader.css";
import { Link } from "react-router-dom";
import logo from "../../../images/header_logo.svg";


function LogoHeader() {
    return(
        <Link to="/" className="header-logo__homepagelink">
        <img className="header-logo" src={logo} alt="Логотип" />
      </Link>
    )
}

export default LogoHeader;