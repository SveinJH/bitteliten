import styled, { css } from 'styled-components';

const base = css`
    border: 1px solid #ccc;
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    padding: 0.8rem 1rem;
`;

const baseInput = css`
    border-radius: 10px;

    &:focus,
    &:active {
        outline: none;
    }
`;

const Input = styled.input`
    ${base}
    ${baseInput}
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const SortSelect = styled.select`
    ${base}
    color: #666;
`;

const Textarea = styled.textarea`
    ${base}
    ${baseInput}
    box-shadow: var(--bsSmall);
    resize: none;
`;

export { Input, SortSelect, Textarea };
