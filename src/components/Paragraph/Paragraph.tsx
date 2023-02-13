import React, { FC } from 'react'
import styled from 'styled-components';

const Paragraph : FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <StyledParagraph>
        {children}
    </StyledParagraph>
  )
}

export const StyledParagraph = styled.p`
    color: var(--color-grey-light);
    font-size: var(--fs-paragraph);
`;

export default Paragraph