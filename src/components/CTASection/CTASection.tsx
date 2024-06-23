import React from 'react';
import styles from './CTASection.module.css';
import { useNavigate } from 'react-router-dom';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = (demo: number) => {
    navigate(`/ctasection${demo}`);
  };

  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaBox}>
        <h2>CTA Section 1</h2>
        <button onClick={() => handleDemoClick(1)} className={styles.demoButton}>
          Show Demo
        </button>
      </div>
      <div className={styles.ctaBox}>
        <h2>CTA Section 2</h2>
        <button onClick={() => handleDemoClick(2)} className={styles.demoButton}>
          Show Demo
        </button>
      </div>
      <div className={styles.ctaBox}>
        <h2>CTA Section 3</h2>
        <button onClick={() => handleDemoClick(3)} className={styles.demoButton}>
          Show Demo
        </button>
      </div>
    </div>
  );
};

export default CTASection;
