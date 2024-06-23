import React, { useState } from 'react';
import styles from './CTASection2.module.css';

const CTASection2: React.FC = () => {
  const [showTSX, setShowTSX] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');

  const handleToggle = () => {
    setShowTSX(!showTSX);
  };

  const handleCopy = () => {
    const code = showTSX ? tsxCode : cssCode;
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess('Code copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  const tsxCode = `import React from 'react';
import styles from './CTASection2.module.css';

const CTASection2: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/800x400" alt="Support" />
      </div>
      <div className={styles.textContainer}>
        <h3>Award winning support</h3>
        <h1>We're here to help</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. 
          Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
        </p>
        <button className={styles.primaryButton}>Visit the help center</button>
      </div>
    </div>
  );
};

export default CTASection2;
`;

  const cssCode = `.ctaSection {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 50px;
}

.imageContainer {
  flex: 1;
}

.imageContainer img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.textContainer {
  flex: 1;
  max-width: 500px;
  margin-left: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  color: #a5b4fc;
}

p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.primaryButton {
  background-color: #7f56d9;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}
`;

  return (
    <div>
      <div className={styles.ctaSection}>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/800x400" alt="Support" />
        </div>
        <div className={styles.textContainer}>
          <h3>Award winning support</h3>
          <h1>We're here to help</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. 
            Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
          </p>
          <button className={styles.primaryButton}>Visit the help center</button>
        </div>
      </div>

      <div className={styles.codeSection}>
        <div className={styles.codeHeader}>
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
          <button className={styles.copyButton} onClick={handleCopy}>
            {copySuccess ? 'Code copied!' : 'Copy'}
          </button>
        </div>
        <pre className={styles.codeBlock}>
          <code>{showTSX ? tsxCode : cssCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default CTASection2;
