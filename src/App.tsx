import { FC } from 'react';
import styled from 'styled-components';
import AboutSection from './components/AboutSection/AboutSection';
import DeliverySection from './components/DeliverySection/DeliverySection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import NewsletterSection from './components/NewsletterSection/NewsletterSection';
import PopularSection from './components/PopularSection/PopularSection';
import ProductsSection from './components/ProductsSection/ProductsSection';
import RecomendationSection from './components/RecomendationSection/RecomendationSection';

const App : FC = () => {

  return (
    <Wrapper>
		  <Header />
      <HeroSection />
      <PopularSection />
      <DeliverySection />
      <AboutSection />
      <ProductsSection />
      <RecomendationSection />
      <NewsletterSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export default App
