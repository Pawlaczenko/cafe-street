import { FC } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../../styles/variables";

const Navigation : FC = () => {
    const NavigationItems : {id: string, text: string}[] = [
        {
            id: "#about",
            text: "About us"
        },
        {
            id: "#products",
            text: "Our Products"
        },
        {
            id: "#delivery",
            text: "Delivery"
        },
    ];
    return (
        <StyledNavigation>
            {
                NavigationItems.map(item => (
                    <StyledNavigationItem href={item.id} >{item.text}</StyledNavigationItem>
                ))
            }              
        </StyledNavigation>
    );
}

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (${BREAKPOINTS.burger}){
        flex-direction: column;
        gap: 5rem;

        font-size: var(--fs-title);
    }
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