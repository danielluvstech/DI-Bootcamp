import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#121212",
        color: theme === "light" ? "#121212" : "#f0f0f0",
        transition: "all 0.3s ease"
      }}
    >
      <h1>React Theme Switcher</h1>
      <p>The current theme is <b>{theme}</b></p>
      <ThemeSwitcher />
    </div>
  );
}
