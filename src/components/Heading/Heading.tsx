import { FC } from 'react';
import styled from 'styled-components';

export enum HeadingLevel {
    Heading = "h1",
    SubHeading = "h2",
    Title = "h3"
}

interface IHeadingProps {
    level?: HeadingLevel,
    variant?: "black" | "white" | "brown";
    children: React.ReactNode
}

const Heading : FC<IHeadingProps> = ({level, variant, children}) => {
  return (
    <StyledHeading as={level} variant={variant}>
        {children}
    </StyledHeading>
  )
}

const StyledHeading = styled.h1<IHeadingProps>`
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

  & > mark {
    color: var(--color-primary);
    background-color: transparent;
  }

  & > u {
    text-decoration-color: var(--color-primary);
    text-underline-offset: .5rem;
  }
`;

export default Heading