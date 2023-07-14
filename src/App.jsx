import React, { useState } from "react";
import Home from "./pages/home";
import Booking from "./pages/booking";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){
  return (
    <BrowserRouter  basename={"/sleepy-panda"}>
      <Routes>
        <Route exact path="/sleepy-panda" element={<Home/>}/>
        <Route exact path="/sleepy-panda/:id" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App