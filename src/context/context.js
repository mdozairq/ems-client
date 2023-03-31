import React, { createContext, useReducer } from "react";
import { initialState, employeeStoreReducer } from "./reducer";

export const EmployeeStoreContext = createContext({});

export const EmployeeStoreProvider = ({ children }) => {
    const [state, EmployeeStoreContextDispatch] = useReducer(employeeStoreReducer, initialState);

    return (
        <EmployeeStoreContext.Provider value={{ state, EmployeeStoreContextDispatch }}>
            {children}
        </EmployeeStoreContext.Provider>
    )
};
