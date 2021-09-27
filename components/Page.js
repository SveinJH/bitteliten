import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

const GlobalStyles = createGlobalStyle`
    html {
        --backgroundColor: #FDF2E9;
        --primary: #E67E22;
        --primaryDark: #bf6516;
        --maxWidth: 1440px;
        --black: #383838; 
        --lightBlack: #555;
        --gray: #666666;
        --bsSmall: 0 2px 10px rgba(0, 0, 0, 0.2);
        --bsLarge: 0 6px 30px rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }  

    body {
        background-color: #fff;
        font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
      list-style: none;
    }

    h1 {
      font-weight: normal;
    }

    h2 {
        font-weight: normal;
        font-size: 3.2rem;
        letter-spacing: 1px;
        margin-bottom: 4rem;
    }

    h2:first-letter {
        text-decoration: underline;
        font-size: 3.4rem;
    }

    h3 {
        color: #fff;
        font-size: 2.4rem;
        font-weight: 400;
        margin: 0 0 2rem;
    }

    h4 {
        font-weight: 500;
        font-size: 1.6rem;
        margin-bottom: 0;
    }

    h5 {
        border-bottom: 2px solid #eee;
        font-size: 2rem;
        font-weight: 400;
        margin: 0;
        padding: .5rem;
    }

    fieldset {
        border: none;
        padding: 0;
        margin: 0;
    }
`;

const Page = ({ children }) => {
    const router = useRouter();

    const isCheckout = router.pathname === '/kasse';

    return (
        <PageStyles>
            <GlobalStyles />
            {!isCheckout && <Navbar />}
            <InnerStyles>{children}</InnerStyles>
            {!isCheckout && <Footer />}
        </PageStyles>
    );
};

const InnerStyles = styled.div`
    margin: 0 auto;
    padding: 0;
    min-height: calc(100vh - 25rem - 6rem);
`;

const PageStyles = styled.div`
    display: grid;
    background-color: var(--backgroundColor);
`;

export default Page;
