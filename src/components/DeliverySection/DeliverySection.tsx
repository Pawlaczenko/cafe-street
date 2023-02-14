import React, { FC } from 'react'
import styled from 'styled-components';
import StyledSection from '../../layout/Section/Section'
import Heading, { HeadingLevel, StyledHeading } from '../Heading/Heading';
import { DELIVERY_OPTIONS } from '../../data/delivery';
import DeliveryItem from './DeliveryItem';
import { BREAKPOINTS } from '../../styles/variables';

const DeliverySection : FC = () => {
  return (
    <Wrapper id="delivery">
        <StyledDeliverySection>
            <Heading level={HeadingLevel.SubHeading} >How to use delivery <u>service</u></Heading>
            <StyledDeliveryList>
                {
                    DELIVERY_OPTIONS.map((option,index) => 
                        <DeliveryItem 
                            description={option.description} 
                            title={option.title} 
                            image_path={option.image_path} 
                            key={index}/>
                )}
            </StyledDeliveryList>
        </StyledDeliverySection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    margin-top: 15rem;

    @media only screen and (${BREAKPOINTS.large}) {
        margin-top: 20rem;
    }
`;

const StyledDeliverySection = styled.div`
    & > ${StyledHeading} {
        margin-bottom: 5rem;
    }
`;

const StyledDeliveryList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    flex-wrap: wrap;
    gap: 3rem;

    list-style-type: none;

    @media only screen and (${BREAKPOINTS.large}) {
        /* flex-direction: column;
        gap: 3rem;
        align-items: stretch; */
    }
`;

export default DeliverySection