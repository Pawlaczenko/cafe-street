import { FC } from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation/Navigation';

const App : FC = () => {

  return (
    <Wrapper>
		  <Navigation />
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
