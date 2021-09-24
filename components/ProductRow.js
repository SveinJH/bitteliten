import Image from 'next/image';
import styled from 'styled-components';

const ProductRow = ({ product }) => {
    const { name, brand, price, image } = product;

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
                <button className="btn1">Les mer</button>
                <button className="btn2">Kjøp</button>
            </Actions>
        </ProductContainer>
    );
};

const Actions = styled.div`
    background-color: #fff;
    border-radius: 0 16px 16px 0;
    display: flex;
    align-items: center;
    padding: 1rem;

    button {
        background-color: var(--black);
        border: none;
        color: #fff;
        cursor: pointer;
        font-family: inherit;
        margin: 1rem;
        padding: 1rem;
        transition: all 0.2s;
        width: 50%;

        &:hover {
            background-color: var(--gray);
        }
    }
`;

const Brand = styled.div`
    font-size: 1.4rem;
    font-style: italic;
    margin: 0.4rem 0;
`;

const Description = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ImageContainer = styled.div`
    background-color: #f5f5f5;
    border-radius: 16px 0 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
        object-fit: contain;
    }
`;

const Name = styled.div`
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 2rem;
`;

const Price = styled.div`
    color: var(--primary);
    font-size: 3rem;
`;

const ProductContainer = styled.div`
    border-radius: 16px;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.35);
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 150px;
`;

export default ProductRow;
