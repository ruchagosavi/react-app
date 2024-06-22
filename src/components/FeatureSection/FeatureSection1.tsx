import React, { useState } from 'react';
import styles from './FeatureSection1.module.css';

const FeatureSection1: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className={styles.featureSection}>
      <h1 className={styles.heading}>Feature Section 1</h1>
      <div className={styles.featureContent}>
        <p className={styles.description}>
          This is the first feature section with amazing features and functionalities.
        </p>
        <img src="https://via.placeholder.com/600x400" alt="Feature" className={styles.featureImage} />
        <button className={styles.toggleButton} onClick={toggleCode}>
          {showCode ? 'Hide Code' : 'View Code'}
        </button>
        {showCode && (
          <div className={styles.codeContainer}>
            <div className={styles.codeBox}>
              <pre>
                <code className={styles.code}>{sampleTsxCode}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const sampleTsxCode = `
import React from 'react';
import styles from './FeatureSection1.module.css';

const FeatureSection1 = () => (
  <div className={styles.featureSection}>
    <h1 className={styles.heading}>Feature Section 1</h1>
    <p className={styles.description}>
      This is the first feature section with amazing features and functionalities.
    </p>
    <img src="https://via.placeholder.com/600x400" alt="Feature" className={styles.featureImage} />
  </div>
);

export default FeatureSection1;
`;

export default FeatureSection1;
