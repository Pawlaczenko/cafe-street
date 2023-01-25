import { FC } from 'react';
import styled from 'styled-components';
import InfoPill, { StarInfoPill } from '../InfoPill/InfoPill';
import BackgroundImage from "../../assets/Exclude.png";
import Coffee from '../../assets/products/3.png';

const Showcase : FC = () => {
  return (
    <Wrapper>
        <InfoPill big>Sandwitch</InfoPill>
        <StarInfoPill big>4.8</StarInfoPill>
        <InfoPill big>18$</InfoPill>
        <StyledImageHolder>
          <img src={Coffee} alt="coffee" />
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
      
      &:nth-child(1){ left: -15%; top: 10%; }
      &:nth-child(2){ right: -10%; top: 25%; }
      &:nth-child(3){ left: 0; bottom: 10%; }
    }
`;

const StyledImageHolder = styled.figure`
    width: 90%;
    height: 90%;
    border-radius: 50%;
    overflow: hidden;

    position: relative;
    z-index: -2;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

export default Showcase;