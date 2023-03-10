import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { variables } from "./variables";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${variables}

    html {
        font-size: 62.5%;

        @media only screen and (max-width: 93.75em){
            font-size: 50%;
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: white;
        font-size: var(--fs-paragraph);
    }
`;

export default GlobalStyles;