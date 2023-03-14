import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

import Posts from "./pages/Posts";
import About from "./pages/About";
import "./styles/App.css";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/posts" element={<Posts/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
