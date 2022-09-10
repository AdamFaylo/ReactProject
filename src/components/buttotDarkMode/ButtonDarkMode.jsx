import React from "react";
import "../buttotDarkMode/buttonDarkMode.css"

const ButtonDarkMode = () => {
  return (
    <div>
      <div>
        <input type="checkbox" id="darkmode-toggle" />
        <label for="darkmode-toggle"></label>
      </div>
    </div>
  );
};

export default ButtonDarkMode;
