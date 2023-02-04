import { FC } from 'react';
import styled from 'styled-components';
import InfoPill, { StarInfoPill } from '../InfoPill/InfoPill';
import BackgroundImage from "../../assets/hero_coffee.png";
import CoffeeImage from '../../assets/hero_img.png';

import { iProduct } from '../../data/products';

const Showcase : FC = () => {
  const product : iProduct = {
    name: "Cappuccino",
    rating: 4.8,
    price: 18,
    image_path: CoffeeImage
  };
  
  return (
    <Wrapper>
        <InfoPill big>{product.name}</InfoPill>
        <StarInfoPill big narrow>{product.rating}</StarInfoPill>
        <InfoPill big>{product.price}$</InfoPill>
        <StyledImageHolder>
          <img src={product.image_path} alt="coffee" />
        </StyledImageHolder>
    </Wrapper>
  )
}

const Wrapper = styled.figure`
    background: 
      url(${BackgroundImage}) no-repeat center center
      var(--color-secondary);
    background-size: contain;

    width: min(41.5rem, 100%);
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    & > ${InfoPill} {
      position: absolute;
      
      &:nth-child(1){ left: -15%; top: 10%; } //name
      &:nth-child(2){ right: -10%; top: 25%; } //rating
      &:nth-child(3){ left: 0; bottom: 10%; } //price
    }
`;

const StyledImageHolder = styled.figure`
    width: 90%;
    height: 90%;
    position: relative;
    z-index: -2;

    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 85%;
      height: 85%;
      object-fit: contain;
    }
`;

export default Showcase;