import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import StyledSection from '../../layout/Section/Section';
import Heading from '../Heading/Heading';
import { HeadingLevel } from '../Heading/Heading';
import ProductCard from '../ProductCard/ProductCard';

const PopularSection : FC = () => {
  return (
    <Wrapper>
        <StyledPopularSection>
            <Heading level={HeadingLevel.SubHeading}>Popular <u>Now</u></Heading>
            <div>
              <ProductCard title={'Vanilla Latte'} price={16} rating={4.5} description="bread with meat and vegetables" glass />
            </div>
        </StyledPopularSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    position: relative;
    z-index: 1;
`;

const StyledPopularSection = styled.div`
    position: absolute;
    top: -25vh;
    padding-bottom: 10rem;
`;

export default PopularSection