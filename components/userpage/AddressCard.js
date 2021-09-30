import { BsFillHouseFill } from 'react-icons/bs';
import { Card, CardItem, CardTitle } from './styles';

const AddressCard = () => {
    return (
        <Card>
            <CardTitle>
                <BsFillHouseFill color="var(--primary)" size={26} />
                Adresse
            </CardTitle>
            <CardItem>
                <div>Navn</div>
                <div>Torbjørn Gherman</div>
            </CardItem>
            <CardItem>
                <div>Adresse</div>
                <div>Nedre Holmegate 7D</div>
            </CardItem>
            <CardItem>
                <div>Postnummer</div>
                <div>4020</div>
            </CardItem>
            <CardItem>
                <div>Poststed</div>
                <div>Stavanger</div>
            </CardItem>
        </Card>
    );
};

export default AddressCard;
