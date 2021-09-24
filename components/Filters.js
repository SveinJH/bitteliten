import styled from 'styled-components';

const Filters = ({ brands, categories }) => {
    return (
        <FiltersContainer>
            {brands && categories && (
                <>
                    <CategoriesContainer>
                        <h4>Kategori</h4>
                        {categories.map((category) => (
                            <Entry key={category.id}>{category.name}</Entry>
                        ))}
                    </CategoriesContainer>
                    <BrandsContainer>
                        <h4>Varemerke</h4>
                        {brands.map((brand) => (
                            <Entry key={brand}>{brand}</Entry>
                        ))}
                    </BrandsContainer>
                </>
            )}
        </FiltersContainer>
    );
};

const BrandsContainer = styled.div`
    border-bottom: 1px solid #ddd;
`;

const CategoriesContainer = styled.div`
    border-bottom: 1px solid #ddd;
`;

const Entry = styled.div`
    font-size: 1.4rem;
    margin: 0.8rem 1rem;
`;

const FiltersContainer = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: var(--bsSmall);
    height: 400px;
    padding: 0 2rem;
    width: 100%;
`;

export default Filters;
