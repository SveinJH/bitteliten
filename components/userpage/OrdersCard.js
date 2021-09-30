import { BiPackage } from 'react-icons/bi';
import styled from 'styled-components';
import { TextButton } from '../styles/Buttons';
import { Card, CardItem, CardTitle } from './styles';

const OrdersCard = () => {
    return (
        <Card>
            <CardTitle>
                <BiPackage color="var(--primary)" size={26} />
                Ordre
            </CardTitle>
            <CardItemHover>
                <div>Ordre #10234</div>
                <div>5 620,-</div>
            </CardItemHover>
            <CardItemHover>
                <div>Ordre #11634</div>
                <div>12 120,-</div>
            </CardItemHover>
            <CardItemHover>
                <div>Ordre #71234</div>
                <div>129,-</div>
            </CardItemHover>
            <div style={{ textAlign: 'center' }}>
                <TextButtonBlue>Full ordreoversikt</TextButtonBlue>
            </div>
        </Card>
    );
};

const CardItemHover = styled(CardItem)`
    cursor: pointer;
    transition: all 0.15s;

    &:hover {
        background-color: #eee;
    }
`;

const TextButtonBlue = styled(TextButton)`
    color: #0670a3;
    margin: 1rem 0 0;
`;

export default OrdersCard;
