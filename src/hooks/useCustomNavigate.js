import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goTo = (path, options = {}) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return { goTo, goBack, goForward };
};

export default useCustomNavigate;
