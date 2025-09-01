import styled from 'styled-components';
export const ContainerPage = styled.div`
    height: 100%;
    padding: 2rem 5rem;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
`;
export const ContainerDescription = styled.div`
    background-color: #f6b9c5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-inline: 2rem;
    border-radius: 0.375rem;
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
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const BookDescription = styled.p`
    color: #362a2e;
    margin-bottom: 1rem;
    line-height: 1.5;
`;

export const BookPrice = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-inline: 2rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    border: none;

    background-color: ${({ variant }) =>
        variant === 'primary' ? '#16a34a' : '#d1d5db'};
    color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#000')};

    &:hover {
        background-color: ${({ variant }) =>
            variant === 'primary' ? '#15803d' : '#9ca3af'};
    }
`;

export const ImageContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
`;
