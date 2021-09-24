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

export {
    BlackButton,
    LayoutButton,
    PrimaryButton,
    OutlinedButton,
    QuantityButton,
};
