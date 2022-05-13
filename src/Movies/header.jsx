import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Switch from "./switch";


const Header = () => {
    const {darkMode} = useContext(ThemeContext);    
return(
    <div className={darkMode ? "headerDark" : "header"}>
         <div className="heading1"><h3>Movies</h3></div>
         <div className="btn1"><Switch /></div>
    </div>
);
}

export default Header;