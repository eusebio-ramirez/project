import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useCustomNavigate from "../hooks/useCustomNavigate";

const NotFound = () => {
  const { goTo } = useCustomNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        La página que buscas no existe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goTo("/")}
        sx={{ mt: 3 }}
      >
        Ir al Inicio
      </Button>
    </Box>
  );
};

export default NotFound;
