import { Routes, Route } from 'react-router-dom'
import React from 'react';
// import ReactDOM from 'react-dom';
import Homepage from "./Pages/Homepage"

import './App.css'







function App() {
  //path means Url for the browser to display your component as a page
  return (
    <div>

      <Routes>
        <Route element={<Homepage />} path="/" />
      </Routes>

    </div>
  );
}
export default App;