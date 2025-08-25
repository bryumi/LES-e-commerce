import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 1rem;
    width: 100%;
    h4 {
        font-family: DM Sans;
        font-weight: 500;
        font-size: 1.5rem;
        text-align: left;
        color: ${({ theme }) => theme.colors.primary100};
        margin-bottom: 1rem;
    }
`;
export const ContentWarnings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 2rem;

    width: 100%;
    h5 {
        font-family: DM Sans;
        font-weight: 400;
        font-size: 1.255rem;
        text-align: left;
        color: ${({ theme }) => theme.colors.primary100};
        margin-bottom: 1rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 1.25rem;

    width: 100%;
`;
