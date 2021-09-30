import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

import { BsArrowLeft } from 'react-icons/bs';
import SingleProduct from '../../components/SingleProduct';
import Products from '../../components/Products';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <ProductPageStyles>
            <Link href="/produkter">
                <BackLink>
                    <BsArrowLeft size={22} />
                    <div>Tilbake til produkter</div>
                </BackLink>
            </Link>
            <SingleProduct id={id} />
            <SimilarProductsText>Lignende produkter</SimilarProductsText>
            <Products />
        </ProductPageStyles>
    );
};

const BackLink = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;

    svg {
        transition: all 0.15s;
    }

    &:hover {
        text-decoration: underline;

        svg {
            transform: translateX(-2px);
        }
    }
`;

const ProductPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

const SimilarProductsText = styled.div`
    font-size: 2.2rem;
    margin: 3rem 0;
    text-align: center;
`;

export default ProductPage;
