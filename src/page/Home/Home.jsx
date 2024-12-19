import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import AutoCarousel from "../../components/Carousel/AutoCarousel";
import TitlePage from "../../components/Titles/Title-page";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AutoCarousel />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "url(https://dif.hidalgo.gob.mx/img/DIF_LOGO-01.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: 200,
            height: 200,
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <Typography
          sx={{ fontSize: "2.5rem", fontWeight: 700, textAlign: "center" }}
        >
          SISTEMA PARA EL DESARROLLO INTEGRAL DE LA FAMILIA DEL ESTADO DE
          HIDALGO
        </Typography>

        <TitlePage title="FUNCIONES" />
        <Typography
          sx={{
            fontSize: "1rem",
            textAlign: "justify",
            color: theme.palette.text.secondary,
          }}
        >
          Desarrollar acciones en materia de asistencia social de manera
          corresponsable y en apego a lo establecido en las leyes y lineamientos
          aplicables a través de la ejecución de programas y proyectos
          encaminados al beneficio de las familias hidalguenses más vulnerables
          a fin de contribuir a su desarrollo humano y calidad de vida.
        </Typography>

        <TitlePage title="REUNIONES TÉCNICAS 2024" />

        <TitlePage title="BOLETINES DE PRENSA" />

        <TitlePage title="PRESIDENTA HONORARIA DEL PATRONATO" />

        <TitlePage title="ITULAR DEL SISTEMA DIF HIDALGO" />

        <TitlePage title="COMUNICADOS" />

        <TitlePage title="UBICACIÓN" />
      </Container>
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
