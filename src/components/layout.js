import * as React from 'react';
import { heading, container, content } from './layout.module.css';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Header pageTitle={pageTitle} />
      <div className={content}>
        <Sidebar />
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
