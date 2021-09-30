import styled from 'styled-components';

import { BiPackage } from 'react-icons/bi';
import { BsFillHouseFill } from 'react-icons/bs';
import CustomerCard from '../components/userpage/CustomerCard';
import { Card } from '../components/userpage/styles';
import AddressCard from '../components/userpage/AddressCard';
import OrdersCard from '../components/userpage/OrdersCard';

const UserPage = () => {
    return (
        <UserPageStyles>
            <h2>Min side</h2>
            <CardContainer>
                <CustomerCard />
                <AddressCard />
                <OrdersCard />
            </CardContainer>
        </UserPageStyles>
    );
};

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 42rem 42rem;
    grid-gap: 3rem;
`;

const UserPageStyles = styled.div`
    padding-bottom: 3rem;
`;

export default UserPage;
