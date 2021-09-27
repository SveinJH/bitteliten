import styled from 'styled-components';
import CartItems from '../components/CartItems';
import Delivery from '../components/checkout/Delivery';
import PaymentMethod from '../components/checkout/PaymentMethod';

import bottle from '../assets/img/bottle.png';
import klarna from '../assets/brands/klarna.svg';
import vipps from '../assets/brands/vipps.svg';
import { Bold } from '../components/styles/Text';
import { SuccessButton } from '../components/styles/Buttons';

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
                        <PaymentMethod
                            description="Enkelt og trygt, ingen registrering"
                            logo={klarna}
                            tags={['faktura', 'kort']}
                        />
                        <PaymentMethod
                            description="Lynrask mobilbetaling med Vipps"
                            logo={vipps}
                            tags={['mobilbetaling']}
                        />
                    </CheckoutMethods>
                    <Summary>
                        <div>
                            <div>Sum:</div>
                            <Bold>68,-</Bold>
                        </div>
                        <div>
                            <div>Rabatt:</div>
                            <Bold>10,-</Bold>
                        </div>
                    </Summary>
                    <SumContainer>
                        <div>Å betale</div>
                        <Sum>58,-</Sum>
                    </SumContainer>
                    <SuccessButton>Videre</SuccessButton>
                </CheckoutMethodsContainer>
            </CheckoutContainer>
        </CheckoutPageStyles>
    );
};

const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin: 2rem 0 0;
    padding: 2rem 4rem;
`;

const CheckoutPageStyles = styled.div`
    h2 {
        margin-bottom: 3rem;
    }
`;

const CheckoutMethods = styled.div`
    width: 100%;
`;

const CheckoutMethodsContainer = styled.div`
    align-items: center;
    background-color: #fff;
    box-shadow: var(--bsSmall);
    display: flex;
    flex-direction: column;
    padding: 1.6rem 3rem;
`;

const Sum = styled.div`
    color: var(--primary);
    font-size: 2.8rem;
`;

const SumContainer = styled.div`
    font-size: 1.8rem;
    text-align: center;
    margin: 1.4rem 0 1.4rem;
`;

const Summary = styled.div`
    border: 2px solid #ddd;
    border-radius: 10px;
    margin: 1rem 0;
    padding: 0.5rem 2.6rem;
    width: 44%;

    & > div {
        display: flex;
        justify-content: space-between;
        margin: 0.8rem 0;
    }
`;

export default CheckoutPage;
