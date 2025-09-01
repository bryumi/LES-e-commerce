import styled from 'styled-components';

export const Container = styled.section`
    width: 87%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1rem;
    p {
        font-family: Poppins;
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
        color: #f4a8b7;
    }
`;
export const SwiperWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    .swiper-slide {
        width: auto !important;
    }
    > .swiper > .swiper-pagination {
        display: none !important;
    }
`;

export const ButtonSwiper = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #770b8380;
    z-index: 4;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f0f0f0;
    }

    &.prev {
        left: -3%;
        top: 50%;
    }

    &.next {
        right: 0;
        top: 50%;
    }
`;
