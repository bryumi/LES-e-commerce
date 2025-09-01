'use client';

import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'react-toastify/dist/ReactToastify.css';
import handleError from '@/utils/handleToast';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/globals';
import { theme } from '@/styles/theme';
import AuthProvider from '@/hooks/useAuth';
import { CartProvider } from '../context/useCart';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
        mutations: {
            onError: handleError,
        },
    },
});

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <ToastContainer
                        style={{
                            zIndex: 999999,
                        }}
                    />
                    <AuthProvider>
                        <CartProvider>
                            <GlobalStyle />
                            {children}
                        </CartProvider>
                    </AuthProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default Providers;
