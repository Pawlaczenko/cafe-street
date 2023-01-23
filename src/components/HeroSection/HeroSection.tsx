import { FC } from 'react';
import styled from 'styled-components';
import Heading,{HeadingLevel} from '../Heading/Heading';
import bgImage from '../../assets/bg_img_hero.png';
import { StyledSection } from '../Section/Section';

const HeroSection : FC = () => {
  return (
    <Wrapper>
      <StyledHomeSection>
        <Heading level={HeadingLevel.Heading} variant="brown">
          Enjoy your <mark>coffee</mark> <br /> before your activity
        </Heading>
      </StyledHomeSection>
    </Wrapper>
  )
}

const StyledHomeSection = styled.div`
    display: flex;
    align-items: center;
`;

const Wrapper = styled(StyledSection)`
    background: 
      url(${bgImage}) no-repeat top right,
      url(${bgImage}) no-repeat bottom left;
    background-size: 25%;
    height: 100vh;
`

export default HeroSection