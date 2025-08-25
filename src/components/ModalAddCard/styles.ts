import styled from 'styled-components';

export const ModalContent = styled.form<{
    $width?: string;
    $minHeight?: string;
}>`
    min-height: ${({ $minHeight }) => ($minHeight ? $minHeight : '12rem')};
    width: ${({ $width }) => ($width ? $width : '40rem')};
    background: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    padding: 1.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;
export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h2 {
        font-family: Poppins;
        color: ${({ theme }) => theme.colors.bgModal};
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: center;
    }
`;
export const TextContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`;
export const RowInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
