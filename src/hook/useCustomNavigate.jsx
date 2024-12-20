import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    };

    const goBack = () => {
        navigate(-1);
    };

    const goToExternal = (url) => {
        window.open(url, "_blank"); // Carga la página externa
    };

    return { goTo, goBack, goToExternal };
};

export default useCustomNavigate;