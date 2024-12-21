import './btnBack.css';

import useCustomNavigate from "../../hook/useCustomNavigate";

const BtnBack = () => {
    const { goBack } = useCustomNavigate();
    return(
        <div className="col-12 div-btn-back">
          <button onClick={() => goBack()} className="btn-back">
            Regresar
          </button>
        </div>
    )
};

export default BtnBack;