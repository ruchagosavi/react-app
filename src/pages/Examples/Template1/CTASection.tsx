import React from 'react';
import styles from './CTASection.module.css';

const CTASection: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Join Us Today!</h2>
        <p>Sign up now and get access to exclusive content and features.</p>
        <a href="#" className={styles.ctaButton}>Sign Up</a>
      </div>
    </section>
  );
};

export default CTASection;
