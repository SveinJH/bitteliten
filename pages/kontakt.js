import styled from 'styled-components';
import ContactCard from '../components/ContactCard';

const ContactPage = () => {
    return (
        <ContactPageStyles>
            <h2 style={{ alignSelf: 'flex-start' }}>Kontakt</h2>
            <ContactCard />
        </ContactPageStyles>
    );
};

const ContactPageStyles = styled.div`
    padding: 2rem 4rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ContactPage;
