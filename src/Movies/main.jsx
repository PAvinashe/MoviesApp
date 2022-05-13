import React, { useState, useEffect } from "react";
import './MoviesStyle.css'
import Header from "./header";
import LoadMovies from './showMovies'
import { ThemeProvider } from "./ThemeContext";


const Main = () => {
    
     return(
         <ThemeProvider>
             <div className="container">
                <Header />
                <LoadMovies />
            </div>
         
         </ThemeProvider>      
         
     );

}

export default Main;