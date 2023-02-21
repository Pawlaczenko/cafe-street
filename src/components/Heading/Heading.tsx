import { FC } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/variables';

export enum HeadingLevel {
    Heading = "h1",
    SubHeading = "h2",
    Title = "h3",
    SubTitle = "h4"
}

interface IHeadingProps {
    level: HeadingLevel,
    variant?: "black" | "white" | "brown";
    children: React.ReactNode
}

const Heading : FC<IHeadingProps> = ({level, variant, children}) => {
  return (
    <StyledHeading 
      as={level}
      variant={variant}
    >
        {children}
    </StyledHeading>
  )
}

export const StyledHeading = styled.h1<{variant?: "black" | "white" | "brown";}>`
  font-size: var(--fs-heading);
  font-weight: 600;
  
  color: ${({variant}) => {
    switch(variant){
      case "brown":
        return `var(--color-secondary)`;
      case "white":
        return 'white';
      case "black":
      default:
        return "black";
    }
  }};

  &:is(h2){
    font-size: var(--fs-subheading);
  }
  &:is(h3){
    font-size: var(--fs-title);
  }
  &:is(h4){
    font-size: var(--fs-paragraph);
  }

  & > mark {
    color: var(--color-primary);
    background-color: transparent;
  }

  & > u {
    text-decoration-color: var(--color-primary);
    text-underline-offset: .5rem;
    text-decoration-thickness: .4rem;
  }

  @media only screen and (${BREAKPOINTS.medium}) {
    text-align: center;
    margin: auto;
    width: 95%;
  }
`;

export default Heading