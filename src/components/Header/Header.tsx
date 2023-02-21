import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Logo, { StyledLogoWrapper } from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import CartButton from "./CartButton";
import Navigation from "./Navigation/Navigation";
import {StyledSection} from '../../layout/Section/Section';
import Burger from "./Burger";
import { BREAKPOINTS } from "../../styles/variables";

const Header : FC = () => {
    const [sticky, setSticky] = useState<boolean>(false);
    const [isOpen, toggleOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleUrlChange = () => {
            toggleOpen(false);
        }
        window.addEventListener("hashchange", handleUrlChange);
        return () => window.removeEventListener("hashchange", handleUrlChange);
    }, []);

    const handleMenuOpen = () => toggleOpen(!isOpen);

    return(
        <Wrapper 
            as={"header"}
            isSticky={sticky}>
            <HeaderWrapper>
                <Logo />
                <SideMenu isOpen={isOpen}>
                    <Navigation />
                    <SearchBar />
                </SideMenu>
                <CartButton />
                <Burger isOpen={isOpen} handleClick={handleMenuOpen} />
            </HeaderWrapper>
        </Wrapper>
    )
}

const stickyHeaderStyles = css`
    background-color: var(--color-background);
    --navigation-padding: 1.8rem;
`;

const Wrapper = styled(StyledSection)<{isSticky: boolean}>`
    position: fixed;
    width: 100%;
    z-index: 50;
    --navigation-padding: 3.6rem;
    transition: var(--am-primary);

    ${(props) => props.isSticky && stickyHeaderStyles};
`;

const HeaderWrapper = styled.div`
    padding: var(--navigation-padding) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: inherit;
    gap: 4rem;

    & > ${StyledLogoWrapper}{
        margin-right: auto;
    }
`;

const SideMenu = styled.div<{isOpen: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    transition: var(--am-primary);

    @media only screen and (${BREAKPOINTS.burger}) {
        position: fixed;
        z-index: 100;
        right: ${props => props.isOpen ? "0" : "100%"};
        top: 0;

        width: 100%;
        height: 100vh;
        background-color: white;

        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 5rem;
    }
`;

export default Header;