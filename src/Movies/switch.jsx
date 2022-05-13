import React, { useContext } from "react";
import './switch.css'
import { ThemeContext } from "./ThemeContext";

const Switch = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  const handleTheme = () =>{
    setDarkMode(!darkMode);
  }
    return(

      <label className="switch">
        <input type="checkbox" onChange={handleTheme} defaultChecked  />
        <span className="slider round"></span>
      </label>
        
    );

}

export default Switch;