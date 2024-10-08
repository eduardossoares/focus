import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: ReactNode
}

// Rota Privada

export function Private({ children }: PrivateProps) {
    const { signed, loadingAuth } = useContext(AuthContext);

    if (loadingAuth) {
        return <p>Carregado...</p>
    }

    if (!signed) {
        return <Navigate to="/acessar" />
    }

    return children;
}