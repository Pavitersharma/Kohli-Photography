import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/component/Header";
import Homepage from "./assets/pages/Homepage";
import About from "./assets/pages/About";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./assets/pages/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
