import { Box, Button } from "@mui/material";
import { useCallback, useState } from "react";
import Mensaje from "../../components/Message/Message";

const Agenda2 = () => {
  const [couter, setCounter] = useState(0);
  const [calculate] = useState(0);

  const calculateChanged = () => {
    setCounter(couter + 1);
  };

  const memorizedCalcualte = useCallback(() => {
    calculateChanged();
  }, [calculate]);

  return (
    <Box>
      <Mensaje text="Hola Mundo" />
      <Button variant="contained" color="primary" onClick={memorizedCalcualte}>
        Contador: {couter}
      </Button>
    </Box>
  );
};

export default Agenda2;
