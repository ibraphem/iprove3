import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.colors.themebg};
    color:  ${({ theme }) => theme.colors.textColor};
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

`;

export default GlobalStyles;
