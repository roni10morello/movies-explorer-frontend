import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { userInfo } from "../../utils/constants";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SideMenu from "../SideMenu/SideMenu";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/side" element={<SideMenu />} />
        <Route path="/profile" element={<Profile userInfo={userInfo} />} />
        <Route path="/movies" element={<Movies userInfo={userInfo} />} />
        <Route path="/saved-movies" element={<SavedMovies userInfo={userInfo} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
