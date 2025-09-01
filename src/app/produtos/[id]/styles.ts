import styled from 'styled-components';
export const ContainerPage = styled.div`
    height: 100%;
    padding: 2rem 5rem;
    margin-top: 10rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    border-radius: 8px;
    padding-block: 2rem;
`;
export const ContainerDescription = styled.div`
    background-color: #f6b9c5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding-inline: 2rem;
    border-radius: 8px;
    padding-block: 2rem;
`;
export const Container = styled.div`
    background-color: #fbdce2;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
`;
export const BookTitle = styled.h1`
    color: #362a2e;
    font-size: 20px;
    font-weight: bold;
    font-family: var(--font-poppins);
    margin-bottom: 1rem;
`;

export const BookDescription = styled.p`
    color: #362a2e;
    font-family: var(--font-poppins);
    font-size: 16px;
    margin-bottom: 1rem;
    line-height: 1.5;
`;

export const BookPrice = styled.p`
    font-size: 20px;
    font-weight: 600;
    font-family: var(--font-poppins);
    margin-bottom: 2rem;
    margin-top: 1rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-inline: 2rem;
    padding-bottom: 20px;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-block: 2rem;
`;
