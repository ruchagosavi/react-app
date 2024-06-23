import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FeatureSection.module.css';

const FeatureSection: React.FC = () => {
  return (
    <div className={styles.featureSection}>
      <h1 className={styles.mainHeading}>Feature Section</h1>
      <div className={styles.featureGrid}>
        <div className={styles.featureBox}>
          <h2>Feature Demo 1</h2>
          <Link to="/featuresection1" className={styles.demoButton}>View Demo</Link>
        </div>
        <div className={styles.featureBox}>
          <h2>Feature Demo 2</h2>
          <Link to="/featuresection2" className={styles.demoButton}>View Demo</Link>
        </div>
        <div className={styles.featureBox}>
          <h2>Feature Demo 3</h2>
          <Link to="/featuresection3" className={styles.demoButton}>View Demo</Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
