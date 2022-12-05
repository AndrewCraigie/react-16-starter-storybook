import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/molecules/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <header>
                <h1>React 16 Starter</h1>
            </header>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    )
};

export default App;