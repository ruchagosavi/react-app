import React, { useState } from 'react';
import styles from './FeatureSection2.module.css';

const FeatureSection2: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className={styles.featureSection}>
      <h1 className={styles.heading}>Feature Section 2</h1>
      <div className={styles.featureContent}>
        <p className={styles.description}>
          This is the second feature section with more advanced features and capabilities.
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
import styles from './FeatureSection2.module.css';

const FeatureSection2 = () => (
  <div className={styles.featureSection}>
    <h1 className={styles.heading}>Feature Section 2</h1>
    <p className={styles.description}>
      This is the second feature section with more advanced features and capabilities.
    </p>
    <img src="https://via.placeholder.com/600x400" alt="Feature" className={styles.featureImage} />
  </div>
);

export default FeatureSection2;
`;

export default FeatureSection2;
