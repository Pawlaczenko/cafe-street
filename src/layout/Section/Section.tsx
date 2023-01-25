import styled from 'styled-components';

interface ISectionProps {
    fullBleed?: boolean
}

export const StyledSection = styled.section<ISectionProps>`
    display: grid;
    grid-template-columns: 1fr min(var(--website-width),95%) 1fr;

    & > * {
      grid-column: ${(props) => props.fullBleed ? "1/-1" : 2 };
    }
`;

export default StyledSection