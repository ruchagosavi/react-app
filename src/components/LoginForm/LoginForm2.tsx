import React, { useState } from 'react';
import styles from './LoginForm2.module.css';

const LoginForm2: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tsx');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const tsxCode2 = `import React, { useState } from 'react';
import styles from './LoginForm2.module.css';

const LoginForm2: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.loginForm}>
      <h2>Sign In</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <div className={styles.passwordWrapper}>
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          name="password"
        />
        <span onClick={togglePasswordVisibility}>
          {passwordVisible ? '🙈' : '👁️'}
        </span>
      </div>
      <label htmlFor="role">Role:</label>
      <select id="role" name="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button className={styles.signInButton}>Sign In</button>
      <button className={styles.enrollButton}>Enroll</button>
    </div>
  );
};

export default LoginForm2;`;

  const cssCode2 = `.loginForm {
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

  const handleCopy = () => {
    const codeToCopy = activeTab === 'tsx' ? tsxCode2 : cssCode2;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      alert('Code copied to clipboard');
    });
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.loginForm}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <div className={styles.passwordWrapper}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
          />
          <span onClick={togglePasswordVisibility}>
            {passwordVisible ? '🙈' : '👁️'}
          </span>
        </div>
        <label htmlFor="role">Role:</label>
        <select id="role" name="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className={styles.signInButton}>Sign In</button>
        <button className={styles.enrollButton}>Enroll</button>
      </div>

      <div className={styles.codeBox}>
        <div className={styles.toggleButtons}>
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
        <button className={styles.copyButton} onClick={handleCopy}>
          Copy
        </button>
        <pre>
          <code>{activeTab === 'tsx' ? tsxCode2 : cssCode2}</code>
        </pre>
      </div>
    </div>
  );
};

export default LoginForm2;
