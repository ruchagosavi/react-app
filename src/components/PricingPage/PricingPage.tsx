import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PricingPage.module.css';

const PricingPage: React.FC = () => {
  return (
    <div className={styles.pricingPageContainer}>
      <h1 className={styles.mainHeading}>Pricing Pages</h1>
      <div className={styles.pricingDemosContainer}>
        <div className={styles.pricingDemoBox}>
          <h2>Pricing Page 1</h2>
          <p>A simple and elegant pricing page for various plans.</p>
          <Link to="/pricingpage1">
            <button className={styles.viewDemoButton}>View Demo</button>
          </Link>
        </div>
        <div className={styles.pricingDemoBox}>
          <h2>Pricing Page 2</h2>
          <p>A modern and detailed pricing page with more features.</p>
          <Link to="/pricingpage2">
            <button className={styles.viewDemoButton}>View Demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
