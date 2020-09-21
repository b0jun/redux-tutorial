import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background: #ffe2e2;
    padding-top: 5rem;
  }
`;

export default GlobalStyles;
