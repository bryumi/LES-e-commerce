import styled from 'styled-components';
import { theme as appTheme } from '@/styles/theme';

type ThemeColorKey = keyof typeof appTheme.colors;

export interface ButtonProps {
    bgColor?: ThemeColorKey;
    padding?: string;
    $borderRadius?: string;
    textColor?: ThemeColorKey;
    border?: string;
    fontWeight?: string;
    fontSize?: string;
    $boxShadow?: string;
    width?: string;
    height?: string;
}

export const Button = styled.button.withConfig({
    shouldForwardProp: prop => prop !== 'bgColor' && prop !== 'textColor',
})<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};
    padding: ${({ width, padding }) =>
        width ? '0.625rem' : padding || '0.625rem 5rem'};
    font-family: Poppins;
    background-color: ${({ theme, bgColor }) =>
        bgColor ? theme.colors[bgColor] : theme.colors.primary100};
    color: ${({ theme, textColor }) =>
        textColor ? theme.colors[textColor] : theme.colors.white};
    border: ${({ border }) => border || 'none'};
    border-radius: ${({ $borderRadius }) => $borderRadius || '8px'};

    font-size: ${({ fontSize }) => fontSize || '1.125rem'};
    font-weight: ${({ fontWeight }) => fontWeight || '600'};
    line-height: 1.5rem;

    box-shadow: ${({ $boxShadow }) => $boxShadow || 'none'};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    white-space: nowrap;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: 0.2s;
    &:hover {
        opacity: ${({ disabled }) => (disabled ? 0.5 : 0.9)};
    }
    @media (max-width: 440px) {
        white-space: normal;
    }
`;
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
`;
