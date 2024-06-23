import React from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection: React.FC = () => {
  return (
    <section className={styles.featureSection}>
      <h2>Our Features</h2>
      <div className={styles.features}>
        <div className={styles.feature}>
          <img src="https://via.placeholder.com/150" alt="Feature 1" />
          <h3>Feature One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://via.placeholder.com/150" alt="Feature 2" />
          <h3>Feature Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://via.placeholder.com/150" alt="Feature 3" />
          <h3>Feature Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
