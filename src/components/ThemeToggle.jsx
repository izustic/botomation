import { useTheme } from "../hooks/useTheme.jsx";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle"
			aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
		>
			{theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
		</button>
	);
}
