import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #ccc;
    background-color: #fbdce2;
    border-radius: 8px;
    padding-inline: 12px;
`;
export const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 3;
`;
export const ProductText = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-poppins);
`;

export const Price = styled.div`
    flex: 1;
    text-align: right;
    font-family: var(--font-poppins);
`;

export const Subtotal = styled.div`
    flex: 1;
    text-align: right;
    font-family: var(--font-poppins);
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: red;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
`;
