import React from 'react';
import styles from './PricingPage2.module.css';

const PricingPage2: React.FC = () => {
  return (
    <div className={styles.pricingPageContainer}>
      <h1 className={styles.mainHeading}>Simple pricing, no commitment</h1>
      <p className={styles.subHeading}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.
      </p>
      <div className={styles.toggleContainer}>
        <button className={`${styles.toggleButton} ${styles.active}`}>Monthly</button>
        <button className={styles.toggleButton}>Annually</button>
      </div>
      <div className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Starter</h3>
          <p className={styles.planPrice}>$15 USD</p>
          <p className={styles.billingCycle}>Billed monthly</p>
          <ul className={styles.planFeatures}>
            <li>Basic invoicing</li>
            <li>Easy to use accounting</li>
            <li>Multi-accounts</li>
          </ul>
          <button className={styles.planButton}>Buy this plan</button>
        </div>
        <div className={`${styles.pricingCard} ${styles.pricingCardMain}`}>
          <h3 className={styles.planName}>Scale</h3>
          <p className={styles.planPrice}>$60 USD</p>
          <p className={styles.billingCycle}>Billed monthly</p>
          <ul className={styles.planFeatures}>
            <li>Advanced invoicing</li>
            <li>Easy to use accounting</li>
            <li>Multi-accounts</li>
            <li>Tax planning toolkit</li>
            <li>VAT & VATMOSS filing</li>
            <li>Free bank transfers</li>
          </ul>
          <button className={styles.planButton}>Buy this plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Growth</h3>
          <p className={styles.planPrice}>$30 USD</p>
          <p className={styles.billingCycle}>Billed monthly</p>
          <ul className={styles.planFeatures}>
            <li>Basic invoicing</li>
            <li>Easy to use accounting</li>
            <li>Multi-accounts</li>
            <li>Tax planning toolkit</li>
          </ul>
          <button className={styles.planButton}>Buy this plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage2;
