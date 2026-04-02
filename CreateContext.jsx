import { createContext, useState } from "react";

const Context = createContext();

 function Theme({children}){
    const [theme,setTheme]=useState("dark");

    return(
        <Context.Provider value={{theme,setTheme}}>
            {children}
        </Context.Provider>
    )
}

export {Context,Theme}