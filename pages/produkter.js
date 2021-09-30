import { useState } from 'react';
import styled from 'styled-components';
import Filters from '../components/Filters';
import Products from '../components/Products';
import Sorting from '../components/Sorting';

const CATEGORIES = [
    {
        id: 1,
        name: 'Flasker og beholdere',
    },
    {
        id: 2,
        name: 'Bestikk',
    },
];

const BRANDS = ['Rosenlund', 'Le Creuset'];

const ProductsPage = () => {
    return (
        <ProductsPageStyles>
            <h2>Produkter</h2>
            <Container>
                <Filters brands={BRANDS} categories={CATEGORIES} />
                <Sorting />
                <Products />
            </Container>
        </ProductsPageStyles>
    );
};

const Container = styled.div`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: 10rem;
    justify-items: center;

    & .products {
        grid-column: 2;
    }
`;

const ProductsPageStyles = styled.div`
    padding: 2rem 4rem;
`;

export default ProductsPage;
