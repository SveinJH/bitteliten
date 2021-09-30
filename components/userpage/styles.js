import styled from 'styled-components';

const Card = styled.div`
    background-color: #fff;
    box-shadow: var(--bsSmall);
    color: var(--black);
    padding: 2rem;
`;

const CardItem = styled.div`
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    div:first-child {
        font-weight: 500;
    }
`;

const CardTitle = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.8rem;
    gap: 0.8rem;
    justify-content: center;
    margin-bottom: 1rem;
    text-align: center;
`;

export { Card, CardItem, CardTitle };
