import { useMemo } from "react";

const Mensaje = (props) => {
  const { text } = props;

  const getMensaje = () => {
    console.log("gET MENSAJE");
    return text;
  };

  // const mensaje = getMensaje();

  const mensaje = useMemo(() => {
    console.log("useMemo");
    return getMensaje();
  }, [text]);

  return (
    <div>
      <p>{mensaje}</p>
    </div>
  );
};

export default Mensaje;
