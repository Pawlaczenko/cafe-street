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
        --color-star: #FFD057;

        // GRADIENTS
        --gradient-glass: linear-gradient(140deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.7) 100%);
        --shadow-light: .6rem .2rem 1rem 0 rgba(0,0,0,.13);
        --shadow-heavy: 1rem 1rem 3.2rem 0 rgba(0,0,0,.25);

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

        //ANIMATIONS
        --am-primary: all .2s ease-in-out;

    }
`;

export const BREAKPOINTS = {
    huge: "max-width:1110px",
    burger: "max-width:1010px",
    large: "max-width:910px",
    medium: "max-width:650px",
}