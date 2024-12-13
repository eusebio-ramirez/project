import {
  Box,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/productsContext";

const InformeActividades = () => {
  const { products } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const DEBOUNCE_TIMEOUT = 300;
  console.log("products", products);

  useEffect(() => {
    setFilteredProducts(products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch();
    }, DEBOUNCE_TIMEOUT);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
      if (e.target.value.length === 0 || e.target.value === "") {
        setFilteredProducts([products]);
        return;
      }

      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredProducts(filtered);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );

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
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Buscar"
            variant="outlined"
            fullWidth
            value={search}
            onChange={handleSearch}
          />
        </Grid>
        {filteredProducts?.map((product) => (
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
