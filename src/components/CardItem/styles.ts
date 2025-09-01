import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 13.75rem;
    height: 24rem;

    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px rgba(119, 11, 131, 0.1);

    overflow: hidden;
    position: relative;
`;

export const ChampionTag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: ${({ theme }) => theme.colors.primary200};
    width: 100%;
    height: 1.5rem;
`;
export const Tag = styled.div`
    display: flex;
    position: relative;
    div {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary200};
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0.5rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
        text-transform: uppercase;
        position: absolute;
        top: 0.25rem;
    }
`;

export const ImageCarousel = styled.div`
    width: 100%;
    height: 50%;
    overflow: hidden;
    &:hover {
        .swiper-button-next,
        .swiper-button-prev {
            opacity: 0.8;
        }
    }

    .swiper-pagination {
        background-color: transparent;
    }
    .swiper-pagination-bullet {
        background-color: ${({ theme }) => theme.colors.white} !important;
        opacity: 1 !important;
    }
    .swiper-pagination .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.error} !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.colors.white};
        opacity: 0;
        &:hover {
            opacity: 1;
        }
    }
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
`;

export const CarTitle = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.error};
    font-weight: 600;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0;
`;

export const CarDetails = styled.p`
    text-transform: uppercase;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.neutral200};
    font-weight: 400;
`;

export const CarPrice = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.neutral200};
    font-weight: 600;
`;

export const CarYearKm = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.neutral200};
    font-weight: 400;
`;

export const CarLocation = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.neutral200};
    font-weight: 400;
    gap: 4px;
`;
