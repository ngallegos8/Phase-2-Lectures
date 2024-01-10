import React, {useState} from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {    /* DELIVERABLE 2-2.3 Imports prop */

  function handleClick(){
    onToggleDarkMode()                                    /* DELIVERABLE 2-3 Calls prop */
    console.log(isDarkMode)
  }
  return (
    <div>
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"} </button>
    </header>
    </div>
  );
}

export default Header;
