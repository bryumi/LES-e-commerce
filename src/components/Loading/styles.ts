import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: auto;
    svg {
        margin: auto;
        width: 8rem;
        height: 8rem;
        animation: ${rotate} 2s linear infinite;
        path {
            stroke: ${({ theme }) => theme.colors.neutral500};
        }
    }
    span {
        font-family: Poppins;
        margin: auto;
        color: ${({ theme }) => theme.colors.neutral500};
        font-weight: 700;
    }
`;
