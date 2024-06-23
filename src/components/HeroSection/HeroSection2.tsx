import React, { useState } from 'react';
import styles from './HeroSection2.module.css';

const HeroSection2: React.FC = () => {
  const [showTsx, setShowTsx] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    const code = showTsx ? tsxCode : cssCode;
    navigator.clipboard.writeText(code);
    setCopySuccess('Code Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const tsxCode = `
import { useState } from 'react';
import { Switch } from '@headlessui/react';

function Example() {
  const [enabled, setEnabled] = useState(true);

  return (
    <form action="/notification-settings" method="post">
      <Switch checked={enabled} onChange={setEnabled} name="notifications">
        {/* ... */}
      </Switch>
      <button>Submit</button>
    </form>
  );
}
`;

  const cssCode = `
.heroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f7fafc;
}

.textContainer {
  max-width: 600px;
  text-align: center;
}

.badge {
  background-color: #e2e8f0;
  color: #4a5568;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 8px;
}

.version {
  color: #718096;
  font-size: 14px;
  margin-bottom: 16px;
}

h1 {
  font-size: 48px;
  color: #2d3748;
  margin-bottom: 24px;
}

p {
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 32px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.primaryButton {
  background-color: #5a67d8;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.secondaryButton {
  background-color: #edf2f7;
  color: #2d3748;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.codeContainer {
  background-color: #1a202c;
  padding: 16px;
  border-radius: 8px;
  position: relative;
  width: 100%;
  margin-top: 40px;
}

.codeHeader {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.toggleButton {
  background-color: #2d3748;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 4px;
}

.toggleButton.active {
  background-color: #5a67d8;
}

.codeBlock {
  background-color: #2d3748;
  color: #f7fafc;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  max-height: 300px;
}

.copyButton {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #5a67d8;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.copyButton:active {
  background-color: #4c51bf;
}
`;

  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <div className={styles.badge}>What's new</div>
        <div className={styles.version}>Just shipped v0.1.0</div>
        <h1>Supercharge your web applications</h1>
        <p>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Documentation</button>
          <button className={styles.secondaryButton}>View on GitHub</button>
        </div>
      </div>
      <div className={styles.codeContainer}>
        <div className={styles.codeHeader}>
          <button className={`${styles.toggleButton} ${showTsx ? styles.active : ''}`} onClick={() => setShowTsx(true)}>TSX</button>
          <button className={`${styles.toggleButton} ${!showTsx ? styles.active : ''}`} onClick={() => setShowTsx(false)}>CSS</button>
        </div>
        <pre className={styles.codeBlock}>
          <code>{showTsx ? tsxCode : cssCode}</code>
        </pre>
        <button className={styles.copyButton} onClick={handleCopy}>Copy</button>
        {copySuccess && <div className={styles.copySuccess}>{copySuccess}</div>}
      </div>
    </div>
  );
};

export default HeroSection2;
