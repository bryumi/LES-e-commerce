import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 2rem;
    background-color: transparent;
    h4 {
        font-family: DM Sans;
        font-weight: 500;
        font-size: 1.5rem;
        text-align: left;
        color: ${({ theme }) => theme.colors.primary100};
        margin-bottom: 1rem;
    }
`;
export const ContainerRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 12px;
`;
export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 12px;
    h4 {
        font-family: DM Sans;
        font-weight: 400;
        font-size: 1.25rem;
        text-align: left;
        color: ${({ theme }) => theme.colors.secondary200};
        margin-bottom: 1rem;
    }
`;
export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 12px;
    h4 {
        font-family: DM Sans;
        font-weight: 400;
        font-size: 1.25rem;
        text-align: left;
        color: ${({ theme }) => theme.colors.secondary200};
        margin-bottom: 1rem;
    }
`;
export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 2rem;
`;
