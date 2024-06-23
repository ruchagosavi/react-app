import React, { useState } from 'react';
import styles from './CTASection1.module.css';

const CTASection1: React.FC = () => {
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
import styles from './CTASection1.module.css';

const CTASection1: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.textContainer}>
        <h1>Boost your productivity.</h1>
        <h2>Start using our app today.</h2>
        <p>
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Get started</button>
          <button className={styles.secondaryButton}>Learn more</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/400x400" alt="Productivity" />
      </div>
    </div>
  );
};

export default CTASection1;
`;

  const cssCode = `.ctaSection {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 50px;
}

.textContainer {
  max-width: 500px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.primaryButton {
  background-color: #7f56d9;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.secondaryButton {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.imageContainer {
  margin-left: 2rem;
}

.imageContainer img {
  border-radius: 10px;
}
`;

  return (
    <div>
      <div className={styles.ctaSection}>
        <div className={styles.textContainer}>
          <h1>Boost your productivity.</h1>
          <h2>Start using our app today.</h2>
          <p>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get started</button>
            <button className={styles.secondaryButton}>Learn more</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/400x400" alt="Productivity" />
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

export default CTASection1;
