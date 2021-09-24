import styled from 'styled-components';
import Image from 'next/image';

import { BsFillTrashFill } from 'react-icons/bs';
import SelectAmount from './SelectAmount';
import { useState } from 'react';

const CartItem = ({ item }) => {
    // TEMP
    const [amount, setAmount] = useState(item.amount || 1);

    return (
        <CartItemContainer>
            <ImageContainer>
                <Image src={item.image} alt={item.name} />
            </ImageContainer>
            <Column>
                <div>
                    <div>{item.name}</div>
                    <Price>Pris: {item.price},-</Price>
                </div>
                <StockStatus>
                    <Circle></Circle>
                    På lager
                </StockStatus>
            </Column>
            <Column>
                <div>
                    <Amount>Antall</Amount>
                    <SelectAmount amount={amount} setAmount={setAmount} />
                </div>
                <div>Totalt: {amount * item.price},-</div>
            </Column>
            <Delete>
                <BsFillTrashFill color="var(--primary" />
            </Delete>
        </CartItemContainer>
    );
};

const Amount = styled.div`
    color: var(--gray);
`;

const CartItemContainer = styled.div`
    background-color: #fff;
    box-shadow: var(--bsSmall);
    display: grid;
    grid-template-columns: 10rem 16rem 10rem 8rem;
    grid-gap: 2rem;
    height: 12rem;
    margin: 0.6rem 0;
    min-width: 10rem;
    padding: 1rem;
`;

const Circle = styled.div`
    background-color: #50ba4e;
    border-radius: 50%;
    height: 15px;
    margin-right: 0.6rem;
    width: 15px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 0;
`;

const Delete = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    & > svg {
        font-size: 3rem;

        &:hover {
            cursor: pointer;
            fill: var(--primaryDark);
        }
    }
`;

const ImageContainer = styled.div`
    display: flex;
    place-content: center;
    background-color: #eee;
    padding: 1rem;
    border: 1px solid #ddd;

    div {
        height: 8rem;
    }

    img {
        height: 100%;
    }
`;

const Price = styled.div`
    color: var(--gray);
    font-size: 1.4rem;
    margin-top: 1rem;
`;

const StockStatus = styled.div`
    align-items: center;
    display: flex;
`;

export default CartItem;
