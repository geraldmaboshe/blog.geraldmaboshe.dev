import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  let isDark = theme == "dark" ? true : false;
  const [isDarkMode, setDarkMode] = useState(isDark);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    setTheme(theme === "light" ? "dark" : "light");
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav>
      <ul className="flex justify-between mb-16 md:mb-8">
        <li className="md:grow text-4xl font-bold">
          <Link href="/">Blog</Link>
        </li>
        <div className="md:pl-10 flex-none">
          <DarkModeSwitch
            // style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
