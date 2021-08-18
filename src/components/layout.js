import * as React from 'react';
import { main } from './layout.module.css';

import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <main className={main}>
        <Header />
        <title>Buen Viaje Radio</title>

        {children}
      </main>
    </>
  );
};

export default Layout;
