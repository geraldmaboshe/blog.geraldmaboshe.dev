import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let isDark = theme == "dark" ? true : false;
  const [isDarkMode, setDarkMode] = React.useState(isDark);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    setTheme(theme === "light" ? "dark" : "light");
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  console.log("Mounted", mounted);
  console.log("theme", theme);

  return (
    <nav>
      <ul className="flex justify-between mb-16 md:mb-32">
        <li className="md:grow text-2xl">
          <Link href="/">Gerald Maboshe</Link>
        </li>
        <li className="flex-none text-2xl">
          <Link href="/blog">Blog</Link>
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
