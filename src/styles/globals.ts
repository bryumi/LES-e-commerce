import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 16px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.neutral500};
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
      border: 4px solid #3A9DA9;
      background: ${({ theme }) => theme.colors.primary400};
      border-radius: 4px;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  html {
    @media (max-width: 1440px) {
      font-size: 93.75%;
    }
  }
  input, button, textarea {
    font-family: inherit;
  }
  body {
    text-rendering: optimizeLegibility;
    background: ${({ theme }) => theme.colors.background};
  }
  button {
    cursor: pointer;
  }
    html, body {
    height: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }

  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Edge */
  }
`;
