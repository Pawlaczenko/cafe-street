import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { REVIEWS } from '../../data/recomendations';
import { BREAKPOINTS } from '../../styles/variables';
import CarouselItem from './CarouselItem';

interface IProps {
    slidesPerPage: number,
}

const Carousel : FC<IProps> = (slidesPerPage) => {
  return (
    <StyledCarousel>
        <CarouselItem name={REVIEWS[0].name} recomendation={REVIEWS[0].recomendation} photo_path={REVIEWS[0].photo_path} />
        <CarouselItem name={REVIEWS[1].name} recomendation={REVIEWS[1].recomendation} photo_path={REVIEWS[1].photo_path} />
        <CarouselItem name={REVIEWS[2].name} recomendation={REVIEWS[2].recomendation} photo_path={REVIEWS[2].photo_path} />
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
    display: flex;
    justify-content: space-between;
    gap:3rem;
    flex-wrap: wrap;

    @media only screen and (${BREAKPOINTS.burger}){
        justify-content: space-around;
    }
`;

export default Carousel