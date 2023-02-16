import React, { useEffect, useState } from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { iPerson, REVIEWS } from '../../data/recomendations';
import { BREAKPOINTS } from '../../styles/variables';
import CarouselController from './CarouselController';
import CarouselItem from './CarouselItem';

interface IProps {
    slidesPerPage: number,
}

const Carousel : FC<IProps> = ({slidesPerPage}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slidesArray, setSlidesArray] = useState<iPerson[]>([]);

  const getReviews = () => {
    let start : number = (currentPage - 1) * slidesPerPage;
    let end : number = start + slidesPerPage;
    const reviews = REVIEWS.slice(start,end);

    //Fire Animation

    setSlidesArray(reviews);
  }

  const getPageCount = () => {
    return Math.ceil(REVIEWS.length / slidesPerPage);
  }

  const handlePageChange = (page : number) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    getReviews();
  },[currentPage]);

  return (
    <StyledCarousel>
      <SlidesContainer>
        {
          slidesArray.map((slide,index) => 
            <CarouselItem 
              name={slide.name} 
              recomendation={slide.recomendation} 
              photo_path={slide.photo_path} 
              key={Math.random()}
              order={index}
              />)
        }
      </SlidesContainer>
      <CarouselController currentPage={currentPage} pageCount={getPageCount()} handleClick={handlePageChange} />
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
    
`;

const SlidesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap:3rem;
    flex-wrap: wrap;

    @media only screen and (${BREAKPOINTS.burger}){
        justify-content: space-around;
    }
`;

export default Carousel