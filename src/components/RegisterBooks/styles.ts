import styled from 'styled-components';

export const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    background-color: transparent;
    h4 {
        font-family: DM Sans;
        font-weight: 500;
        font-size: 1.5rem;
        text-align: left;
        color: ${({ theme }) => theme.colors.primary100};
    }
`;
export const RowImage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    gap: 0.625rem;
    label {
        font-family: var(--font-poppins);
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.label};
        text-align: left;
        list-style: inside;
    }
    span {
        font-family: Poppins;
        font-weight: 400;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.neutral300};
    }
`;

export const InputDataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1.75rem;
`;
export const RowContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: start;
    gap: 10rem;
`;
export const SwicthContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;

    label {
        font-family: var(--font-poppins);
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.label};
        text-align: left;
        list-style: inside;
    }
`;

export const TitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-family: var(--font-poppins);
    font-weight: 500;
    font-size: 1.5rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary100};
    margin-bottom: 1rem;
`;
