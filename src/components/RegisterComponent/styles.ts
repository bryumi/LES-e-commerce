import styled from 'styled-components';

export const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5.5rem;
    background-color: transparent;
    margin-top: 8rem;
    h4 {
        font-family: DM Sans;
        font-weight: 500;
        font-size: 1.5rem;
        text-align: left;
        color: ${({ theme }) => theme.colors.primary100};
        margin-bottom: 1rem;
    }
`;
export const RowImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.625rem;

    label {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.neutral200};
    }
    span {
        font-family: Poppins;
        font-weight: 400;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.neutral300};
    }
`;
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;

    img {
        width: 7.25rem;
        height: 7.25rem;
        border-radius: 50%;
        object-fit: cover;
    }
`;
export const ImageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary100};
    border-radius: 50%;
    height: 1.75rem;
    border: none;
    width: 1.75rem;
    cursor: pointer;
    position: absolute;
    bottom: 0.25rem;
    right: 0.5rem;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;
    gap: 2rem;
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
    font-family: DM Sans;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary100};
    margin-bottom: 1rem;
`;
