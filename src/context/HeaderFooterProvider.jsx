import { useState } from "react";
import { HeaderFooterContext } from "./HeaderFooterContext";

export const HeaderFooterProvider = ({ children }) => {
    const [alternativeColor, setAlternativeColor] = useState(false);

    return (
        <HeaderFooterContext.Provider value={{ alternativeColor, setAlternativeColor }}>
            {children}
        </HeaderFooterContext.Provider>
    );
};

export default HeaderFooterProvider;

