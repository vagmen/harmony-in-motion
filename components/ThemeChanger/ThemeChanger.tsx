import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {resolvedTheme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <span className="material-icons-outlined">light_mode</span>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <span className="material-icons-outlined">dark_mode</span>
        </button>
      )}
    </div>
  );
};
