import { useTheme } from "../hooks/useTheme.jsx";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle"
			aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
		>
			{theme === "light" ? "🌙" : "☀️"}
		</button>
	);
}
