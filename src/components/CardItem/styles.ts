import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 16rem;
    height: 27.5rem;

    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px rgba(119, 11, 131, 0.1);

    overflow: hidden;
    position: relative;
    padding-bottom: 20px;
    cursor: pointer;
`;

export const ImageCarousel = styled.div`
    width: 100%;
    height: 50%;
    overflow: hidden;
`;

export const CarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    padding: 12px 20px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-bottom: 2px;
`;

export const CarTitle = styled.h3`
    font-size: 1rem;
    color: #362a2e;
    font-family: var(--font-poppins);
    font-weight: 600;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0;
    cursor: pointer;
`;

export const CarDetails = styled.p`
    text-transform: uppercase;
    font-family: var(--font-poppins);
    font-size: 0.875rem;
    color: #362a2e;
    font-weight: 400;
`;

export const CarPrice = styled.p`
    font-size: 18px;
    color: #362a2e;
    font-weight: 600;
    font-family: var(--font-poppins);
`;
