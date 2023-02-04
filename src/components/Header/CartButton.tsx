import { FC } from 'react';
import {FiShoppingCart} from "react-icons/fi";
import styled from 'styled-components';

interface IProps {
    isPrimary?: boolean,
    isSmall?: boolean
}

const CartButton : FC<IProps> = ({isPrimary, isSmall}) => {
  return (
    <StyledCartButton isPrimary={isPrimary} isSmall={isSmall}>
        <FiShoppingCart />
    </StyledCartButton>
  )
}

export const StyledCartButton = styled.button<IProps>`
    border: none;
    border-radius: 100%;
    background-color: ${(props) => props.isPrimary ? "var(--color-primary)" : "transparent"};
    cursor: pointer;

    --button-size: ${(props) => props.isSmall ? "2.5rem" : "3.2rem"};
    width: var(--button-size);
    height: var(--button-size);
    position: relative;

    & > svg {
        color: ${(props) => props.isPrimary ? "white" : "black"};
        width: var(--buttons-size);
        height: var(--buttons-size);
    }

    &:hover,
    &:active,
    &:focus {
        background-color: var(--color-primary);
    }

    &:before {
        content: "";
        display: ${(props) => props.isPrimary ? "none" : "block"};
        position: absolute;
        right: 0;
        top: .5rem;

        --notification-size: 1rem;
        width: var(--notification-size);
        height: var(--notification-size);

        border-radius: 100%;
        background-color: var(--color-primary);
        border: 1px solid white;
    }
`

export default CartButton