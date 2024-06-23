import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Welcome to Our Website</h1>
        <a href="#" className={styles.ctaButton}>Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
