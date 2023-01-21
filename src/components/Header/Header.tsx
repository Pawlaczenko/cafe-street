import { FC } from "react";
import styled from "styled-components";
import Logo, { StyledLogoWrapper } from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import CartButton from "./CartButton";
import Navigation from "./Navigation/Navigation";

const Header : FC = () => {
    
    return(
        <HeaderWrapper>
            <Logo />
            <Navigation />
            <SearchBar />
            <CartButton />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    --navigation-padding: 3.6rem;

    padding: var(--navigation-padding) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    & > ${StyledLogoWrapper}{
        margin-right: auto;
    }
`;

export default Header;