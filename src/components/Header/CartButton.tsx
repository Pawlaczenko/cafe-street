import { FC } from 'react';
import {FiShoppingCart} from "react-icons/fi";
import styled from 'styled-components';

const CartButton : FC = () => {
  return (
    <StyledCartButton>
        <FiShoppingCart />
    </StyledCartButton>
  )
}

const StyledCartButton = styled.button`
    border: none;
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;

    --button-size: 3.2rem;
    width: var(--button-size);
    height: var(--button-size);
    position: relative;

    & > svg {
        width: 100%;
        height: 100%;
    }

    &:hover,
    &:active,
    &:focus {
        background-color: white;
    }

    &:before {
        content: "";
        display: block;
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