import { put, fork, call, takeLatest } from "redux-saga/effects";
import { fetchMovies ,fetchMovie} from "./api";
import { getMovies, setMovies ,setMovie, getMovie} from "./features.js/movieSlice";

function* onLoadMoviesAsyn({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);

    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (err) {}
}

function* onLoadMovieAsyn({ payload }) {
  try {
    const movieId = payload;
    const response = yield call(fetchMovie, movieId);

    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (err) {}
}


function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsyn);
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsyn);
}

export const movieSaga = [fork(onLoadMovies) ,fork(onLoadMovie)];
