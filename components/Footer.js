import styled from 'styled-components';
import Image from 'next/image';

import vipps from '../assets/brands/vipps.svg';
import klarna from '../assets/brands/klarna.svg';
import visa from '../assets/brands/visa.svg';

const paymentMethods = [vipps, klarna, visa];

const Payment = ({ method }) => {
    return (
        <PaymentCard>
            <Image src={method} alt="Payment method" />
        </PaymentCard>
    );
};

const Footer = () => {
    return (
        <FooterContainer>
            <div style={{ color: '#aaa' }}>Betalingsmetoder</div>
            <Payments>
                {paymentMethods.map((method, i) => (
                    <Payment key={i} method={method} />
                ))}
            </Payments>
            <Copyright>
                @ Bitteliten AS / Org.nr 1234567890 MVA, Buhagen 2, 4322
                Sandnes, Norge
            </Copyright>
        </FooterContainer>
    );
};

const Copyright = styled.div`
    color: #555;
    font-size: 1.2rem;
    margin-top: auto;
`;

const FooterContainer = styled.footer`
    align-items: center;
    background-color: #222;
    display: flex;
    flex-direction: column;
    height: 25rem;
    padding: 3rem 0 1rem;
`;

const PaymentCard = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    height: 6.5rem;
    justify-content: center;
    width: 10rem;

    img {
        width: 76%;
    }
`;

const Payments = styled.div`
    margin-top: 2rem;
    max-width: 800px;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(3, 10rem);
`;

export default Footer;
