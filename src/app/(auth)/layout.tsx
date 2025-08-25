'use client';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import { ReactNode } from 'react';
import styled from 'styled-components';

type AuthLayoutProps = {
    children: ReactNode;
};
export const Container = styled.div`
    height: 100%;
    padding: 2rem 5rem;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
`;
const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <>
            <HeaderAuth />
            <Container>{children}</Container>
        </>
    );
};

export default AuthLayout;
