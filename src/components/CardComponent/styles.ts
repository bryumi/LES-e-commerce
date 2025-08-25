import styled from 'styled-components';

export const ContainerWarning = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.675rem;

    width: 100%;

    background-color: ${({ theme }) => theme.colors.whiteText};
    padding: 1.25rem;

    border-radius: 0.5rem;
    font-family: Poppins;
`;
export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.675rem;

    width: 100%;

    background-color: ${({ theme }) => theme.colors.whiteText};
    padding: 1.25rem;

    border-radius: 0.5rem;
    font-family: Poppins;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary100};
`;
export const FieldWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`;
export const FieldLabel = styled.label`
    color: ${({ theme }) => theme.colors.primary100};
    font-size: 1rem;
    font-weight: 700;
`;

export const FieldValue = styled.p`
    color: ${({ theme }) => theme.colors.neutral200};
    font-size: 1rem;
    font-weight: 400;
`;
export const MainRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
`;
export const ContentText = styled.div`
    border: 1px solid #fbdce2;
    border-radius: 0.5rem;
    padding: 0.675rem;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 0.675rem;
`;
