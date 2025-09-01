'use client';

import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
    createContext,
    ReactNode,
} from 'react';

import { redirect, usePathname } from 'next/navigation';
import { localStorageKeys } from '@/utils/localStorageKeys';

export interface User {
    id: number;
    email: string;
    username: string;
    role: 'client' | 'admin';
}

export interface ILoginResponse {
    jwt: string;
    refreshToken: string;
    user: User;
}

interface IUserProvider {
    user: User;
    isAuthenticated: boolean;
    logout: () => void;
    login: (data: ILoginResponse) => void;
    setUser: Dispatch<SetStateAction<User>>;
}

interface ChildrenProps {
    children: ReactNode;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const dataUser = localStorage.getItem(localStorageKeys.user);

        if (dataUser) {
            const usr = JSON.parse(dataUser) as User;
            setUser(usr);
        }

        setLoading(false);
    }, []);
    useEffect(() => {
        const handleStorageChange = () => {
            const dataUser = localStorage.getItem(localStorageKeys.user);
            if (!dataUser) {
                logout();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const isAuthenticated = !!user.id;

    const login = (data: ILoginResponse) => {
        localStorage.setItem(localStorageKeys.user, JSON.stringify(data.user));
        // localStorage.setItem(localStorageKeys.accessToken, data.jwt);
        // localStorage.setItem(localStorageKeys.refreshToken, data.refreshToken);

        setUser(data.user);
    };

    const logout = () => {
        localStorage.removeItem(localStorageKeys.user);
        // localStorage.removeItem(localStorageKeys.accessToken);
        // localStorage.removeItem(localStorageKeys.refreshToken);

        setUser({} as User);
    };

    const publicRoutes = [
        '/',
        '/cadastro',
        '/carrinho',
        '/produtos/1',
        '/produtos/2',
        '/produtos/3',
    ];

    if (loading) {
        return null;
    }

    if (!isAuthenticated && !publicRoutes.includes(pathname)) {
        redirect('/');
    }
    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, logout, login, setUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
