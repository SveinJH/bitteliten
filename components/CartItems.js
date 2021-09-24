import styled from 'styled-components';
import CartItem from './CartItem';

const CartItems = ({ items }) => {
    return (
        <CartItemsContainer>
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </CartItemsContainer>
    );
};

const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default CartItems;
