import * as React from 'react';
import { main } from './layout.module.css';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <main className={main}>
        <Header />
        <title>Buen Viaje Radio</title>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
