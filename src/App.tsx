import { FC } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';

const App : FC = () => {

  return (
    <Wrapper>
		  <Header />
      <HomeSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min(var(--website-width),100%) 1fr;

    & > * {
      grid-column: 2;
    }
`;

export default App
