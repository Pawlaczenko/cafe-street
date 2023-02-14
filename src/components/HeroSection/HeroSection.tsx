import { FC } from 'react';
import styled from 'styled-components';
import Heading,{HeadingLevel, StyledHeading} from '../Heading/Heading';
import bgImage from '../../assets/bg_img_hero.png';
import { StyledSection } from '../../layout/Section/Section';
import Paragraph, { StyledParagraph } from '../Paragraph/Paragraph';
import {PrimaryButton, TransparentButton} from '../Button/Button';
import CartButton from '../Header/CartButton';
import Showcase from '../Showcase/Showcase';
import { BREAKPOINTS } from '../../styles/variables';

const HeroSection : FC = () => {
  return (
    <Wrapper>
      <StyledHomeSection>
        <FlexContainer>
          <Heading level={HeadingLevel.Heading} variant="brown">
            Enjoy your <mark>coffee</mark> <br /> before your activity
          </Heading>
          <Paragraph> Boost your productivity and build your mood with a glass of coffee in the morning </Paragraph>
          <ButtonContainer>
            <PrimaryButton>Order Now <CartButton isPrimary isSmall /> </PrimaryButton>
            <TransparentButton isTiny>More menu</TransparentButton>
          </ButtonContainer>
        </FlexContainer>
        <FlexContainer end>
          <Showcase />
        </FlexContainer>
      </StyledHomeSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 150%;
      width: 100%;
      z-index: -1;
      background: 
        url(${bgImage}) no-repeat top right,
        url(${bgImage}) no-repeat bottom left;
      background-color: var(--color-background);
      background-size: 25%;
      
      @media only screen and (${BREAKPOINTS.burger}){
        background-position: 40% right;
        background-size: 40%;
      }
    }
`

const StyledHomeSection = styled.div`
  display: flex;
	align-items: flex-start;
	justify-content: space-between;
  padding-top: 25vh;
  flex-wrap: wrap;

  & p {
    width: 80%;
  }

  @media only screen and (${BREAKPOINTS.burger}){
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
    gap: 5rem;
    margin-bottom: 10rem;

    & ${StyledParagraph} {
      text-align: center;
      width: 70%;
    }
    & ${StyledHeading} {
      text-align: center;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const FlexContainer = styled.div<{end?: boolean}>`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.end ? "flex-end" : "flex-start"};
  gap: 3rem;

  @media only screen and (${BREAKPOINTS.burger}){
    align-items: center;
  }

`;

export default HeroSection