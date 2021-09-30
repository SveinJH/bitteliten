import { PrimaryButton } from '../styles/Buttons';
import { Input } from '../styles/Inputs';

const LoginUserNotFound = () => {
    return (
        <>
            <div>Det ser ikke ut som du har handlet her tidligere!</div>
            <div>
                Fyll inn informasjonen under for å registrere deg og fortsette
            </div>
            <div>
                <label>
                    <div>Fullt navn</div>
                    <Input type="text" placeholder="Kari Nordmann" />
                </label>
            </div>
            <div>
                <label>
                    <div>Mobilnummer</div>
                    <Input type="text" />
                </label>
            </div>
            <div>
                <label>
                    <div>Adresse</div>
                    <Input type="text" />
                </label>
            </div>
            <div>
                <label>
                    <div>Postnummer</div>
                    <Input type="text" />
                </label>
            </div>
            <div>
                <label>
                    <div>Poststed</div>
                    <Input type="text" />
                </label>
            </div>
            <div>
                <label>
                    <div>E-post</div>
                    <Input type="email" />
                </label>
            </div>
            <div>
                <label>
                    <div>Passord</div>
                    <Input type="password" />
                </label>
            </div>
            <div>
                <label>
                    <div>Gjenta passord</div>
                    <Input type="password" />
                </label>
            </div>
            <PrimaryButton>Registrer</PrimaryButton>
        </>
    );
};

export default LoginUserNotFound;
