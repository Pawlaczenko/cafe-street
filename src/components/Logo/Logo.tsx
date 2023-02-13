import { FC } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/logo-cafe.svg";

const Logo : FC = () => {
    return(
        <StyledLogoWrapper href="#">
            <img src={LogoImg} alt="Cafe Street" />
        </StyledLogoWrapper>
    );
}

export const StyledLogoWrapper = styled.a`
    display: block;
`;

export default Logo;