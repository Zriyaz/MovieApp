import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetailsPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
