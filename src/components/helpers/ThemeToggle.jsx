import React from "react";
import { useTheme } from "../../styles/ThemeProvider";
import "../../styles/ThemeToggle.css";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
    const { themeName, toggleTheme } = useTheme();

    return (
        <button className="theme-toggle-btn" onClick={toggleTheme}>
            {themeName === "dark" ? <FaMoon /> : <FaSun />}
        </button>
    );
};
