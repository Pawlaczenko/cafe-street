import React, { FC } from 'react'
import styled from 'styled-components'
import useFetchProducts from '../../hooks/useFetchProducts';
import StyledSection from '../../layout/Section/Section';
import Heading, { StyledHeading } from '../Heading/Heading';
import { HeadingLevel } from '../Heading/Heading';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSection : FC = () => {
    const products = useFetchProducts();
    return (
        <Wrapper id="products">
            <StyledProductsSection>
                <Heading level={HeadingLevel.SubHeading}>Special menu <u>for you</u></Heading>
            </StyledProductsSection>
            <StyledProductsGrid>
                {
                    products.map((product,index) => {
                        return <ProductCard 
                            title={product.name} 
                            price={product.price} 
                            rating={product.rating} 
                            description={product.description} 
                            isGlass={false} 
                            imagePath={product.image_path} 
                            key={index}
                        />
                    })
                }
            </StyledProductsGrid>
        </Wrapper>
    )
}

const Wrapper = styled(StyledSection)`
    margin-top: 10rem;
`;

const StyledProductsSection = styled.div`
    & > ${StyledHeading} {
        margin-bottom: 6rem;
    }
`;

const StyledProductsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
    gap: 4rem;
    justify-items: center;
`;

export default ProductsSection