import { FC } from "react";
import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";

const SearchBar : FC = () => {
    return(
        <StyledTextInputWrapper>
            <StyledSearchButton>
                <FiSearch />
            </StyledSearchButton>
            <StyledInput type="text" placeholder="Search" />
        </StyledTextInputWrapper>   
    )
}

export const StyledTextInputWrapper = styled.label`
    display: block;
    position: relative;

    background-color: white;
    border-radius: 3.5rem;
    box-shadow: var(--shadow-light);
`;

export const StyledInput = styled.input`
    font-size: var(--fs-description);
    color: var(--color-grey-light);
    background-color: transparent;
    border: none;
    border-radius: inherit;
    min-width: 28rem;

    width: 100%;
    height: 100%;
    padding: 1.4rem 1.2rem 1.4rem 5rem;
`;

const StyledSearchButton = styled.button`
    position: absolute;
    top: 50%;
    left: .7rem;

    transform: translateY(-50%);

    background-color: transparent;
    border: none;

    & > svg {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

export default SearchBar;