import { FC } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

const App : FC = () => {

  return (
    <Wrapper>
		  <Header />
      <HeroSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export default App
