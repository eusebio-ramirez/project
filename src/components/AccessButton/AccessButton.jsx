import { Button } from "react-bootstrap";
import './accessButton.css';
import { useContext, useState } from "react";
import { SnowContext } from "../../context/SnowContext";
import { toggleGrayscale } from "../../context/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";

const AccessButton = () => {
    const grayscale = useSelector((state) => state.theme.grayscale)
    const dispatch = useDispatch();
    const [options, setOptions] = useState(false);
    const {activeSnow, setActiveSnow} = useContext(SnowContext);
    const openOptions = () => {
        setOptions(!options)
    }
    const handleChangeSnow = () => {
        setActiveSnow(!activeSnow);
    }
    const handleChangeTheme = () => {
        dispatch(toggleGrayscale());
    }
    return (
        <>
            <div className={`contentAccess ${ grayscale ? 'grayscale' : '' }`}>
                {options ? <div className="options">
                    <Button onClick={handleChangeSnow} className="accessButton btn btn-info text-white">
                        <i class="bi bi-snow2"></i>
                    </Button>
                    <Button onClick={handleChangeTheme} className="accessButton btn btn-info text-white">
                        <i class="bi bi-brilliance"></i>
                    </Button>
                </div> : null}
                <Button onClick={openOptions} className="accessButton">
                    <i class="bi bi-universal-access-circle"></i>
                </Button>
            </div>
        </>
    );
}

export default AccessButton;