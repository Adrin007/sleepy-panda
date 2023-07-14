import React, { useState } from "react";
import Home from "./pages/home";
import Booking from "./pages/booking";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/sleepy-panda" element={<Home/>}/>
        <Route path="/sleepy-panda/:id" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App