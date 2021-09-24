import styled from 'styled-components';
import CartItems from '../components/CartItems';
import Delivery from '../components/checkout/Delivery';

import bottle from '../assets/img/bottle.png';

const CART_ITEMS_DATA = [
    {
        id: 1,
        name: 'Flaske',
        image: bottle,
        amount: 2,
        price: 39,
        inStock: true,
    },
    {
        id: 2,
        name: 'Flaske',
        image: bottle,
        amount: 2,
        price: 39,
        inStock: true,
    },
];

const CheckoutPage = () => {
    return (
        <CheckoutPageStyles>
            <h2>Kasse</h2>
            <Delivery />
            <CheckoutContainer>
                <CartItems items={CART_ITEMS_DATA} />
                <CheckoutMethodsContainer>
                    <h5>Ekspressutsjekk</h5>
                    <CheckoutMethods>
                        <Method>Klarna</Method>
                        <Method>Vipps</Method>
                    </CheckoutMethods>
                    <Summary>SUMMARY</Summary>
                </CheckoutMethodsContainer>
            </CheckoutContainer>
        </CheckoutPageStyles>
    );
};

const CheckoutContainer = styled.div`
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin: 2rem 0;
    padding: 2rem 4rem;
`;

const CheckoutPageStyles = styled.div`
    max-width: 1400px;

    h2 {
        margin-bottom: 3rem;
    }
`;

const CheckoutMethods = styled.div``;

const CheckoutMethodsContainer = styled.div`
    align-items: center;
    box-shadow: var(--bsSmall);
    display: flex;
    flex-direction: column;
    padding: 1.6rem 0;
`;

const Method = styled.div``;

const Summary = styled.div``;

export default CheckoutPage;
