import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.mainHeading}>Hero Section</h1>
      <div className={styles.heroGrid}>
        <div className={styles.heroBox}>
          <h2>Hero Demo 1</h2>
          <Link to="/herosection1">
            <button className={styles.demoButton}>View Demo</button>
          </Link>
        </div>
        <div className={styles.heroBox}>
          <h2>Hero Demo 2</h2>
          <Link to="/herosection2">
            <button className={styles.demoButton}>View Demo</button>
          </Link>
        </div>
        <div className={styles.heroBox}>
          <h2>Hero Demo 3</h2>
          <Link to="/herosection3">
            <button className={styles.demoButton}>View Demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
