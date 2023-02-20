import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import StyledSection from '../../layout/Section/Section';
import backImg from '../../assets/newsletter_img.jpg';
import Heading, { HeadingLevel } from '../Heading/Heading';
import { StyledInput, StyledTextInputWrapper } from '../SearchBar/SearchBar';
import { PrimaryButton } from '../Button/Button';
import { BREAKPOINTS } from '../../styles/variables';

const NewsletterSection : FC = () => {
  return (
    <Wrapper>
        <StyledNewsletterSection>
            <Heading level={HeadingLevel.SubHeading} variant="white">Subscribe to get 50% discount price</Heading>
            <NewsletterInput>
                <StyledInput placeholder='Email Address' />
                <PrimaryButton>Order Now</PrimaryButton>
            </NewsletterInput>
        </StyledNewsletterSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
    margin: 12rem 0;

    @media only screen and (${BREAKPOINTS.burger}) {
        margin: 6rem 0;
    }
`

const StyledNewsletterSection = styled.div`
    background: 
        linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),
        url(${backImg}) center no-repeat;
    background-size: cover;
    padding: 13rem 0;
    border-radius: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NewsletterInput = styled(StyledTextInputWrapper)`
    padding: .5rem;
    margin-top: 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: .5rem;

    & > ${StyledInput} {
        width: auto;
        padding-left: 1rem;
    }
`;

export default NewsletterSection