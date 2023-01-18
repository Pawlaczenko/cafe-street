import { css } from "styled-components";

export const variables = css`
    html {
        // COLORS
        --color-primary: #FF902A;
        --color-secondary: #2F2105;
        --color-accents: #F9D9AA;
        --color-recomendation: #FFCB7C;
        --color-background: #F6EBDA;
        --color-grey-light: #7e7d7a;
        
        // GRADIENTS
        --gradient-glass: linear-gradient(to bottom, #FFF 40%, #FFF 70%);
        --shadow-light: .6rem .2rem 1rem 0 rgba(0,0,0,.13);

        // TYPOGRAPHY
        --fs-heading: 4.8rem;
        --fs-subheading: 3.2rem;
        --fs-title: 2.4rem;
        --fs-paragraph: 1.8rem;
        --fs-small: 1.6rem;
        --fs-description: 1.4rem;
        --fs-tiny: 1.2rem;

        // SPACES
        --website-width: 115.5rem; 
    }
`;