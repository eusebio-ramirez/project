import { rubros } from "../../json/rubros";
import { useParams } from "react-router";
import { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import TitlePage from "../../components/Titles/Title-page";
import useCustomNavigate from "../../hooks/useCustomNavigate";
import { useTheme } from "@emotion/react";

/*
  {
      "id": 2,
      "icono": "Estructura.png",
      "nombre": "2.Estructura",
      "formatos": [
          {
              "nombre": "Estructura Orgánica",
              "xlsx": "f02_a",
              "html": "f02_a"
          },
          {
              "nombre": "Organigrama",
              "xlsx": "f02_b",
              "html": "f02_b"
          }
      ]
    },
  */

const DetalleRubro = () => {
  const theme = useTheme();

  const { goBack } = useCustomNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { nombre } = useParams();
  const rubro = rubros.find((rubro) => rubro.nombre === nombre);

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: "1rem" }}
          onClick={goBack}
        >
          Volver
        </Button>
      </Box>
      <TitlePage title={rubro.nombre} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          {rubro.formatos.map((formato) => (
            <Grid item xs={12} md={4} key={formato.nombre}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  bgcolor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  borderRadius: 2,
                  padding: 1,
                  height: 100,
                  "&:hover": {
                    boxShadow: theme.shadows[5],
                  },
                  alignContent: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {formato.nombre}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Chip
                    label="Ver"
                    color="primary"
                    variant="outlined"
                    sx={{ margin: 1 }}
                    onClick={() => {
                      window.open(
                        `https://docs.google.com/spreadsheets/d/${formato.xlsx}/edit`,
                        "_blank"
                      );
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DetalleRubro;
