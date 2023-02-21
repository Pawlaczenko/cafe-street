import { FC } from 'react';
import styled from 'styled-components';
import StyledSection, { BleedOptions } from '../../layout/Section/Section';
import Heading, { HeadingLevel } from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import bgImage from '../../assets/bg-image.png';
import Carousel from '../Carousel/Carousel';
import { BREAKPOINTS } from '../../styles/variables';
import useMediaQuery from '../../hooks/useMediaQuery';

const RecomendationSection : FC = () => {
  const isBurgerWidth = useMediaQuery(`(${BREAKPOINTS.burger})`);
  return (
    <Wrapper bleed={isBurgerWidth ? BleedOptions.center : BleedOptions.right}>
        <StyledRecomendationSection>
            <RecomendationInfo>
                <Heading level={HeadingLevel.SubHeading}>What they say <u>about us</u></Heading>
                <Paragraph>We always provide the best service and always maintain the quality of coffee</Paragraph>
            </RecomendationInfo>
            <SliderContainer>
                <Carousel slidesPerPage={3} />
            </SliderContainer>
        </StyledRecomendationSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    margin-top: 15rem;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        height: 100%;
        width: 65%;
        
        background: url(${bgImage}) no-repeat;
        --border-radius: 2.4rem;
        border-radius: 0 var(--border-radius) var(--border-radius) 0;

        @media only screen and (${BREAKPOINTS.burger}){
            width: 100%;
            border-radius: 0 0 var(--border-radius) var(--border-radius);
        }
    }
`;

const StyledRecomendationSection = styled.div`
    padding: 10rem 0;

    display: grid;
    grid-template-columns: 30% 55%;
    gap: 5rem;
    align-items: center;

    @media only screen and (${BREAKPOINTS.burger}){
        grid-template-columns: 100%;
        gap: 5rem;
    }
`;

const RecomendationInfo = styled.div`
    & > p {
        width: 75%;
        padding-top: 2rem;
    }

    @media only screen and (${BREAKPOINTS.burger}){
        text-align: center;
        & > p {
            margin: 0 auto;
        }
    }
`;

const SliderContainer = styled.div`

`;

export default RecomendationSection