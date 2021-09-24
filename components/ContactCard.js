import Image from 'next/image';
import styled from 'styled-components';
import { BlackButton } from './styles/Buttons';
import { Input, Textarea } from './styles/Inputs';

import booksPlant from '../assets/img/booksPlant.jpg';

const ContactCard = () => {
    return (
        <CardContainer>
            <Content>
                <h3>Lurer du på noe? Ta kontakt</h3>
                <fieldset>
                    <form>
                        <label id="message">
                            Melding
                            <Textarea></Textarea>
                        </label>
                        <label id="name">
                            Fullt navn
                            <Input type="text" />
                        </label>
                        <label id="email">
                            E-post
                            <Input type="email" />
                        </label>
                        <BlackButton id="button">Send</BlackButton>
                    </form>
                </fieldset>
            </Content>
            <ImageContainer>
                <Overlay></Overlay>
                <Image src={booksPlant} alt="" />
            </ImageContainer>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: var(--bsLarge);
    display: grid;
    grid-template-columns: 66% 34%;
    justify-content: center;
    max-width: 1000px;
`;

const Content = styled.div`
    background-color: var(--primary);
    border-radius: 16px 0 0 16px;
    padding: 2rem 3rem;

    label {
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    form {
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: 1fr 1fr;
    }

    #button {
        border-radius: 5px;
        grid-column: span 2;
    }

    #message {
        grid-row: span 2;

        textarea {
            height: 100%;
        }
    }
`;

const ImageContainer = styled.div`
    height: 100%;
    position: relative;

    & > div {
        height: 100%;
    }

    img {
        border-radius: 0 16px 16px 0;
        object-fit: cover;
    }
`;

const Overlay = styled.div`
    background-color: #e67e2266;
    border-radius: 0 16px 16px 0;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
`;

export default ContactCard;
