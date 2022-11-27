import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../views/home/Home'
import Game from '../views/game/Game'

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<Game/>}/>
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
