import { FC } from "react";
import styled from "styled-components";

const NavigationList : FC = () => {
    return (
        <StyledNavigationList>        
                <StyledNavigationItem href="#about">
                    About us
                </StyledNavigationItem>                    
                <StyledNavigationItem href="#products">
                    Our Product
                </StyledNavigationItem>                    
                <StyledNavigationItem href="#delivery">
                    Delivery
                </StyledNavigationItem>            
        </StyledNavigationList>
    );
}

const StyledNavigationList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledNavigationItem = styled.a`
    margin: 0 1.5rem;

    &:hover,
    &:focus,
    &:active {
        color: var(--color-primary);
    }
`;

export default NavigationList;