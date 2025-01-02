import React from "react";
import { useTheme } from "../Context/ThemeProvider";

const DarkModeToggle = () => {
  const [darkMode, toggleTheme] = useTheme();

  return (
    <button onClick={toggleTheme} className="dark-mode-toggle">
      {darkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
