"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
      <Button className="relative" variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <span className="sr-only">Toggle theme</span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {theme === "light" ? <Sun /> : <Moon />}
        </span>
      </Button>
        
  )
}

export default ThemeSwitcher; 

