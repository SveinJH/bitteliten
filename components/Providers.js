import { CartStateProvider } from '../context/useCart';
import { FiltersStateProvider } from '../context/useFilters';

const Providers = ({ children }) => {
    return (
        <CartStateProvider>
            <FiltersStateProvider>{children}</FiltersStateProvider>
        </CartStateProvider>
    );
};

export default Providers;
