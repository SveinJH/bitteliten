import { useState } from 'react';
import styled from 'styled-components';
import LoginUserExists from '../components/login/LoginUserExists';
import LoginUserNotFound from '../components/login/LoginUserNotFound';
import { PrimaryButton } from '../components/styles/Buttons';
import { Input } from '../components/styles/Inputs';

const LoginPage = () => {
    const [continuePressed, setContinuePressed] = useState(false);
    const [userExists, setUserExists] = useState();

    const findEmail = (e) => {
        e.preventDefault();
        setContinuePressed(true);

        const user = { name: 'Torbjørn' };
        if (!user) {
            setUserExists(true);
        } else {
            setUserExists(false);
        }
    };

    return (
        <LoginPageStyles>
            <h2>
                {continuePressed && !userExists ? 'Registrer deg' : 'Logg inn'}
            </h2>
            {!continuePressed && (
                <LoginCard onSubmit={findEmail}>
                    <div>Skriv inn e-postadressen din for å fortsette</div>
                    <div>
                        <label>
                            <div>E-post</div>
                            <Input type="email" required />
                        </label>
                    </div>
                    <PrimaryButton>Videre</PrimaryButton>
                </LoginCard>
            )}
            {continuePressed && userExists ? (
                <LoginCard>
                    <LoginUserExists />
                </LoginCard>
            ) : (
                continuePressed && (
                    <LoginCard>
                        <LoginUserNotFound />
                    </LoginCard>
                )
            )}
        </LoginPageStyles>
    );
};

const LoginCard = styled.form`
    background-color: #fff;
    box-shadow: var(--bsSmall);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    width: 42rem;

    label {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
        width: 80%;

        div {
            align-self: flex-start;
            color: var(--black);
            margin-bottom: 0.4rem;
        }
    }
`;

const LoginPageStyles = styled.div`
    padding-bottom: 4rem;
`;

export default LoginPage;
