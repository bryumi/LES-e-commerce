import styled from 'styled-components';
import { theme as appTheme, theme } from '@/styles/theme';
type ThemeColorKey = keyof typeof appTheme.colors;

export const ModalContent = styled.div<{ $width?: string }>`
    width: ${({ $width }) => ($width ? $width : '29.375rem')};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
    padding: 1.5rem;
    /* min-height: 18.75rem; */
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-family: Poppins;
`;
export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h2 {
        color: #282828;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: center;
    }
`;
export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #5f6980;

    text-align: center;
`;

export const ButtonsContainer = styled.div<{ $oneButton?: boolean }>`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: ${({ $oneButton }) => ($oneButton ? 'center' : 'end')};
    div {
        width: ${({ $oneButton }) =>
            $oneButton ? '100%' : 'calc(50% - 1rem)'};
    }
`;
