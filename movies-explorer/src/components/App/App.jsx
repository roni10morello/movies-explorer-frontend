import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import mainApi from "../../utils/MainApi";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const navigate = useNavigate();

  function handleSaveMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((newMovie) => {
        setSavedMovieList([newMovie, ...savedMovieList]);
      })
      .catch((err) => console.log(`ALLARM ${err}`));
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovieList((movies) =>
          movies.filter((c) => c._id !== movie._id)
        );
      })
      .catch((err) => console.log(`ALLARM ${err}`));
  }

  function handleUpdateUser(name, email) {
    mainApi
      .updateProfile({ name: name, email: email })
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        //setIsInfoToolTipOpen(true);
        console.log(`ALLARM ${err}`);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .authorize({ email: email, password: password })
      .then((user) => {
        setIsLogin(true);
        navigate("/movies", { replace: true });
        setCurrentUser(user.data);
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        setIsSuccess(false);
        console.log(`ALLARM ${err}`);
      });
  }

  function handleRegister(name, email, password) {
    mainApi
      .register({ name, email, password })
      .then((user) => {
        setIsLogin(true);
        setIsSuccess(true);
        setCurrentUser(user);
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(`ALLARM ${err}`);
      })

      .finally(() => setIsInfoToolTipOpen(true));
  }

  function handleLogOut() {
    mainApi
      .logOut()
      .then(() => {
        setIsLogin(false);
        localStorage.clear();
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(`ALLARM ${err}`);
      });
  }

  function closePopup() {
    setIsInfoToolTipOpen(false);
  }

  useEffect(() => {
    mainApi
      .checkToken()
      .then((user) => {
        setIsLogin(true);
        setCurrentUser(user.data);
        localStorage.removeItem("allMovies");
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(`ALLARM ${err}`);
        setIsLogin(false);
      });
  }, []);

  useEffect(() => {
    if (isLogin) {
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setSavedMovieList(movies);
        })
        .catch((err) => console.log(`ALLARM ${err}`));
    }
  }, [isLogin]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLogin={isLogin}
                element={Profile}
                onUpdateUser={handleUpdateUser}
                onSignOut={handleLogOut}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLogin={isLogin}
                onLikeClick={handleSaveMovie}
                onDeleteLikeClick={handleDeleteMovie}
                savedMovieList={savedMovieList}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLogin={isLogin}
                savedMovieList={savedMovieList}
                onDeleteLikeClick={handleDeleteMovie}
              />
            }
          />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoToolTipOpen}
          onClose={closePopup}
          isSuccess={isSuccess}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
