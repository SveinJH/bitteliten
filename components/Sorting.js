import styled from 'styled-components';
import { BlackButton, LayoutButton } from './styles/Buttons';
import { SortSelect } from './styles/Inputs';

import { MdViewModule, MdViewStream } from 'react-icons/md';

const Sorting = () => {
    return (
        <SortingStyles>
            <Item>
                Filtre
                <BlackButton>Endre</BlackButton>
            </Item>
            <Item>
                Sorter
                <SortSelect>
                    <option>Mest populært</option>
                    <option>Pris Høy - Lav</option>
                </SortSelect>
            </Item>
            <Item></Item>
            <Item></Item>
        </SortingStyles>
    );
};

const Item = styled.div`
    display: grid;
    grid-template-rows: 50% 50%;
    align-items: center;
    padding: 2rem;
`;

const SortingStyles = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: var(--bsSmall);
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
`;

export default Sorting;
