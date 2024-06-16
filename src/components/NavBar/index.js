import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import './index.css'
const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="nav-container">
      <h1>Weather App</h1>
      <div>
        <button onClick={toggleDarkMode} className={`toggle-button ${darkMode ? "button1" : "button2"}`}>
          {!darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
