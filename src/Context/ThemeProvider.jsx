import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode ((prev) => {
            const newMode = !prev;
            document.documentElement.setAttribute('dark-theme', newMode ? "light" : "dark");
            return newMode;
        }); 
    };
    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider"); 
    }
    const { darkMode, toggleTheme } = context;
    return [darkMode, toggleTheme]; // Return as an array
};

