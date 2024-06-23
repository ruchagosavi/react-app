import React, { useState } from 'react';
import styles from './HeroSection1.module.css';

const HeroSection1: React.FC = () => {
  const [showTSX, setShowTSX] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');

  const handleToggle = () => {
    setShowTSX(!showTSX);
  };

  const handleCopy = () => {
    const text = showTSX ? tsxCode : cssCode;
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess('Code copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  const tsxCode = `
import React from 'react';
import styles from './HeroSection1.module.css';

const HeroSection1: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <nav className={styles.nav}>
        <a href="#">Product</a>
        <a href="#">Features</a>
        <a href="#">Marketplace</a>
        <a href="#">Company</a>
        <a href="#">Log in</a>
      </nav>
      <div className={styles.content}>
        <h1>Data to enrich your online business</h1>
        <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <button className={styles.primaryButton}>Get started</button>
        <button className={styles.secondaryButton}>Learn more</button>
      </div>
    </div>
  );
};

export default HeroSection1;
  `;

  const cssCode = `
.heroSection {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(120deg, #f3ec78, #af4261);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav a {
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover {
  color: #ddd;
}

.content {
  max-width: 600px;
  margin: 0 auto;
  color: #fff;
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
}

.content p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.primaryButton,
.secondaryButton {
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;
  font-size: 1rem;
}

.primaryButton {
  background-color: #4f46e5;
  color: #fff;
}

.primaryButton:hover {
  background-color: #4338ca;
}

.secondaryButton {
  background-color: #fff;
  color: #4f46e5;
  border: 1px solid #4f46e5;
}

.secondaryButton:hover {
  background-color: #f3f4f6;
}

.codeSection {
  margin-top: 40px;
  text-align: left;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.toggleButton {
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.2s;
}

.toggleButton:hover {
  background-color: #4338ca;
}

.toggleButton.active {
  background-color: #6366f1;
}

.codeContainer {
  position: relative;
}

.code {
  background-color: #1e1e1e;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  overflow: auto;
}

.copyButton {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.copyButton:hover {
  background-color: #4338ca;
}
  `;

  return (
    <div>
      <div className={styles.heroSectionDemo}>
        <nav className={styles.nav}>
          <a href="#">Product</a>
          <a href="#">Features</a>
          <a href="#">Marketplace</a>
          <a href="#">Company</a>
          <a href="#">Log in</a>
        </nav>
        <div className={styles.content}>
          <h1>Data to enrich your online business</h1>
          <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <button className={styles.primaryButton}>Get started</button>
          <button className={styles.secondaryButton}>Learn more</button>
        </div>
      </div>
      <div className={styles.codeSection}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${showTSX ? styles.active : ''}`}
            onClick={handleToggle}
          >
            TSX
          </button>
          <button
            className={`${styles.toggleButton} ${!showTSX ? styles.active : ''}`}
            onClick={handleToggle}
          >
            CSS
          </button>
        </div>
        <div className={styles.codeContainer}>
          <pre className={styles.code}>{showTSX ? tsxCode : cssCode}</pre>
          <button className={styles.copyButton} onClick={handleCopy}>Copy</button>
          {copySuccess && <div className={styles.copySuccess}>{copySuccess}</div>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
