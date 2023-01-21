import { FC } from "react";
import styled from "styled-components";

const Navigation : FC = () => {
    return (
        <StyledNavigation>        
                <StyledNavigationItem href="#about">
                    About us
                </StyledNavigationItem>                    
                <StyledNavigationItem href="#products">
                    Our Product
                </StyledNavigationItem>                    
                <StyledNavigationItem href="#delivery">
                    Delivery
                </StyledNavigationItem>            
        </StyledNavigation>
    );
}

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledNavigationItem = styled.a`
    margin: 0 1.5rem;
    position: relative;

    &:hover,
    &:focus,
    &:active {
        color: var(--color-primary);

        &:before {
            width: 100%;
        }
    }

    &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: -.3rem;
        left: 0;
        
        width: 0%;
        height: .3rem;
        background-color: var(--color-primary);
        border-radius: .5rem;
        transition: width .2s ease-in-out;
    }
`;

export default Navigation;