import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: start;
    min-height: 100vh;
    margin-top: 5.675rem;
`;
export const returnButton = styled.button`
    background: #ff7597;
    border: #ff7597;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    &:hover {
        background: darken(#ff7597, 10%);
    }
`;
export const checkoutButton = styled.button`
    background: '#3A9DA9';
    border: '#3A9DA9';
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    padding: 12px 24px;
    border-radius: 8px;
    transition: background 0.3s;

    &:hover {
        background: darken(#3a9da9, 10%);
    }
`;
export const total = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 18px;
`;
export const ContainerRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;
`;
