import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useLang = () => useContext(LangContext)

const LangProvider = (props) => {
        const [language,setLanguage] = useState("tr");

        const value = {
            language,
            setLanguage
        }

    return (
        <LangContext.Provider value={value}>{props.children}</LangContext.Provider>
    )
}

export default LangProvider;