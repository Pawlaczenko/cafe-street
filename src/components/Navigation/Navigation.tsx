import { FC } from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import NavigationList from "./NavigationList/NavigationList";

const Navigation : FC = () => {
    
    return(
        <NavigationWrapper>
            <Logo />
            <NavigationList />
            <SearchBar />
        </NavigationWrapper>
    )
}

const NavigationWrapper = styled.nav`
    --navigation-padding: 3.6rem;

    padding: var(--navigation-padding) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default Navigation;