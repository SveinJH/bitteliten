import styled from 'styled-components';
import { Bold } from '../styles/Text';

const Delivery = () => {
    return (
        <DeliveryContainer>
            <Card>
                <Header>
                    <h3>Hvem handler?</h3>
                </Header>
                <Section>
                    <div>torbjorn.gh@gmail.com</div>
                    <div>976 59 310</div>
                </Section>
                <Section>
                    <Bold>Leveringsadresse</Bold>
                    <div>Torbjørn Gherman</div>
                    <div>Nedre Holmegate 9D, 4006 Stavanger</div>
                </Section>
                <Section>
                    <ChangeAddress>Endre leveringsadresse?</ChangeAddress>
                </Section>
            </Card>
        </DeliveryContainer>
    );
};

const Card = styled.div`
    background-color: #fff;
    box-shadow: var(--bsSmall);
    height: 26rem;
    max-width: 90rem;
    min-width: 20rem;
    width: 40vw;
`;

const ChangeAddress = styled.div`
    color: #0670a3;
    margin-top: 1rem !important;
`;

const DeliveryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Header = styled.div`
    background-color: var(--primary);
    padding: 1rem 2rem;

    h3 {
        font-size: 2rem;
        margin: 0;
    }
`;

const Section = styled.div`
    border-bottom: 1px solid #eee;
    margin: 1rem;
    padding: 0.4rem 1rem;

    div {
        margin: 0.4rem 0;
    }
`;

export default Delivery;
