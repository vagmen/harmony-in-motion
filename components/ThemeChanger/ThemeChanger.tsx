import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconButton } from "../IconButton/IconButton";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconButton
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      variant="outlined"
    >
      {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
    </IconButton>
  );
};
