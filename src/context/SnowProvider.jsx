import { useState } from "react";
import { SnowContext } from "./SnowContext";


const SnowProvider = ({ children }) => {
    const [activeSnow, setActiveSnow] = useState(true);
    return (
        <>
            <SnowContext.Provider value={{activeSnow, setActiveSnow}}>
                {children}
            </SnowContext.Provider>
        </>
    );
}

export default SnowProvider;