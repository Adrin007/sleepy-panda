import React, { useState } from "react";
import Home from "./pages/home";
import Booking from "./pages/booking";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App