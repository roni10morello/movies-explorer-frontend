import "./App.css"
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Promo from "../Promo/Promo";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Techs from "../Techs/Techs";
import NavTab from "../NavTab/NavTab";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";

function App() {

  return (
    // <CurrentUserContext.Provider>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route
            path="*"
            element={
             <Navigate to="/" replace /> 
            }
          />
        </Routes>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
