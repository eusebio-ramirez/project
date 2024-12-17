import { Button, Box } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={toggleTheme}
        sx={{
          borderRadius: "50%",
          width: 56,
          height: 56,
          minWidth: 56,
        }}
      >
        {mode === "light" ? "🌙" : "☀️"}
      </Button>
    </Box>
  );
};

export default ThemeToggleButton;
