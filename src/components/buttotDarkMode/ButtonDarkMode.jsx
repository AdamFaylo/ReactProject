import React from "react";
import "../buttotDarkMode/buttonDarkMode.css"



const ButtonDarkMode = () => {
  
  return (
    <div>
      <div className="btn_container">
        <input type="checkbox" id="darkmode-toggle" className="btn_darkMode"/>
        <label for="darkmode-toggle"></label>
      </div>
    </div>
  )
};

export default ButtonDarkMode;
