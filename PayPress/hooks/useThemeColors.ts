import { useThemeContext } from "../app/ThemeContext";
import { Colors } from "@/constants/Colors";

type ColorType = "text" | "background" | "card" | "border" | "primary";

export function useThemeColors() {
  const { isDark } = useThemeContext();

  const colors = {
    text: isDark ? Colors.white : Colors.darkMode,
    background: isDark ? "#1A1B41" : "#FAFAFA",
    card: isDark ? "#1E1E1E" : "#F5F5F5",
    border: isDark ? "#2C2C2C" : "#E0E0E0",
    primary: "#0B57BD",
  };

  const getColor = (type: ColorType) => colors[type];

  return { colors, getColor };
}
