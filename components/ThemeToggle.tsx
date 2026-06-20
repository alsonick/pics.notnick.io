import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full border
      border-zinc-200 bg-white/70 text-zinc-600 shadow-sm backdrop-blur
      transition duration-300 hover:text-zinc-900 dark:border-zinc-800
      dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-zinc-100"
      onClick={toggle}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle theme"
    >
      {mounted && dark ? (
        <FiSun className="text-lg" />
      ) : (
        <FiMoon className="text-lg" />
      )}
    </button>
  );
};
