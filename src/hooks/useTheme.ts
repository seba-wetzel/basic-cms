import { useEffect, useState } from "react";
export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState("light");
  const colorSchemaChange = (e: MediaQueryListEvent) => {
    setColorScheme(e.matches ? "dark" : "light");
  };
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", colorSchemaChange);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", colorSchemaChange);
    };
  }, []);
  return colorScheme;
};
