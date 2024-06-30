import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Login Forms</h1>
      <div className={styles.formBoxes}>
        <div className={styles.formBox}>
          <img src="https://via.placeholder.com/300x200" alt="Login Form 1" className={styles.previewImage} />
          <h2>Login Form 1</h2>
          <Link to="/loginform1" className={styles.demoButton}>Show Demo</Link>
        </div>
        <div className={styles.formBox}>
          <img src="https://via.placeholder.com/300x200" alt="Login Form 2" className={styles.previewImage} />
          <h2>Login Form 2</h2>
          <Link to="/loginform2" className={styles.demoButton}>Show Demo</Link>
        </div>
        <div className={styles.formBox}>
          <img src="https://via.placeholder.com/300x200" alt="Login Form 3" className={styles.previewImage} />
          <h2>Login Form 3</h2>
          <Link to="/loginform3" className={styles.demoButton}>Show Demo</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
