import { useState, useCallback } from "react";

const useProgramas = () => {
  const [programas, setProgramas] = useState([]);

  const actualizarProgramas = useCallback((nuevosProgramas) => {
    setProgramas(nuevosProgramas);
  }, []);

  return { programas, actualizarProgramas };
};

export default useProgramas;
