import React, { useEffect, useState } from 'react';
import styles from './LoginPage2.module.css';

const LoginPage2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tsx' | 'css'>('tsx');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tsxCode = `
import React from 'react';
import './LoginPage2.module.css';

const LoginPage2: React.FC = () => {
  return (
    <div className="loginPage2Container">
      <h1>Login to Your Account</h1>
      <form className="loginForm">
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="loginButton">Login</button>
        <p className="forgotPassword"><a href="#">Forgot Password?</a></p>
      </form>
    </div>
  );
};

export default LoginPage2;
  `;

  const cssCode = `
.loginPage2Container {
  padding: 2rem;
  text-align: center;
}

.loginForm {
  max-width: 400px;
  margin: 0 auto;
  background-color: #e6e6fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.formGroup {
  margin-bottom: 1rem;
}

.formGroup label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.formGroup input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loginButton {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.loginButton:hover {
  background-color: #0056b3;
}

.forgotPassword {
  margin-top: 1rem;
}

.forgotPassword a {
  color: #007bff;
  text-decoration: none;
}

.forgotPassword a:hover {
  text-decoration: underline;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeToDisplay = activeTab === 'tsx' ? tsxCode : cssCode;

  return (
    <div className={styles.loginPage2Container}>
      <h1>Login to Your Account</h1>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.loginButton}>Login</button>
        <p className={styles.forgotPassword}><a href="#">Forgot Password?</a></p>
      </form>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${activeTab === 'tsx' ? styles.active : ''}`}
          onClick={() => setActiveTab('tsx')}
        >
          TSX
        </button>
        <button
          className={`${styles.toggleButton} ${activeTab === 'css' ? styles.active : ''}`}
          onClick={() => setActiveTab('css')}
        >
          CSS
        </button>
      </div>
      <div className={styles.codeContainer}>
        <button
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
          onClick={() => copyToClipboard(codeToDisplay)}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
        <pre className={styles.codeBox}>{codeToDisplay}</pre>
      </div>
    </div>
  );
};

export default LoginPage2;
