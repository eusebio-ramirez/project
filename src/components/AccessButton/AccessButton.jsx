import { Button } from "react-bootstrap";
import './accessButton.css';
import { useContext, useState } from "react";
import { SnowContext } from "../../context/SnowContext";
import { toggleGrayscale } from "../../features/Theme/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";
//HF
import { HeaderFooterContext } from "../../context/HeaderFooterContext";

const AccessButton = () => {
    const grayscale = useSelector((state) => state.theme.grayscale)
    const dispatch = useDispatch();
    const [options, setOptions] = useState(false);
    const { alternativeColor, setAlternativeColor } = useContext(HeaderFooterContext);

    const { activeSnow, setActiveSnow } = useContext(SnowContext);
    const openOptions = () => {
        setOptions(!options);
    };

    // HF
    const handleChangeHeaderFooter = () => {
        setAlternativeColor(!alternativeColor);
    };
    
    const handleChangeSnow = () => {
        setActiveSnow(!activeSnow);
    };

    const handleChangeTheme = () => {
        dispatch(toggleGrayscale());
    };

    return (
        <>
            <div className={`contentAccess ${grayscale ? 'grayscale' : ''}`}>
                {options ? (
                    <div className="options">

                        {/* HF */}
                        <Button onClick={handleChangeHeaderFooter} className="accessButton btn btn-info text-white">
                            <i className="bi bi-palette"></i>
                        </Button>
                        <Button onClick={handleChangeSnow} className="accessButton btn btn-info text-white">
                            <i className="bi bi-snow2"></i>
                        </Button>
                        <Button onClick={handleChangeTheme} className="accessButton btn btn-info text-white">
                            <i className="bi bi-brilliance"></i>
                        </Button>
                    </div>
                ) : null}
                <Button onClick={openOptions} className="accessButton">
                    <i className="bi bi-universal-access-circle"></i>
                </Button>
            </div>
        </>
    );
};

export default AccessButton;
