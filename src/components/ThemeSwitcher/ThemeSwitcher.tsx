import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <button
      className="btn-ghost btn"
      data-set-theme={theme === "dark" ? "night" : "cmyk"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MoonIcon className="h-5 w-5 fill-primary stroke-primary" />
      ) : (
        <SunIcon className="h-5 w-5 fill-primary stroke-primary" />
      )}
    </button>
  );
}
