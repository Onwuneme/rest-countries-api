"use client";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

import { useEffect, useState } from "react";

export default function Nav() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersColorScheme) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("theme-data", theme);
  }, [theme]);

  return (
    <div className=" flex justify-between p-5 bg-elementBackground shadow-2xl">
      <h2 className="font-bold">Where in the world?</h2>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? (
          <div className="flex gap-2 items-center">
            <IoMoon /> <span>Dark Mode</span>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <LuSun /> <span>Light Mode</span>
          </div>
        )}
      </button>
    </div>
  );
}
