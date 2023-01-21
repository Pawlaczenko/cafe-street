import { FC } from 'react';
import styled from 'styled-components';
import Heading,{HeadingLevel} from '../Heading/Heading';

const HomeSection : FC = () => {
  return (
    <StyledHomeSection>
      <Heading level={HeadingLevel.Heading} variant="brown">
        Enjoy your <u>coffee</u> <br /> before your activity
      </Heading>
    </StyledHomeSection>
  )
}

const StyledHomeSection = styled.section`
      
`;

export default HomeSection