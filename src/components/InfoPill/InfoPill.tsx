import React, { FC } from 'react'
import styled from 'styled-components';
import {FiStar} from "react-icons/fi";

interface IProps {
    big?: boolean,
    bold?: boolean,
    children: React.ReactNode
}

export const StarInfoPill : FC<IProps> = ({big, children}) => {
  return (
    <InfoPill big={big} bold>
        {children}
        <FiStar />
    </InfoPill>
  )
}

const InfoPill = styled.div<IProps>`
    --radius: 4.2rem;
    position: relative;
    padding: ${(props) => props.big ? "1.5rem 5rem" : ".4rem 1rem"};

    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    
    background-color: white;
    color: var(--color-secondary);
    border-radius: var(--radius);
    font-size: ${(props) => props.big ? "var(--fs-title)" : "var(--fs-description)"};
    font-weight: ${(props) => props.bold ? 800 : 600};

    &:before {
        --glass-padding: ${(props) => props.big ? "1.5rem" : "1rem"};
        --glass-position: calc(-1 * (var(--glass-padding) / 2));

        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: calc(100% + var(--glass-padding));
        height: calc(100% + var(--glass-padding));

        left: var(--glass-position);
        top: var(--glass-position);

        background: var(--gradient-glass);
        backdrop-filter: blur(10px);
        border-radius: var(--radius);
    }

    & > svg {
        fill: var(--color-star);
        color: var(--color-star);
    }
`;

export default InfoPill