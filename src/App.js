import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";
import Nav from "./components/Nav";
import "./App.css"


function App() {
  return (
    <>
    <Router>
    <div className="row">
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/:searchId" element={<Movies />}/>
    <Route path="/:searchId/:imdbID" element={<MovieInfo />}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
