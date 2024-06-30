import React, { useState } from 'react';
import styles from './LoginForm3.module.css';

const LoginForm3: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [codeType, setCodeType] = useState('tsx');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const tsxCode = `import React, { useState } from 'react';
import styles from './LoginForm3.module.css';

const LoginForm3: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.loginForm}>
        <h2>Sign In</h2>
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <div className={styles.passwordWrapper}>
          <input type={showPassword ? 'text' : 'password'} />
          <span onClick={togglePasswordVisibility}>👁️</span>
        </div>
        <label>Role:</label>
        <select>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" />
          <label>Subscribe to newsletter</label>
        </div>
        <button className={styles.signInButton}>Sign In</button>
        <button className={styles.enrollButton}>Enroll</button>
      </div>
    </div>
  );
};

export default LoginForm3;`;

  const cssCode = `/* CSS code for LoginForm3.module.css */
.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.loginForm {
  max-width: 500px;
  min-width: 300px;
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
.loginForm input[type="password"],
.loginForm select {
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
  padding-right: 40px;
}

.passwordWrapper span {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.checkboxWrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.checkboxWrapper input[type="checkbox"] {
  margin-right: 10px;
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
}`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
  };

  return (
    <div>
      <div className={styles.formWrapper}>
        <div className={styles.loginForm}>
          <h2>Sign In</h2>
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <div className={styles.passwordWrapper}>
            <input type={showPassword ? 'text' : 'password'} />
            <span onClick={togglePasswordVisibility}>👁️</span>
          </div>
          <label>Role:</label>
          <select>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <label>Subscribe to newsletter</label>
          </div>
          <button className={styles.signInButton}>Sign In</button>
          <button className={styles.enrollButton}>Enroll</button>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.toggleButtons}>
            <span
              className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
              onClick={() => setCodeType('tsx')}
            >
              TSX
            </span>
            <span
              className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
              onClick={() => setCodeType('css')}
            >
              CSS
            </span>
          </div>
          <pre>{codeType === 'tsx' ? tsxCode : cssCode}</pre>
          <button className={styles.copyButton} onClick={() => handleCopy(codeType === 'tsx' ? tsxCode : cssCode)}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm3;
