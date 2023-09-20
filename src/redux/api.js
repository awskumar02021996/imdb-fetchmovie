import axios  from "axios";

const API_END_POINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async(movieName)=>axios.get(`${ API_END_POINT}&s=${movieName}`);

export const fetchMovie = async(movieId)=>axios.get(`${ API_END_POINT}&i=${movieId}`);