import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 2rem 5rem;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
`;
export const Total = styled.div`
    width: 50%;
    font-family: DM Sans;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.colors.neutral500};
    font-size: 1.25rem;
`;
export const ContainerRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: start;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 12px;
`;
export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 2rem;
`;
