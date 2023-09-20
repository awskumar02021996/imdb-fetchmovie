import React from "react";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movies/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
