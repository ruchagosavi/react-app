import React from 'react';
import styles from './PricingPage1.module.css';

const PricingPage1: React.FC = () => {
  return (
    <div className={styles.pricingPageContainer}>
      <h1 className={styles.mainHeading}>Pricing plans for teams of all sizes</h1>
      <p className={styles.subHeading}>
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className={styles.toggleContainer}>
        <button className={`${styles.toggleButton} ${styles.active}`}>Monthly</button>
        <button className={styles.toggleButton}>Annually</button>
      </div>
      <div className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Hobby</h3>
          <p className={styles.planPrice}>$15/month</p>
          <p className={styles.planDescription}>The essentials to provide your best work for clients.</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Freelancer</h3>
          <p className={styles.planPrice}>$30/month</p>
          <p className={styles.planDescription}>The essentials to provide your best work for clients.</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
            <li>48-hour support response time</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Startup</h3>
          <p className={styles.planPrice}>$60/month</p>
          <p className={styles.planDescription}>A plan that scales with your rapidly growing business.</p>
          <ul className={styles.planFeatures}>
            <li>25 products</li>
            <li>Up to 10,000 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support response time</li>
            <li>Marketing automations</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Enterprise</h3>
          <p className={styles.planPrice}>$90/month</p>
          <p className={styles.planDescription}>Dedicated support and infrastructure for your company.</p>
          <ul className={styles.planFeatures}>
            <li>Unlimited products</li>
            <li>Unlimited subscribers</li>
            <li>Advanced analytics</li>
            <li>1-hour, dedicated support response time</li>
            <li>Marketing automations</li>
            <li>Custom reporting tools</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage1;
