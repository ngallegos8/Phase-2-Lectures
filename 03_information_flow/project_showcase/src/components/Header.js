import React, {useState} from "react";

<<<<<<< HEAD
const Header = ({ isDarkMode, onToggleDarkMode }) => {    /* DELIVERABLE 2-2.3 Imports prop */

  function handleClick(){
    onToggleDarkMode()                                    /* DELIVERABLE 2-3 Calls prop */
    console.log(isDarkMode)
=======
const Header = ({isDarkMode, setDarkMode}) => {
  //Update state when button is clicked
  // const handleClick = () => {
  //   setIsDarkMode(!isDarkMode)
  // }

  function handleClick(){
    setDarkMode(!isDarkMode)
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
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
