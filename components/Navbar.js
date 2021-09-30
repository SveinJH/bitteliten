import Link from 'next/link';
import styled from 'styled-components';
import { useCart } from '../context/useCart';
import { BsFillBagFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { IoPersonCircle } from 'react-icons/io5';

const Navbar = () => {
    const { toggleCart } = useCart();

    const isLoggedIn = true;

    return (
        <NavbarStyles>
            <ul>
                <NavItem className="logo">
                    <Link href="/">LOGO</Link>
                </NavItem>
                <NavItem>
                    <BsFillBagFill color="var(--primary)" size={24} />
                    <Link href="/produkter">Produkter</Link>
                </NavItem>
                <NavItem>
                    <MdContactPhone color="var(--primary)" size={24} />
                    <Link href="/kontakt">Kontakt</Link>
                </NavItem>
                {
                    <NavItem>
                        <IoPersonCircle color="var(--primary)" size={24} />
                        <Link href={isLoggedIn ? '/minside' : '/innlogging'}>
                            {isLoggedIn ? 'Torbjørn' : 'Logg inn'}
                        </Link>
                    </NavItem>
                }
                <Cart onClick={toggleCart}>
                    <FaShoppingCart color="var(--primary)" size={24} />
                </Cart>
            </ul>
        </NavbarStyles>
    );
};

const Cart = styled.li`
    cursor: pointer;
`;

const NavbarStyles = styled.nav`
    align-items: center;
    background-color: #fff;
    display: flex;
    height: 6rem;

    ul {
        align-items: center;
        display: flex;
        gap: 2rem;
        margin: 0;
        padding: 2rem 4rem;
        width: 100%;

        .logo {
            margin-right: auto;
        }
    }
`;

const NavItem = styled.li`
    align-items: center;
    border: 1px solid transparent;
    color: var(--black);
    display: flex;
    font-weight: 300;
    gap: 0.8rem;
    padding: 0.4rem 2rem;
    text-transform: uppercase;
    transition: all 0.25s;

    &:hover {
        border-bottom: 1px solid #000;
    }
`;

export default Navbar;
