import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeSwitcher() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <select data-choose-theme className="select select-sm ">
      <option value="night">
        🌙
      </option>
      <option value="cmyk">
        ☀️
      </option>
    </select>
  );
}
