import React, { FC } from 'react'
import styled from 'styled-components';
import {FiStar} from "react-icons/fi";
import { glassBackDrop } from '../../styles/mixins';

interface IProps {
    big?: boolean,
    bold?: boolean,
    narrow?: boolean,
    children: React.ReactNode
}

export const StarInfoPill : FC<IProps> = ({big, narrow, children}) => {
  return (
    <InfoPill big={big} bold narrow={narrow}>
        {children}
        <FiStar />
    </InfoPill>
  )
}

const InfoPill = styled.div<IProps>`
    --radius: 4.2rem;
    --vertical-padding: ${(props) => props.big ? ".8rem" : ".4rem"};
    --horizontal-padding: ${(props) => !props.big ? "1rem" : (props.narrow ? "3rem" : "5rem")};

    position: relative;
    padding: var(--vertical-padding) var(--horizontal-padding);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    
    background-color: white;
    color: var(--color-secondary);
    border-radius: var(--radius);
    font-size: ${(props) => props.big ? "var(--fs-title)" : "var(--fs-description)"};
    font-weight: ${(props) => props.bold ? 800 : 600};

    ${glassBackDrop};

    & > svg {
        fill: var(--color-star);
        color: var(--color-star);
    }
`;

export default InfoPill