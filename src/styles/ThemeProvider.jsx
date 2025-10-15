import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
    light: {
        background: "#ffffff",
        text: "#222222",
        card: "#f8f8f8",
        border: "#e0e0e0",
        tableHeader: "#f0f0f0",
        tableRow: "#ffffff",
        tableRowAlt: "#f9f9f9",
    },
    dark: {
        background: "#1e1e1e",   // soft dark gray
        text: "#e0e0e0",         // light gray text
        card: "#2a2a2a",         // slightly lighter card
        border: "#444444",       // gray borders
        tableHeader: "#333333",
        tableRow: "#2a2a2a",
        tableRowAlt: "#242424",
    },
};

export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", themeName);
    }, [themeName]);

    const toggleTheme = () => {
        setThemeName(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);