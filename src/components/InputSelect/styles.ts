import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const SelectWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    /* gap: 0.5rem; */
`;
export const Container = styled.div<{
    $isOpen?: boolean;
}>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: transparent;
    width: 100%;
    height: auto;
    transition: 0.3s;
`;
export const LabelText = styled.label`
    font-family: Poppins;
    color: ${({ theme }) => theme.colors.label};
    font-size: 1rem;
    line-height: 1.5625rem;
    font-weight: 500;
`;
export const ErrorMessage = styled.span`
    position: absolute;
    bottom: -0.875rem;
    left: 0.25rem;
    color: ${({ theme }) => theme.colors.error100};
    font-family: inherit;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 3;
`;
export const ContainerMenuList = styled.div`
    padding-right: 10px;
    overflow-y: auto;
    width: 98%;
    max-height: 13.875rem;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.primary100};
        border-radius: 3px;
    }
    &::-webkit-scrollbar-button {
        display: none;
        height: 0;
        width: 0;
    }
`;
