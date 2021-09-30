import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Product = ({ product }) => {
    const { id, name, brand, price, image } = product;
    const router = useRouter();

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={image} alt="Product image" />
            </ImageContainer>
            <Description>
                <Name>{name}</Name>
                <Brand>{brand}</Brand>
                <Price>{price},-</Price>
            </Description>
            <Actions>
                <button
                    className="btn1"
                    onClick={() => router.push(`/produkter/${id}`)}
                >
                    Les mer
                </button>
                <button className="btn2">Kjøp</button>
            </Actions>
        </ProductContainer>
    );
};

const Actions = styled.div`
    display: flex;

    button {
        background-color: var(--black);
        border: none;
        color: #fff;
        cursor: pointer;
        font-family: inherit;
        transition: all 0.2s;
        width: 50%;

        &:hover {
            background-color: var(--gray);
        }
    }

    .btn1 {
        border-radius: 0 0 0 16px;
        border-right: 1px solid #fff;
    }
    .btn2 {
        border-radius: 0 0 16px 0;
        border-left: 1px solid #fff;
    }
`;

const Brand = styled.div`
    font-size: 1.2rem;
    font-style: italic;
    margin: 0.4rem 0;
`;

const Description = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #fff;
`;

const ImageContainer = styled.div`
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 16px 16px 0 0;
    display: flex;
    padding: 2rem;
    justify-content: center;

    img {
        width: 80%;
        object-fit: contain;
    }
`;

const Name = styled.div`
    font-weight: 500;
    letter-spacing: 1px;
`;

const Price = styled.div`
    color: var(--primary);
    font-size: 2rem;
`;

const ProductContainer = styled.div`
    border-radius: 16px;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.35);
    display: grid;
    grid-template-rows: 170px 90px 40px;
    height: 300px;
    width: 225px;
`;

export default Product;
