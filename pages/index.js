import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { OutlinedButton, PrimaryButton } from '../components/styles/Buttons';
import { Orange } from '../components/styles/Text';

import booksPlant from '../assets/img/booksPlant.jpg';
import yarn from '../assets/img/yarn.jpg';
import machine from '../assets/img/machine.jpg';
import Products from '../components/Products';

const Home = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>
            <Main>
                <TextContainer>
                    <h1>
                        Lorem ipsum, dolor sit amet,{' '}
                        <Orange>Consectetur.</Orange>
                    </h1>
                    <Paragraph>
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </Paragraph>
                    <ButtonContainer>
                        <Link href="/produkter" passHref>
                            <PrimaryButton>Produkter</PrimaryButton>
                        </Link>
                        <Link href="/kontakt" passHref>
                            <OutlinedButton>Kontakt</OutlinedButton>
                        </Link>
                    </ButtonContainer>
                </TextContainer>
                <Images>
                    <ImageContainer className="img1">
                        <Image src={yarn} alt="Yarn" />
                    </ImageContainer>
                    <ImageContainer className="img2">
                        <Image src={machine} alt="Sewing machine" />
                    </ImageContainer>
                    <ImageContainer className="img3">
                        <Image src={booksPlant} alt="Books and a Plant" />
                    </ImageContainer>
                </Images>
            </Main>
            <ProductsSection>
                <Products transform hasMaxWidth isGrid />
                <Link href="/produkter" passHref>
                    <PrimaryButton>Til Produkter</PrimaryButton>
                </Link>
            </ProductsSection>
        </>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

const ImageContainer = styled.div`
    position: absolute;
    width: 275px;
    border-radius: 15px;
    box-shadow: var(--bsLarge);
    line-height: 0;
    right: 15%;
    transition: all 0.2s;

    img {
        border-radius: 15px;
    }
`;

const Images = styled.div`
    position: relative;

    .img1 {
        width: 230px;
        z-index: 1;
        top: 5%;
    }
    .img2 {
        width: 350px;
        z-index: 2;
        top: 18%;
        right: 31%;
    }
    .img3 {
        z-index: 3;
        top: 40%;
        right: 34%;
    }
`;

const Main = styled.main`
    background-color: var(--backgroundColor);
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 1fr 1fr;
    padding: 0 4rem;
    position: relative;
    height: 520px;
`;

const Paragraph = styled.p`
    line-height: 2;
    font-size: 1.8rem;
    color: var(--gray);
`;

const ProductsSection = styled.div`
    align-items: center;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 3rem;
`;

const TextContainer = styled.div`
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default Home;
