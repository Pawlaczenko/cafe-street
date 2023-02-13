import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import StyledSection from '../../layout/Section/Section';
import Heading from '../Heading/Heading';
import { HeadingLevel } from '../Heading/Heading';
import ProductCard from '../ProductCard/ProductCard';
import useFetchProducts from '../../hooks/useFetchProducts';

const PopularSection : FC = () => {
  const products = useFetchProducts(3);
  return (
    <Wrapper>
        <StyledPopularSection>
            <Heading level={HeadingLevel.SubHeading}>Popular <u>Now</u></Heading>
            <CardHolder>
              {
                products.map((product, index) => {
                  return <ProductCard 
                          title={product.name} 
                          price={product.price} 
                          rating={product.rating} 
                          description={product.description} 
                          imagePath={product.image_path} 
                          key={index} 
                          isGlass 
                  />;
                })
              }
            </CardHolder>
        </StyledPopularSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    width: 100%;
`;

const StyledPopularSection = styled.div`
    width: 100%;
`;

const CardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 3rem;

  &:before {
    --cont-width: 120%;

    content: "";
    position: absolute;
    left: calc((100% - var(--cont-width)) / 2);
    top: 20%;
    z-index: -1;

    background-color: var(--color-accents);
    width: var(--cont-width);
    height: 95%;
    border-radius: 6.4rem;
  }
`;

export default PopularSection