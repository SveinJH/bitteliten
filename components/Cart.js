import styled from 'styled-components';
import { useRouter } from 'next/router';
import CartItems from './CartItems';
import { useCart } from '../context/useCart';
import { GrClose } from 'react-icons/gr';
import { PrimaryButton, TextButton } from './styles/Buttons';

const Cart = () => {
    const router = useRouter();
    const { cartOpen, toggleCart } = useCart();

    return (
        <CartStyles open={cartOpen}>
            <CloseButton onClick={toggleCart}>
                <GrClose size={22} />
            </CloseButton>
            <h2>Handlevogn</h2>
            <div>
                <CartItems />
            </div>
            <SumContainer>
                <div>Sum:</div>
                <div id="total">39,-</div>
            </SumContainer>
            <PrimaryButton
                onClick={() => router.push('/kasse')}
                style={{ alignSelf: 'stretch' }}
            >
                Til Kassen
            </PrimaryButton>
            <div>
                <TextButton onClick={toggleCart}>Lukk Handlevogn</TextButton>
            </div>
        </CartStyles>
    );
};

const CartStyles = styled.div`
    background-color: #fff;
    border-left: 2px solid #eee;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 2rem 2rem 3rem;
    position: fixed;
    right: 0;
    transform: ${(props) =>
        props.open ? 'translateX(0)' : 'translateX(650px)'};
    transition: all 0.2s;
    width: 650px;
    z-index: 100;
`;

const CloseButton = styled.div`
    cursor: pointer;
    left: 1rem;
    position: absolute;
    top: 1rem;
`;

const SumContainer = styled.div`
    border: 2px solid #ddd;
    border-radius: 6px;
    display: flex;
    font-size: 1.8rem;
    justify-content: space-between;
    margin: auto 0 3rem;
    padding: 1rem 3rem;
    width: 20rem;

    #total {
        color: var(--primary);
    }
`;

export default Cart;
