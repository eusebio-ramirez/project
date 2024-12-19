import { useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, Card, Container, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TitlePage from "../../components/Titles/Title-page";
import MessageBox from "../../components/Message/Message-box";
import {
  getServicios,
  searchServicios,
} from "../../context/redux/slicers/getServiciosSlice";

const Servicios = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { filteredServicios, loading, error } = useSelector(
    (state) => state.getServicios
  );

  useEffect(() => {
    dispatch(getServicios());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(searchServicios(e.target.value));
  };

  if (loading) return <MessageBox message="Cargando Servicios..." />;
  if (error) return <MessageBox message={`Error: ${error}`} />;

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
      <TitlePage title="Servicios" />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Buscar Servicio"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ bgcolor: theme.palette.background.paper }}
            onChange={handleSearch}
          />
        </Grid>

        {filteredServicios?.length > 0 ? (
          filteredServicios.map((informe, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  borderRadius: 2,
                  height: "100%",
                  minHeight: 200,
                  maxWidth: 300,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    padding: 2,
                  }}
                >
                  <a href={informe.url} target="_blank" rel="noreferrer">
                    <strong>{informe.nombre}</strong>
                  </a>
                  <p>{informe.descripcion}</p>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <MessageBox message="No se encontraron servicios." />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Servicios;
