import React, { useState } from "react";
import Home from "./pages/home";
import Booking from "./pages/booking";
import {HashRouter,Routes,Route} from "react-router-dom"

function App(){
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/:id" element={<Booking/>}/>
      </Routes>
    </HashRouter>
  
  )
}

export default App