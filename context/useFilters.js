import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const FiltersStateProvider = ({ children }) => {
    const [selectedBrands, setSelectedBrands] = useState([]);

    return (
        <LocalStateProvider value={{ selectedBrands, setSelectedBrands }}>
            {children}
        </LocalStateProvider>
    );
};

const useFilters = () => {
    const all = useContext(LocalStateContext);
    return all;
};

export { FiltersStateProvider, useFilters };
