import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const loginPages = [
    { name: 'Login Page 1', path: '/loginpage1' },
    { name: 'Login Page 2', path: '/loginpage2' },
    { name: 'Login Page 3', path: '/loginpage3' },
  ];

  return (
    <div className={styles.loginPageContainer}>
      <h1>Login Pages</h1>
      <div className={styles.pageBoxes}>
        {loginPages.map((page, index) => (
          <div key={index} className={styles.pageBox}>
            <h2>{page.name}</h2>
            <p>Explore the design and functionality of {page.name}.</p>
            <Link to={page.path} className={styles.demoButton}>
              View Demo
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
