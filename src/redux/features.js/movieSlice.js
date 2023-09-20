import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice= createSlice({
    name: "movies",
    initialState:{
        movieList: [],
        movie:{}
    },
    reducers:{
        getMovies(name){
            return name;
        },
        setMovies(state, action){
state.movieList =action.payload;
        },
        getMovie(id){
            return id;
        },
        setMovie(state,action){
            state.movie = action.payload;
        },
    }
})
export const {setMovies ,getMovies ,getMovie,setMovie} = MoviesSlice.actions;
export default MoviesSlice.reducer;