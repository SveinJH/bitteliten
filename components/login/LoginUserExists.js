import { PrimaryButton } from '../styles/Buttons';
import { Input } from '../styles/Inputs';

const LoginUserExists = () => {
    return (
        <>
            <div>Skriv inn passordet ditt for å fullføre</div>
            <div>
                <label>
                    <div>Passord</div>
                    <Input />
                </label>
            </div>
            <PrimaryButton>Logg inn</PrimaryButton>
        </>
    );
};

export default LoginUserExists;
