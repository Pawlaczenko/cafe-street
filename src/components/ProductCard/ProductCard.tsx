import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { glassBackDrop } from '../../styles/mixins';
import CartButton, { StyledCartButton } from '../Header/CartButton';
import InfoPill, { StarInfoPill } from '../InfoPill/InfoPill';

interface IProductCard {
    title: string,
    price: number,
    rating: number,
    description: string,
    isGlass: boolean,
    imagePath: string
}

const ProductCard : FC<IProductCard> = ({price,rating,title,description,isGlass,imagePath}) => {
  const image = `images/products/${imagePath}`;
  return (
    <StyledCard 
      isGlass={isGlass}
    >
        <StyledCardImage>
            <img src={image} alt={title} />
            <StarInfoPill big={false}>{rating.toFixed(1)}</StarInfoPill>
        </StyledCardImage>
        <StyledCardInfo>
          <StyledCardText>{title}</StyledCardText>
          <StyledCardText weight={800}>{price}$</StyledCardText>
          <StyledCardDescription>{description}</StyledCardDescription>
          <CartButton isPrimary={true} />
        </StyledCardInfo>
    </StyledCard>
  )
}

const StyledCardText = styled.p<{weight?: number}>`
  font-size: var(--fs-title);
  font-weight: ${(props) => props.weight || 600};
  color: var(--color-secondary);
  transition: var(--am-primary);
`;

const StyledCard = styled.div<{isGlass : boolean}>`
    --card-border-radius: 1.5rem;

    background-color: white;
    border-radius: var(--card-border-radius);
    max-width: var(--card-width);
    padding: 2.4rem 1.8rem;
    box-shadow: var(--shadow-heavy);
    cursor: pointer;
    transition: var(--am-primary);
    
    ${(props) => props.isGlass && glassBackDrop}

    &:hover {
      & ${StyledCardText} {
        color: var(--color-primary);
      }
    }

    *:has(${`> &`}){
      transform-style: preserve-3d;
    }
`;
const StyledCardImage = styled.figure`
    border-radius: var(--card-border-radius);
    overflow: hidden;
    position: relative;
    z-index: 1;
    width: 100%;

    & > ${InfoPill} {
      position: absolute;
      left: 1.4rem;
      top: 1.1rem;
    }

    & > img {
      position: relative;
      z-index: -2;
    }
`;

const StyledCardDescription = styled.p`
  color: var(--color-grey-light);
  font-size: var(--fs-description);
`;

const StyledCardInfo = styled.div`
    padding: 1.9rem 1rem 0 1rem;
    display: grid;
    grid-template-areas:
      "title price"
      "description cart";
    grid-column-gap: 3rem;
    align-items: center;
    grid-template-columns: 1fr min-content;
    
    & > ${StyledCardText} {
      &:nth-child(1){grid-area: title;}
      &:nth-child(2){grid-area: price;}
    }

    & > ${StyledCardDescription} {
      grid-area: description;
    }

    & > ${StyledCartButton} {
      grid-area: cart;
      justify-self: center;
    }
`;

export default ProductCard