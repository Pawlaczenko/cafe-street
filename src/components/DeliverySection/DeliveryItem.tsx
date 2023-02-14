import React, { FC } from 'react'
import styled from 'styled-components';
import Heading, { HeadingLevel } from '../Heading/Heading';
import { IDeliveryOptions } from '../../data/delivery';

const DeliveryItem : FC<IDeliveryOptions> = ({description,image_path,title}) => {
  return (
    <StyledDeliveryItem>
        <StyledImage>
            <img src={image_path} alt="Delivery service option" />
        </StyledImage>
        <Heading level={HeadingLevel.Title} variant="brown" >{title}</Heading>
        <StyledDescription>{description}</StyledDescription>
    </StyledDeliveryItem>
  )
}

const StyledDeliveryItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;
`;

const StyledImage = styled.figure`
    flex: 1;
    margin-bottom: 1.5rem;
`;

const StyledDescription = styled.p`
    font-size: var(--fs-paragraph);
`;

export default DeliveryItem