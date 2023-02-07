import { FC } from "react";
import styled from "styled-components";
import Logo, { StyledLogoWrapper } from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import CartButton from "./CartButton";
import Navigation from "./Navigation/Navigation";
import {StyledSection} from '../../layout/Section/Section';

const Header : FC = () => {
    return(
        <Wrapper as={"header"}>
            <HeaderWrapper>
                <Logo />
                <Navigation />
                <SearchBar />
                <CartButton />
            </HeaderWrapper>
        </Wrapper>
    )
}

const Wrapper = styled(StyledSection)`
    position: fixed;
    width: 100%;
    z-index: 50;
`;

const HeaderWrapper = styled.div`
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