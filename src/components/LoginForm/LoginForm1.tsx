import React, { useState } from 'react';
import styles from './LoginForm1.module.css';

const LoginForm1: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [tsxCodeVisible, setTsxCodeVisible] = useState(true);
  const [copyMessage, setCopyMessage] = useState('');

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleCode = (codeType: 'tsx' | 'css') => {
    setTsxCodeVisible(codeType === 'tsx');
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopyMessage('Code copied!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  const tsxCode = `// TSX code for LoginForm 1...
import React, { useState } from 'react';
import styles from './LoginForm1.module.css';

const LoginForm1: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.loginForm}>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input type="email" />
      <label>Password:</label>
      <div className={styles.passwordWrapper}>
        <input type={passwordVisible ? "text" : "password"} />
        <span onClick={handleTogglePassword}>
          {passwordVisible ? '🙈' : '👁️'}
        </span>
      </div>
      <button className={styles.signInButton}>Sign In</button>
      <button className={styles.enrollButton}>Enroll</button>
    </div>
  );
};

export default LoginForm1;
`;

  const cssCode = `/* CSS code for LoginForm 1... */
.loginForm {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.loginForm h2 {
  text-align: center;
  margin-bottom: 20px;
}

.loginForm label {
  display: block;
  margin-bottom: 10px;
}

.loginForm input[type="email"],
.loginForm input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
}

.passwordWrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.passwordWrapper input[type="password"] {
  padding-right: 40px; /* Add padding to the right to accommodate the eye icon */
}

.passwordWrapper span {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.loginForm button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.signInButton {
  background-color: #d70018;
  color: #fff;
}

.signInButton:hover {
  background-color: #a50014;
}

.enrollButton {
  background-color: #fff;
  color: #d70018;
  border: 1px solid #d70018;
}

.enrollButton:hover {
  background-color: #ddd;
}

.codeBox {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  max-height: 300px;
  overflow-y: auto;
  position: relative;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.toggleButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
}

.toggleButton.active {
  background-color: #d70018;
  border-color: #d70018;
}

.copyButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  right: 10px;
}
`;

  return (
    <div>
      <div className={styles.formWrapper}>
        <div className={styles.loginForm}>
          <h2>Sign In</h2>
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <div className={styles.passwordWrapper}>
            <input type={passwordVisible ? "text" : "password"} />
            <span onClick={handleTogglePassword}>
              {passwordVisible ? '🙈' : '👁️'}
            </span>
          </div>
          <button className={styles.signInButton}>Sign In</button>
          <button className={styles.enrollButton}>Enroll</button>
        </div>
      </div>
      <div className={styles.codeBox}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${tsxCodeVisible ? styles.active : ''}`}
            onClick={() => handleToggleCode('tsx')}
          >
            TSX
          </button>
          <button
            className={`${styles.toggleButton} ${!tsxCodeVisible ? styles.active : ''}`}
            onClick={() => handleToggleCode('css')}
          >
            CSS
          </button>
        </div>
        <button className={styles.copyButton} onClick={() => handleCopyCode(tsxCodeVisible ? tsxCode : cssCode)}>
          Copy
        </button>
        <pre>{tsxCodeVisible ? tsxCode : cssCode}</pre>
        {copyMessage && <div className={styles.copyMessage}>{copyMessage}</div>}
      </div>
    </div>
  );
};

export default LoginForm1;
