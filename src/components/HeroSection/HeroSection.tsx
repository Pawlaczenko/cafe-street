import { FC } from 'react';
import styled from 'styled-components';
import Heading,{HeadingLevel} from '../Heading/Heading';
import bgImage from '../../assets/bg_img_hero.png';
import { StyledSection } from '../../layout/Section/Section';
import Paragraph from '../Paragraph/Paragraph';
import {PrimaryButton, TransparentButton} from '../Button/Button';
import CartButton from '../Header/CartButton';
import Showcase from '../Showcase/Showcase';

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

const StyledHomeSection = styled.div`
  display: flex;
	align-items: flex-start;
	justify-content: space-between;
  padding-top: 25vh;

  & p {
    width: 80%;
  }
`;

const Wrapper = styled(StyledSection)`
    background: 
    url(${bgImage}) no-repeat top right,
    url(${bgImage}) no-repeat bottom left;
    background-color: var(--color-background);
    background-size: 25%;
    min-height: 100vh;
`

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
`;

export default HeroSection