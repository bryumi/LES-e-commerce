import styled from 'styled-components';

export const RegisterContainer = styled.div`
    height: 100%;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 3rem;
`;
export const ImageButton = styled.button`
    display: flex;
    align-self: start;
    font-family: var(--font-poppins);
    color: #ffffff;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary100};
    border-radius: 8px;
    height: auto;
    border: none;
    width: auto;
    cursor: pointer;
    bottom: 0rem;
    left: 2rem;
    padding: 1rem;
`;
