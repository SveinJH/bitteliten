import Image from 'next/image';
import styled from 'styled-components';
import { BlackButton } from './styles/Buttons';

import bottle from '../assets/img/bottle.png';

const SingleProduct = ({ id }) => {
    return (
        <ProductCard>
            <Content>
                <div>
                    <Name>Flaske</Name>
                    <Brand>Rosenlund</Brand>
                </div>
                <Description>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                </Description>
                <div>
                    <Price>
                        39,- <Unit>/ stk</Unit>
                    </Price>
                    <BlackButton>Legg i handlekurv</BlackButton>
                </div>
            </Content>
            <ImageBox>
                <ImageContainer>
                    <Image src={bottle} alt="product" />
                </ImageContainer>
            </ImageBox>
        </ProductCard>
    );
};

const Brand = styled.div`
    color: #444;
    font-style: italic;
    margin: 0.5rem 0;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Description = styled.div`
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.75;
    margin: 2rem 0;
    width: 80%;
`;

const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageContainer = styled.div`
    align-items: center;
    background-color: #eee;
    border-radius: 16px;
    display: flex;
    margin: 1rem 3rem;
    padding: 3rem;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const Name = styled.div`
    font-size: 3rem;
`;

const Price = styled.div`
    color: var(--primary);
    font-size: 2.6rem;
    margin: 1rem 0;
`;

const ProductCard = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: var(--bsSmall);
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 2rem;
    margin: 2rem 0;
    max-width: 100rem;
    padding: 4rem;
    width: 80vw;
`;

const Unit = styled.span`
    color: var(--black);
    font-size: 1.5rem;
`;

export default SingleProduct;
