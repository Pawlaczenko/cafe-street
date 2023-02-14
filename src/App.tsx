import { FC } from 'react';
import styled from 'styled-components';
import DeliverySection from './components/DeliverySection/DeliverySection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PopularSection from './components/PopularSection/PopularSection';

const App : FC = () => {

  return (
    <Wrapper>
		  <Header />
      <HeroSection />
      <PopularSection />
      <DeliverySection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    
`;

export default App
