import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.bodyColor};
  }

  p, h1, h2, h3, h4, h5, h6, a {
    color: ${({ theme }) => theme.textColor};
  }

`;
