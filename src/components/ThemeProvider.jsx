import { useState, useEffect } from "react";
import { ThemeContext } from "../hooks/useTheme.jsx";

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// Check localStorage for saved theme, default to 'light'
		const savedTheme = localStorage.getItem("theme");
		return savedTheme || "light";
	});

	useEffect(() => {
		// Apply theme to document
		document.documentElement.setAttribute("data-theme", theme);
		// Save to localStorage
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
