import { css } from "styled-components";

export const glassBackDrop = css<{narrow?: boolean}>`
    position: relative;
    &:before {
        --glass-padding: ${(props) => props.narrow ? "1.5rem" : "1rem"};
        --glass-position: calc(-1 * (var(--glass-padding) / 2));

        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: calc(100% + var(--glass-padding));
        height: calc(100% + var(--glass-padding));

        left: var(--glass-position);
        top: var(--glass-position);

        background: var(--gradient-glass);
        backdrop-filter: blur(10px);
        border-radius: inherit;
    }
`;