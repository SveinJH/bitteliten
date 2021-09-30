import styled from 'styled-components';
import Product from './Product';
import { useFilters } from '../context/useFilters';

import { DUMMY_PRODUCTS } from '../dummydata';

const Products = ({ transform, hasMaxWidth }) => {
    const { selectedBrands } = useFilters();

    const filteredProducts = selectedBrands.length
        ? DUMMY_PRODUCTS.filter((product) =>
              selectedBrands.includes(product.brand)
          )
        : DUMMY_PRODUCTS;

    return (
        <ProductsContainer
            transform={transform}
            hasMaxWidth={hasMaxWidth}
            className="products"
        >
            {filteredProducts.map((product) => {
                return <Product key={product.id} product={product} />;
            })}
        </ProductsContainer>
    );
};

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 225px);
    justify-content: space-between;
    grid-gap: 3rem;
    width: 100%;
    max-width: ${(props) => (props.hasMaxWidth ? '1000px' : null)};
    transform: ${(props) =>
        props.transform ? 'translateY(-3rem)' : 'translateY(0)'};
`;

export default Products;
