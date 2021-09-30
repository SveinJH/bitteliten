import styled from 'styled-components';
import CartItem from './CartItem';

import { DUMMY_CART_ITEMS } from '../dummydata';

const CartItems = () => {
    return (
        <CartItemsContainer>
            {DUMMY_CART_ITEMS.map((item) => (
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
