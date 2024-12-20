import { useEffect } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TitlePage from "../../components/Titles/Title-page";
import MessageBox from "../../components/Message/Message-box";
import { searchRubros } from "../../context/redux/slicers/getRubrosSlice";
import { getRubros } from "../../context/redux/slicers/getRubrosSlice";
import useCustomNavigate from "../../hooks/useCustomNavigate";

const Rubros = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { goTo } = useCustomNavigate();

  const { filteredRubros, loading, error } = useSelector(
    (state) => state.getRubros
  );
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

  useEffect(() => {
    dispatch(getRubros());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(searchRubros(e.target.value));
  };

  if (loading) return <MessageBox message="Cargando Rubros..." />;
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
      <TitlePage title="Rubros" />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Buscar Rubro"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ bgcolor: theme.palette.background.paper }}
            onChange={handleSearch}
          />
        </Grid>

        {filteredRubros?.length > 0 ? (
          filteredRubros.map((informe, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  bgcolor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  borderRadius: 2,
                  height: 100,
                  padding: 1,
                  "&:hover": {
                    boxShadow: theme.shadows[5],
                  },
                }}
                onClick={() => goTo(`/rubros/${informe.nombre}`)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30%",
                    borderRadius: 2,
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  <img
                    src={`http://cdn.hidalgo.gob.mx/plantilla_secretarial/Rubros/PNG/${informe.icono}`}
                    alt={informe.nombre}
                    width="50"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyItems: "center",
                    justifyContent: "center",
                    width: "70%",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {informe.nombre}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <MessageBox message="No se encontraron rubros." />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Rubros;
