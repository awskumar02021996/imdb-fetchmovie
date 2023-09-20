import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga";
import MoviesReducer from "../redux/features.js/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        movie:MoviesReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);
export default store ;