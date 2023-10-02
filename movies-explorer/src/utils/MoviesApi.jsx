import { MOVIE_API_URL } from "../utils/constants";

class MoviesApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`ALLARM: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
      //credentials: "include",
    }).then((res) => this._checkAnswer(res));
  }
}

const options = {
  url: MOVIE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
const moviesApi = new MoviesApi(options);
export default moviesApi;
