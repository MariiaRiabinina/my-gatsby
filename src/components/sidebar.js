import * as React from 'react';
import { Link, navigate } from 'gatsby';
import { navLinks, navLinkItem, navLinkText } from './layout.module.css';

const Sidebar = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/products" className={navLinkText}>
            Products
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/countries" className={navLinkText}>
            Countries
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/tutorial/part-zero" className={navLinkText}>
            Part #0
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/tutorial/part-one" className={navLinkText}>
            Part #1
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/tutorial/part-two" className={navLinkText}>
            Part #2
          </Link>
        </li>
        <li className={navLinkItem}>
          <p className={navLinkText} onClick={() => navigate('/tutorial/part-three')}>
            Part #3
          </p>
        </li>
        <li className={navLinkItem}>
          <Link to="/tutorial/part-four" state={{ fromHomePage: true }} className={navLinkText}>
            Part #4
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
