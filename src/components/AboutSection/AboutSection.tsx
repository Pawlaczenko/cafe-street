import { FC } from 'react';
import styled from 'styled-components';
import StyledSection from '../../layout/Section/Section';
import { PrimaryButton } from '../Button/Button';
import Heading,{ HeadingLevel } from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import BackImage from '../../assets/bg-image.png';
import AboutImage from '../../assets/about_img.jpg';
import { glassBackDrop } from '../../styles/mixins';
import { BREAKPOINTS } from '../../styles/variables';

const AboutSection : FC = () => {
  return (
    <Wrapper>
        <StyledAboutSection>
            <StyledAboutImage narrow>
                <img src={AboutImage} alt="Coffee on a table" />
            </StyledAboutImage>
            <StyledAboutInfo>
                <Heading level={HeadingLevel.SubHeading}>About <u>us</u></Heading>
                <Heading level={HeadingLevel.Title}>We provide quality coffee, and ready to deliver.</Heading>
                <Paragraph>We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.</Paragraph>
                <PrimaryButton>Get your coffee</PrimaryButton>
            </StyledAboutInfo>
        </StyledAboutSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    background-image: url(${BackImage});
    background-size: cover;

    margin-top: 25rem;
    padding: 10rem 0;
`;

const StyledAboutSection = styled.div`
    --image-offset: -18rem;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;

    position: relative;
    z-index: 1;

    @media only screen and (${BREAKPOINTS.large}) {
        grid-template-columns: 50% 50%;
    }

    @media only screen and (${BREAKPOINTS.about}) {
        grid-template-columns: 100%;
        justify-items: center;
    }
`;

const StyledAboutImage = styled.figure`
    max-width: 37rem;
    position: absolute !important;
    left: 15%;
    top: var(--image-offset);

    border-radius: 1rem;
    box-shadow: var(--shadow-light);

    ${glassBackDrop };

    & > img {
        border-radius: inherit;
    }

    @media only screen and (${BREAKPOINTS.large}) {
        left: 0;
    }

    @media only screen and (${BREAKPOINTS.about}) {
        position: relative !important;
    }
`;

const StyledAboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    
    grid-column: 2;

    @media only screen and (${BREAKPOINTS.about}) {
        grid-column: 1;
        align-items: center;
        width: 80%;
        margin-top: calc(var(--image-offset) / 2);

        & > p {
            text-align: center;
        }
    }
`;

export default AboutSection