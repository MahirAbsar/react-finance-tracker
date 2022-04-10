import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className={styles['navbar']}>
      <div className={styles['nav-center']}>
        <h2>myMoney</h2>
        <ul>
          <li>
            <Link to='/signup'>Signup</Link>{' '}
          </li>
          <li>
            <Link to='/login'>Login</Link>{' '}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
