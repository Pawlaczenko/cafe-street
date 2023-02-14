import { FC } from 'react';
import styled from 'styled-components';
import AboutSection from './components/AboutSection/AboutSection';
import DeliverySection from './components/DeliverySection/DeliverySection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PopularSection from './components/PopularSection/PopularSection';
import ProductsSection from './components/ProductsSection/ProductsSection';

const App : FC = () => {

  return (
    <Wrapper>
		  <Header />
      <HeroSection />
      <PopularSection />
      <DeliverySection />
      <AboutSection />
      <ProductsSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 15rem;
`;

export default App
