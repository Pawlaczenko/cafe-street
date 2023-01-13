import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { variables } from "./variables";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${variables}

    body {
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;