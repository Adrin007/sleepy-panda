import React, { useState } from "react";
import Home from "./pages/home";
import Booking from "./pages/booking";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/:id" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App