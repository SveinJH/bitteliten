import styled from 'styled-components';
import Product from './Product';

import bottleImg from '../assets/img/bottle.png';
import ProductRow from './ProductRow';

const PRODUCT_INFO = {
    id: 1,
    name: 'Flaske',
    brand: 'Rosenlund',
    price: 39,
    image: bottleImg,
};

const Products = ({ isGrid, transform, hasMaxWidth }) => {
    return (
        <ProductsContainer
            isGrid={isGrid}
            transform={transform}
            hasMaxWidth={hasMaxWidth}
            className="products"
        >
            {new Array(8).fill(0).map((_, idx) => {
                return isGrid ? (
                    <Product key={idx} product={PRODUCT_INFO} />
                ) : (
                    <ProductRow key={idx} product={PRODUCT_INFO} />
                );
            })}
        </ProductsContainer>
    );
};

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props.isGrid ? 'repeat(auto-fit, 225px)' : '1fr'};
    justify-content: space-between;
    grid-gap: 3rem;
    width: 100%;
    max-width: ${(props) => (props.hasMaxWidth ? '1000px' : null)};
    transform: ${(props) =>
        props.transform ? 'translateY(-3rem)' : 'translateY(0)'};
`;

export default Products;
