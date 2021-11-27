import { useLocalObservable } from "mobx-react";

import React from "react";

import { createUserStore } from "./store";

const UserContext = React.createContext(null);

export const UserProvider = ({children}) => {
    const userStore = useLocalObservable(createUserStore);

    return (
        <UserContext.Provider value={userStore}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=> React.useContext(UserContext);