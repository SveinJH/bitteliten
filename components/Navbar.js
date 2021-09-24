import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarStyles>
            <ul>
                <li className="logo">
                    <Link href="/">LOGO</Link>
                </li>
                <li>
                    <Link href="/produkter">Produkter</Link>
                </li>
                <li>
                    <Link href="/bilder">Bilder</Link>
                </li>
                <li>
                    <Link href="/om">Om</Link>
                </li>
                <li>
                    <Link href="/kontakt">Kontakt</Link>
                </li>
                <li>Handlevogn</li>
            </ul>
        </NavbarStyles>
    );
};

const NavbarStyles = styled.nav`
    background-color: #fff;
    height: 6rem;
    display: flex;
    align-items: center;

    ul {
        margin: 0;
        display: flex;
        gap: 2rem;
        padding: 2rem;
        width: 100%;

        .logo {
            margin-right: auto;
        }
    }

    li {
        border: 1px solid transparent;
        padding: 0.4rem 2rem;
        transition: all 0.25s;

        &:hover {
            border-bottom: 1px solid #000;
        }
    }
`;

export default Navbar;
