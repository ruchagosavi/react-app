import React from 'react';
import styles from './PricingSection.module.css';

const PricingSection: React.FC = () => {
  return (
    <section className={styles.pricingSection}>
      <h2>Pricing Plans</h2>
      <div className={styles.plans}>
        <div className={styles.plan}>
          <h3>Basic</h3>
          <p className={styles.price}>$19.99/mo</p>
          <ul>
            <li>Feature One</li>
            <li>Feature Two</li>
            <li>Feature Three</li>
          </ul>
          <a href="#" className={styles.ctaButton}>Get Started</a>
        </div>
        <div className={styles.plan}>
          <h3>Pro</h3>
          <p className={styles.price}>$49.99/mo</p>
          <ul>
            <li>Feature One</li>
            <li>Feature Two</li>
            <li>Feature Three</li>
          </ul>
          <a href="#" className={styles.ctaButton}>Get Started</a>
        </div>
        <div className={styles.plan}>
          <h3>Enterprise</h3>
          <p className={styles.price}>$99.99/mo</p>
          <ul>
            <li>Feature One</li>
            <li>Feature Two</li>
            <li>Feature Three</li>
          </ul>
          <a href="#" className={styles.ctaButton}>Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
