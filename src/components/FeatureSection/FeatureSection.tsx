import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FeatureSection.module.css';

const FeatureSection: React.FC = () => {
  return (
    <div className={styles.featureSectionContainer}>
      <h1 className={styles.mainHeading}>Feature Sections</h1>
      <div className={styles.featureGrid}>
        <div className={styles.featureBox}>
          <img src="https://via.placeholder.com/150" alt="Feature 1" className={styles.featureImage} />
          <h2 className={styles.featureTitle}>Feature Section 1</h2>
          <p className={styles.featureDescription}>Discover amazing features to enhance your experience.</p>
          <Link to="/featuresection1" className={styles.viewDemoButton}>View Demo</Link>
        </div>
        <div className={styles.featureBox}>
          <img src="https://via.placeholder.com/150" alt="Feature 2" className={styles.featureImage} />
          <h2 className={styles.featureTitle}>Feature Section 2</h2>
          <p className={styles.featureDescription}>Explore the capabilities of our feature-rich platform.</p>
          <Link to="/featuresection2" className={styles.viewDemoButton}>View Demo</Link>
        </div>
        <div className={styles.featureBox}>
          <img src="https://via.placeholder.com/150" alt="Feature 3" className={styles.featureImage} />
          <h2 className={styles.featureTitle}>Feature Section 3</h2>
          <p className={styles.featureDescription}>Utilize advanced features for better productivity.</p>
          <Link to="/featuresection3" className={styles.viewDemoButton}>View Demo</Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
