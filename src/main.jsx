// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router";
// import App from './App.jsx'
// import './main.sass'

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import Splashscreen from './pages/Splashscreen.jsx'
import Dogs from './pages/Dogs.jsx'
import Details from './pages/Details.jsx'

import './main.sass'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/splashscreen' element={<Splashscreen />} />
          <Route path='/' element={<Dogs />} />
          <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)