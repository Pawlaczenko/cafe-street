import React, { useEffect, useState } from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/variables';

interface IProps {
    currentPage: number,
    pageCount: number,
    handleClick: Function
}

const CarouselController : FC<IProps> = ({currentPage, pageCount, handleClick}) => {
  return (
    <StyledCarouselController>
        {
            [...Array(pageCount)].map((e,i) => <ControllerButton isActive={currentPage === i+1} onClick={() => handleClick(i+1)} key={i+1}/>)
        }
    </StyledCarouselController>
  )
}

const StyledCarouselController = styled.div`
    --button-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--button-size);
    margin-top: var(--button-size);

    @media only screen and (${BREAKPOINTS.burger}){
        --button-size: 2.4rem;
        margin-top: calc(2 * var(--button-size));
    }
`;

const ControllerButton = styled.div<{isActive?:boolean}>`
    --color: ${(props) => props.isActive ? "var(--color-primary)" : "#F8E9D2"};
    min-width: var(--button-size);
    min-height: var(--button-size);
    display: block;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--color);

    border: 1px solid var(--color-primary);
`

export default CarouselController