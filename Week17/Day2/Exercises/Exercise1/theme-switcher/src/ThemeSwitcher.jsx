import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        marginTop: "20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#333" : "#ddd",
        color: theme === "light" ? "#fff" : "#000",
        transition: "0.3s"
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;