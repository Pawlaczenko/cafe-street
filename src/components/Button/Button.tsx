import React from 'react'
import styled from 'styled-components';

interface IButton {
    children?: React.ReactNode,
    isTiny?: boolean,
}

const StyledButton = styled.a<IButton>`
    padding: 1rem 3.2rem;
    border-radius: 3.3rem;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border: none;
    
    font-weight: 600;
    font-size: ${(props) => props.isTiny ? "var(--fs-tiny)" : "var(--fs-description)" };
`;

export const PrimaryButton = styled(StyledButton)`
      background-color: var(--color-secondary);
      color: white;
`;

export const TransparentButton = styled(StyledButton)`
      background-color: transparent;
      color: var(--color-primary);
`;