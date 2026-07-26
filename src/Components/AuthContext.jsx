/*1-Crear Contexto*/
import { createContext } from "react";
export const AuthContext = createContext(null);
import React from "react";
import { useState } from "react";


export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    return (
        <AuthContext.Provider value={{ usuario, setUsuario}}>
            {children}
        </AuthContext.Provider>

    );
}



