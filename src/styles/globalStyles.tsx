import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { variables } from "./variables";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${variables}

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--color-background);
    }
`;

export default GlobalStyles;