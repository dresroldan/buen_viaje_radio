import * as React from 'react';
import { main, container } from './layout.module.css';
import { Container } from 'react-bootstrap';
import Footer from './footer';
import Header from './header';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main className={main}>
        <Container fluid className={container}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
