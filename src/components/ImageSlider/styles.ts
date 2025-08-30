import styled, { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SliderContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 60vh;
    overflow: hidden;
`;

export const Slide = styled.div<{ $active: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 1s ease-in-out;

    ${({ $active }) =>
        $active &&
        css`
            animation: ${fadeIn} 1s ease-in-out;
        `}
`;
