import { useTheme } from "@emotion/react";
import { Box, Card, Container, Grid } from "@mui/material";
import { informesActividades } from "../../json/informesActividades";
import TitlePage from "../../components/Titles/Title-page";

const InformeActividades = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <TitlePage title="Informe Anual de Actividades de la Presidenta del Patronato" />

      <Grid container spacing={2}>
        {informesActividades.map((informe, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  backgroundImage: `url(${informe.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  padding: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong>{informe.informe}</strong>
                  <strong>{informe.anio}</strong>
                </Box>
                <Box>
                  <strong>Fecha:</strong> {informe.fecha}
                </Box>
                <Box>
                  <strong>Lugar:</strong> {informe.lugar}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InformeActividades;
