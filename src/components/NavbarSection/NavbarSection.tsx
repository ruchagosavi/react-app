import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import styles from './NavbarSection.module.css';

const NavbarSection: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState<string | null>(null);
  const [showCss, setShowCss] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
  };

  const toggleCodeView = (navbar: string) => {
    if (activeNavbar === navbar) {
      setShowCss(!showCss);
    } else {
      setActiveNavbar(navbar);
      setShowCss(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard');
    });
  };

  const navbar1Tsx = `
<nav className={styles.navbar}>
  <div className={styles.logo}>
    <Link to="/">
      <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
    </Link>
  </div>
  <button className={styles.hamburger} onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
  <ul className={\`\${styles.navLinks} \${isMobileMenuOpen ? styles.open : ''}\`}>
    <li className={styles.closeBtn} onClick={toggleMobileMenu}>
      &times;
    </li>
    <li>
      <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
    </li>
    <li>
      <Link to="/services" className={styles.navLink} onClick={toggleMobileMenu}>Services</Link>
    </li>
    <li>
      <Link to="/about" className={styles.navLink} onClick={toggleMobileMenu}>About</Link>
    </li>
    <li>
      <Link to="/contact" className={styles.navLink} onClick={toggleMobileMenu}>Contact</Link>
    </li>
    <li className={styles.userActions}>
      <FaUserCircle className={styles.userIcon} onClick={toggleProfileMenu} />
      {isProfileMenuOpen && (
        <div className={styles.profileMenu}>
          <Link to="/profile" className={styles.navLink} onClick={toggleProfileMenu}>Profile</Link>
          <button className={styles.navLink} onClick={handleLogout}>Logout</button>
        </div>
      )}
    </li>
  </ul>
</nav>
`;

  const navbar1Css = `
.navbarSection {
  margin-bottom: 2rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #d71e28; /* Wells Fargo red */
  border-bottom: 4px solid #ffcd41; /* Yellow border */
  color: #fff;
  border-top-left-radius: 10px; /* Rounded top left corner */
  border-top-right-radius: 10px; /* Rounded top right corner */
  position: relative;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
}

.navLinks {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navLink {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.navLink:hover {
  color: #ffcd41; /* Yellow on hover */
}

.closeBtn {
  display: none;
}

.profileMenuContainer {
  position: relative;
}

.userIcon {
  font-size: 2rem;
  cursor: pointer;
}

.profileMenu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.profileMenu .navLink {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.profileMenu .navLink:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .navLinks {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: inherit;
    flex-direction: column;
    align-items: center;
    gap: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .navLinks.open {
    transform: translateX(0);
  }

  .navLink {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    font-size: 1.2rem; /* Responsive font size */
  }

  .closeBtn {
    display: block;
    font-size: 2rem;
    color: #ffcd41; /* Yellow color */
    cursor: pointer;
    align-self: flex-end;
    padding: 1rem;
  }

  .logo a {
    font-size: 1.2rem;
  }
}
`;

  const navbar2Tsx = `
<nav className={styles.navbar}>
  <div className={styles.logo}>
    <Link to="/">
      <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
    </Link>
  </div>
  <button className={styles.hamburger} onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
  <ul className={\`\${styles.navLinks} \${isMobileMenuOpen ? styles.open : ''}\`}>
    <li className={styles.closeBtn} onClick={toggleMobileMenu}>
      &times;
    </li>
    <li>
      <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
    </li>
    <li>
      <Link to="/features" className={styles.navLink} onClick={toggleMobileMenu}>Features</Link>
    </li>
    <li>
      <Link to="/pricing" className={styles.navLink} onClick={toggleMobileMenu}>Pricing</Link>
    </li>
    <li>
      <Link to="/faq" className={styles.navLink} onClick={toggleMobileMenu}>FAQ</Link>
    </li>
  </ul>
</nav>
`;

  const navbar2Css = `
.navbarSection {
  margin-bottom: 2rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #d71e28; /* Wells Fargo red */
  border-bottom: 4px solid #ffcd41; /* Yellow border */
  color: #fff;
  border-top-left-radius: 10px; /* Rounded top left corner */
  border-top-right-radius: 10px; /* Rounded top right corner */
  position: relative;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
}

.navLinks {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navLink {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.navLink:hover {
  color: #ffcd41; /* Yellow on hover */
}

.closeBtn {
  display: none;
}

.profileMenuContainer {
  position: relative;
}

.userIcon {
  font-size: 2rem;
  cursor: pointer;
}

.profileMenu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.profileMenu .navLink {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.profileMenu .navLink:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .navLinks {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: inherit;
    flex-direction: column;
    align-items: center;
    gap: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .navLinks.open {
    transform: translateX(0);
  }

  .navLink {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    font-size: 1.2rem; /* Responsive font size */
  }

  .closeBtn {
    display: block;
    font-size: 2rem;
    color: #ffcd41; /* Yellow color */
    cursor: pointer;
    align-self: flex-end;
    padding: 1rem;
  }

  .logo a {
    font-size: 1.2rem;
  }
}
`;

  return (
    <div className={styles.navbarSection}>
      {/* Navbar 1 */}
      <h2>Navbar 1</h2>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
          </Link>
        </div>
        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          <li className={styles.closeBtn} onClick={toggleMobileMenu}>
            &times;
          </li>
          <li>
            <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={styles.navLink} onClick={toggleMobileMenu}>Services</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink} onClick={toggleMobileMenu}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink} onClick={toggleMobileMenu}>Contact</Link>
          </li>
          <li className={styles.userActions}>
            <FaUserCircle className={styles.userIcon} onClick={toggleProfileMenu} />
            {isProfileMenuOpen && (
              <div className={styles.profileMenu}>
                <Link to="/profile" className={styles.navLink} onClick={toggleProfileMenu}>Profile</Link>
                <button className={styles.navLink} onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.toggleContainer}>
        <button className={`${styles.toggleButton} ${activeNavbar === 'navbar1' && showCss ? styles.active : ''}`} onClick={() => toggleCodeView('navbar1')}>
          {activeNavbar === 'navbar1' && showCss ? 'CSS' : 'TSX'}
        </button>
      </div>
      {activeNavbar === 'navbar1' && (
        <div className={styles.codeBlock}>
          <pre>
            <code>{showCss ? navbar1Css : navbar1Tsx}</code>
          </pre>
          <button onClick={() => copyToClipboard(showCss ? navbar1Css : navbar1Tsx)}>Copy {showCss ? 'CSS' : 'TSX'}</button>
        </div>
      )}

      {/* Spacing between navbars */}
      <div style={{ marginBottom: '2rem' }}></div>

      {/* Navbar 2 */}
      <h2>Navbar 2</h2>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
          </Link>
        </div>
        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          <li className={styles.closeBtn} onClick={toggleMobileMenu}>
            &times;
          </li>
          <li>
            <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="/features" className={styles.navLink} onClick={toggleMobileMenu}>Features</Link>
          </li>
          <li>
            <Link to="/pricing" className={styles.navLink} onClick={toggleMobileMenu}>Pricing</Link>
          </li>
          <li>
            <Link to="/faq" className={styles.navLink} onClick={toggleMobileMenu}>FAQ</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.toggleContainer}>
        <button className={`${styles.toggleButton} ${activeNavbar === 'navbar2' && showCss ? styles.active : ''}`} onClick={() => toggleCodeView('navbar2')}>
          {activeNavbar === 'navbar2' && showCss ? 'CSS' : 'TSX'}
        </button>
      </div>
      {activeNavbar === 'navbar2' && (
        <div className={styles.codeBlock}>
          <pre>
            <code>{showCss ? navbar2Css : navbar2Tsx}</code>
          </pre>
          <button onClick={() => copyToClipboard(showCss ? navbar2Css : navbar2Tsx)}>Copy {showCss ? 'CSS' : 'TSX'}</button>
        </div>
      )}
    </div>
  );
};

export default NavbarSection;
