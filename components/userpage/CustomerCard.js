import { IoPersonCircle } from 'react-icons/io5';
import { Card, CardItem, CardTitle } from './styles';

const CustomerCard = () => {
    return (
        <Card>
            <CardTitle>
                <IoPersonCircle color="var(--primary)" size={26} />
                Kundeinformasjon
            </CardTitle>
            <CardItem>
                <div>Kundenummer</div>
                <div>10001</div>
            </CardItem>
            <CardItem>
                <div>Navn</div>
                <div>Torbjørn Gherman</div>
            </CardItem>
            <CardItem>
                <div>E-post</div>
                <div>torbjorn.gh@gmail.com</div>
            </CardItem>
            <CardItem>
                <div>Mobilnummer</div>
                <div>976 59 310</div>
            </CardItem>
        </Card>
    );
};

export default CustomerCard;
