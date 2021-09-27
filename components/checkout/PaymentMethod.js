import styled from 'styled-components';
import Image from 'next/image';

const PaymentMethod = ({ logo, tags, description, isSelected }) => {
    return (
        <Container>
            <div>
                <ImageContainer>
                    <Image src={logo} alt="logo" />
                </ImageContainer>
                <Tags>
                    {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </Tags>
            </div>
            <Description>{description}</Description>
            <div>
                <input type="radio" name="paymentMethod" />
            </div>
        </Container>
    );
};

const Container = styled.label`
    align-items: center;
    border-bottom: 2px solid #eee;
    display: flex;
    margin: 1rem 0;
    justify-content: space-between;
    padding: 1rem;
`;

const Description = styled.div`
    color: var(--gray);
    font-size: 1.2rem;
`;

const ImageContainer = styled.div`
    width: 80px;
`;

const Tag = styled.div`
    background-color: var(--primary);
    color: #fff;
    font-size: 1rem;
    margin-right: 1rem;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
`;

const Tags = styled.div`
    display: flex;
    margin: 0.4rem 0;
`;

export default PaymentMethod;
