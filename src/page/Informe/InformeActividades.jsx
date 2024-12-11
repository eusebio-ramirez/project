import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";

const InformeActividades = () => {
  const { products } = useContext(ProductsContext);

  console.log("products", products);

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ mt: 4, mb: 4, textAlign: "center" }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        Informe de Actividades
      </Typography>
      <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card
              sx={{
                height: 345,
                maxHeight: 345,
                margin: "auto",
                mb: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Box
                sx={{
                  height: 140,
                  width: "100%",
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                }}
              />
              <Typography variant="h5" component="h2">
                {product.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InformeActividades;
