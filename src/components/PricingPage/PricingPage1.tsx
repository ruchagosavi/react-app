import React, { useState } from 'react';
import styles from './PricingPage1.module.css';

const PricingPage1: React.FC = () => {
  const [showTSX, setShowTSX] = useState(true);

  const handleToggle = () => {
    setShowTSX(!showTSX);
  };

  const tsxCode = `
import React from 'react';
import styles from './PricingPage1.module.css';

const PricingPage1: React.FC = () => {
  return (
    <div className={styles.pricingPageContainer}>
      <h1 className={styles.mainHeading}>Pricing plans for teams of all sizes</h1>
      <p className={styles.subHeading}>
        Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Hobby</h2>
          <p className={styles.planPrice}>$15/month</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={\`\${styles.pricingCard} \${styles.pricingCardMain}\`}>
          <h2 className={styles.planName}>Startup</h2>
          <p className={styles.planPrice}>$60/month</p>
          <ul className={styles.planFeatures}>
            <li>25 products</li>
            <li>Up to 10,000 subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Freelancer</h2>
          <p className={styles.planPrice}>$30/month</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Enterprise</h2>
          <p className={styles.planPrice}>$90/month</p>
          <ul className={styles.planFeatures}>
            <li>Unlimited products</li>
            <li>Unlimited subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage1;
`;

  const cssCode = `
.pricingPageContainer {
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
}

.mainHeading {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.subHeading {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #666;
}

.pricingSection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.pricingCard {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.planName {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.planPrice {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #007bff;
}

.planFeatures {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.planFeatures li {
  margin-bottom: 0.5rem;
  color: #333;
}

.planButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.planButton:hover {
  background-color: #0056b3;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.toggleButton {
  background-color: #e0e0e0;
  border: none;
  color: #333;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  background-color: #282c34;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  overflow-x: auto;
  max-height: 300px; /* You can adjust the max height as needed */
}

.copyButton {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 5px;
}
`;

  const handleCopy = () => {
    const code = showTSX ? tsxCode : cssCode;
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard');
    });
  };

  return (
    <div className={styles.pricingPageContainer}>
      <h1 className={styles.mainHeading}>Pricing plans for teams of all sizes</h1>
      <p className={styles.subHeading}>
        Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Hobby</h2>
          <p className={styles.planPrice}>$15/month</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={`${styles.pricingCard} ${styles.pricingCardMain}`}>
          <h2 className={styles.planName}>Startup</h2>
          <p className={styles.planPrice}>$60/month</p>
          <ul className={styles.planFeatures}>
            <li>25 products</li>
            <li>Up to 10,000 subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Freelancer</h2>
          <p className={styles.planPrice}>$30/month</p>
          <ul className={styles.planFeatures}>
            <li>5 products</li>
            <li>Up to 1,000 subscribers</li>
            <li>Basic analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
        <div className={styles.pricingCard}>
          <h2 className={styles.planName}>Enterprise</h2>
          <p className={styles.planPrice}>$90/month</p>
          <ul className={styles.planFeatures}>
            <li>Unlimited products</li>
            <li>Unlimited subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <button className={styles.planButton}>Buy plan</button>
        </div>
      </div>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${showTSX ? styles.active : ''}`}
          onClick={handleToggle}
        >
          TSX
        </button>
        <button
          className={`${styles.toggleButton} ${!showTSX ? styles.active : ''}`}
          onClick={handleToggle}
        >
          CSS
        </button>
      </div>
      <div className={styles.codeContainer}>
        <pre>{showTSX ? tsxCode : cssCode}</pre>
        <button className={styles.copyButton} onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default PricingPage1;
