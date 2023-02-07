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
            <CardHolder>
              <ProductCard title={'Vanilla Latte'} price={16} rating={4.5} description="bread with meat and vegetables" isGlass />
              <ProductCard title={'Vanilla Latte'} price={16} rating={4.5} description="bread with meat and vegetables" isGlass />
              <ProductCard title={'Vanilla Latte'} price={16} rating={4.5} description="bread with meat and vegetables" isGlass />
            </CardHolder>
        </StyledPopularSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    width: 100%;
    z-index: 1;
    position: absolute;
    bottom: -35vh;
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