import styled from 'styled-components';
import { QuantityButton } from './styles/Buttons';

const SelectAmount = ({ amount, setAmount }) => {
    const handleChange = (value) => {
        if (amount + value > 0) {
            setAmount(amount + value);
        }
    };

    return (
        <Container>
            <QuantityButton onClick={() => handleChange(1)}>-</QuantityButton>
            <Quantity>{amount}</Quantity>
            <QuantityButton onClick={() => handleChange(-1)}>+</QuantityButton>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    margin: 0.4rem 0;
`;

const Quantity = styled.div`
    align-items: center;
    border-bottom: 2px solid #bbb;
    border-top: 2px solid #bbb;
    display: flex;
    height: 3rem;
    justify-content: center;
    width: 3rem;
`;

export default SelectAmount;
