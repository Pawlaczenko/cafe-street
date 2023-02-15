import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { iPerson } from '../../data/recomendations';
import { BREAKPOINTS } from '../../styles/variables';
import Heading, { HeadingLevel } from '../Heading/Heading';

const CarouselItem : FC<iPerson> = ({name, recomendation, photo_path}) => {
  const image = `images/people/${photo_path}`;
  return (
    <StyledFrame url={image}>
        <StyledFrameInfo>
            <Heading level={HeadingLevel.SubTitle}>{name}</Heading>
            <StyledFrameReview>{recomendation}</StyledFrameReview>
        </StyledFrameInfo>
    </StyledFrame>
  )
}

const StyledFrame = styled.figure<{url: string}>`
    width: 20rem;
    height: 28rem;
    border: .6rem solid var(--color-recomendation);
    position: relative;
    background: url(${props => props.url}) bottom no-repeat;
    background-size: cover;
`;

const StyledFrameInfo = styled.figcaption`
    position: absolute;
    left: 10%;
    bottom: 5%;
    width: 120%;

    padding: 1.1rem .8rem;
    background-color: var(--color-recomendation);
    border-radius: .6rem;
    border: .6rem solid var(--color-accents);

    @media only screen and (${BREAKPOINTS.burger}){
        bottom: -.6rem;
        left: -10%;
    }
`;

const StyledFrameReview = styled.p`
    font-size: var(--fs-description);
`;

export default CarouselItem