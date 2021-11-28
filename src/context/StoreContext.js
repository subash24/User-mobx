import React from "react";
import stores from "../stores/roostStore";
import { useLocalObservable } from "mobx-react-lite";


export const StoreContext = React.createContext(null);

//To provide the stores to all child components
export const StoreProvider = ({children}) => {
    const userStore = useLocalObservable(stores.userStore);
    const profileStore = useLocalObservable(stores.profileStore);
    return (
        <StoreContext.Provider value={[userStore,profileStore]}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = ()=>React.useContext(StoreContext);



