import { FC } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PopularSection from './components/PopularSection/PopularSection';

const App : FC = () => {

  return (
    <Wrapper>
		  <Header />
      <HeroSection />
      <PopularSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;
`;

export default App
