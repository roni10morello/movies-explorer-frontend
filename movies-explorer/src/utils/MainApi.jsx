import { MOVIE_URL } from "../utils/constants";

class MainApi {
  constructor(options) {
    this._url = options.url;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`ALLARM: ${res.status}`);
  }

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkError(res));
  }

  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkError(res));
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkError(res));
  }

  logOut() {
    return fetch(`${this._url}/signout`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkError(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._checkError(res));
  }

  updateProfile({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }).then((res) => this._checkError(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._checkError(res));
  }

  createMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: MOVIE_URL+movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: MOVIE_URL+movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this._checkError(res));
  }

  deleteMovie(_id) {
    return fetch(`${this._url}/movies/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._checkError(res));
  }
}

const options = {
  url: "https://api.morello.nomoredomains.xyz",
  //url: "http://localhost:4000",
};

const mainApi = new MainApi(options);
export default mainApi;
