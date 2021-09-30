import styled, { css } from 'styled-components';

const base = css`
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    padding: 0.8rem 3.2rem;
    transition: all 0.15s;
`;

const BlackButton = styled.button`
    ${base}
    background-color: var(--black);
    border-radius: 0;
    font-size: 1.5rem;

    &:hover {
        background-color: var(--lightBlack);
    }
`;

const LayoutButton = styled.button`
    ${base}
    border-radius: 0;
    color: #000;
    padding: 1rem 1rem;
`;

const QuantityButton = styled.button`
    border: 2px solid #bbb;
    font-size: 1.8rem;
    height: 3rem;
    width: 3rem;
`;

const PrimaryButton = styled.button`
    ${base}
    background-color: var(--primary);
    border: 1px solid var(--primary);

    &:hover {
        background-color: var(--primaryDark);
    }
`;

const OutlinedButton = styled.button`
    ${base}
    background-color: transparent;
    border: 1px solid var(--black);
    color: var(--black);

    &:hover {
        background-color: var(--black);
        color: #fff;
    }
`;

const SuccessButton = styled.button`
    ${base}
    background-color: #75A636;
    border-radius: 0;
    padding: 0.8rem 5rem;

    &:hover {
        background-color: #638c2e;
    }
`;

const TextButton = styled.button`
    ${base}
    background-color: transparent;
    color: var(--gray);
    font-size: 1.6rem;
    margin: 1rem 0;
    padding: 0;
`;

export {
    BlackButton,
    LayoutButton,
    PrimaryButton,
    OutlinedButton,
    QuantityButton,
    SuccessButton,
    TextButton,
};
