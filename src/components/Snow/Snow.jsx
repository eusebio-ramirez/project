import { useContext } from "react";
import { Snowfall } from "react-snowfall";
import { SnowContext } from "../../context/SnowContext";

const Snow = () => {
    const { activeSnow } = useContext(SnowContext);
    return (
        <>
            {activeSnow ? <Snowfall style={{zIndex: '1001'}} /> : null }
        </>
    );
}

export default Snow;