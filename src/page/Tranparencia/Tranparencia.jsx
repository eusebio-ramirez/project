import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const Transparencia = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">Transparencia</Typography>
    </Box>
  );
};

export default Transparencia;
