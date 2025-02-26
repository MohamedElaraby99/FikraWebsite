// ThemeToggle.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
      aria-label="تبديل المظهر"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-500 transform rotate-0 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 transform rotate-0 transition-transform duration-500" />
      )}
    </button>
  );
}
