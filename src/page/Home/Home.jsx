import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const Home = () => {
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
      <Typography variant="h4">Tema Actual: {theme.palette.mode}</Typography>
    </Box>
  );
};

export default Home;

/*
Aspectos a considerar 

1.- Estructura de directorios 

2.- Utilizar estados locales y explicar el porque los utilizan 

3.- Patrones de comunicación de componentes. 

4.- Estado Global Context = Cambio de color de la aplicación 

5.- Enrutamiento: Dinamico y con hooks useLocation, useParams, useNavigate

6.- Not Found.   >>> useNavigate

7.- Optimización con useMemo y useCallback

8.- Custom Hook

9.- Redux (Agenda, Informe Actividades,Transparencia, Servicios)
*/
