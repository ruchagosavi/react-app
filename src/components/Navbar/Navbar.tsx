// src/components/Navbar/Navbar.tsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false); // State for profile menu
  const { authState, setAuthState } = useContext(AuthContext); // Use auth context to get login state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    setAuthState({ token: null, username: null });
    localStorage.removeItem('token');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
        </Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <span className={styles.closeIcon}>&times;</span> : <span>&#9776;</span>}
      </button>
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
        <li className={styles.closeBtn} onClick={toggleMobileMenu}>
          &times;
        </li>
        <li>
          <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/components" className={styles.navLink} onClick={toggleMobileMenu}>Components</Link>
        </li>
        <li>
          <Link to="/utilities" className={styles.navLink} onClick={toggleMobileMenu}>Utilities</Link>
        </li>
        <li>
          <Link to="/documentation" className={styles.navLink} onClick={toggleMobileMenu}>Documentation</Link>
        </li>
        <li>
          <Link to="/examples" className={styles.navLink} onClick={toggleMobileMenu}>Examples</Link>
        </li>
        <li className={styles.userActions}>
          {!authState.token ? (
            <Link to="/signup" className={styles.navLink} onClick={toggleMobileMenu}>Sign Up</Link>
          ) : (
            <div className={styles.profileMenuContainer}>
              <FaUserCircle className={styles.userIcon} onClick={toggleProfileMenu} />
              {isProfileMenuOpen && (
                <div className={styles.profileMenu}>
                  <Link to="/profile" className={styles.navLink} onClick={toggleProfileMenu}>Profile</Link>
                  <button className={styles.navLink} onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
