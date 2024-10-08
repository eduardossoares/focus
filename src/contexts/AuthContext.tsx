import { ReactNode, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

// Contexto de Autenticação

type AuthContextData = {
    signed: boolean;
    loadingAuth: boolean;
    handleInfoUser: ({ email, uid }: UserProps) => void;
    user: UserProps | null;
}

interface AuthproviderProps {
    children: ReactNode;
}

interface UserProps {
    uid: string;
    email: string | null;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthproviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user?.email,
                })
                setLoadingAuth(false);
            } else {
                setUser(null);
                setLoadingAuth(false);
            }
        })

        return () => {
            unsub();
        }

    }, []);

    const handleInfoUser = ({ email, uid }: UserProps) => {
        setUser({
            email,
            uid
        })
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            loadingAuth,
            handleInfoUser,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}