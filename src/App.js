import { Routes, Route } from 'react-router-dom'
import React from 'react';
// import ReactDOM from 'react-dom';
import Homepage from "./Pages/Homepage"
import Courses from "./Pages/courses"
import About from "./Pages/about"
import Contact from "./Pages/contact"
import Module1 from "./Pages/module1"
import Module2 from "./Pages/module2"

import './App.css'







function App() {
  //path means Url for the browser to display your component as a page
  return (
    <div>

      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Courses />} path="/courses" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Module1 />} path="/module1" />
        <Route element={<Module2 />} path="/module2" />
      </Routes>

    </div>
  );
}
export default App;