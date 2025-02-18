import { createContext } from "react";
import { items_list } from "../assets/assets";


export const StoreContext = createContext(null)

 const StoreContextProvider = (props) => {



    const ContextValue = {
        items_list
    }
    
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;