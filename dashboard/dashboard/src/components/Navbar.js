import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; // Pastikan path ke logo Anda benar

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftNav}>
        <Link to="/media-followers" style={styles.navLink}>
          <img src={logo} alt="logo" style={styles.logo} />
          MediaFollowers
        </Link>
      </div>
      <div style={styles.rightNav}>
        <Link to="/profile" style={styles.navLink}>
          Profile
        </Link>
        <Link to="/grafik-penjualan" style={styles.navLink}>
          Grafik Penjualan
        </Link>
        <Link to="/settings" style={styles.navLink}>
          Settings
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  leftNav: {
    display: 'flex',
    alignItems: 'center',
  },
  rightNav: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
};

export default Navbar;
