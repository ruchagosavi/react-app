import React, { useState } from 'react';
import styles from './FeatureSection3.module.css';

const FeatureSection3: React.FC = () => {
  const [showTSX, setShowTSX] = useState(true);

  const handleToggle = () => {
    setShowTSX(!showTSX);
  };

  const tsxCode = `
import React from 'react';
import styles from './FeatureSection3.module.css';

const FeatureSection3: React.FC = () => {
  return (
    <div className={styles.featureSectionContainer}>
      <div className={styles.textContainer}>
        <h2>Everything you need</h2>
        <h1>All-in-one platform</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
        <ul className={styles.features}>
          <li>Invite team members</li>
          <li>Keyboard shortcuts</li>
          <li>Notifications</li>
          <li>Reporting</li>
          <li>List view</li>
          <li>Calendars</li>
          <li>Boards</li>
          <li>Mobile app</li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/800x400" alt="Example" />
      </div>
    </div>
  );
};

export default FeatureSection3;
`;

  const cssCode = `
.featureSectionContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9fafb;
}

.textContainer {
  max-width: 600px;
}

.textContainer h1 {
  font-size: 36px;
  margin-bottom: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.textContainer h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #4a5568;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.textContainer p {
  font-size: 16px;
  margin-bottom: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.features {
  list-style: none;
  padding: 0;
  columns: 2;
}

.features li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
  color: #2d3748;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.features li::before {
  content: '✔';
  margin-right: 10px;
  color: #3182ce;
}

.imageContainer {
  max-width: 800px;
  padding-left: 50px;
}

.imageContainer img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.codeSection {
  margin-top: 40px;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.toggleButton {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #e2e8f0;
  color: #1a202c;
}

.toggleButton.active {
  background-color: #3182ce;
  color: #fff;
}

.codeContainer {
  position: relative;
  background-color: #1a202c;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
  max-height: 300px; /* Adjust height for scrolling */
}

.copyButton {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #3182ce;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
`;

  return (
    <div>
      <div className={styles.featureSectionContainer}>
        <div className={styles.textContainer}>
          <h2>Everything you need</h2>
          <h1>All-in-one platform</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          <ul className={styles.features}>
            <li>Invite team members</li>
            <li>Keyboard shortcuts</li>
            <li>Notifications</li>
            <li>Reporting</li>
            <li>List view</li>
            <li>Calendars</li>
            <li>Boards</li>
            <li>Mobile app</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/800x400" alt="Example" />
        </div>
      </div>
      <div className={styles.codeSection}>
        <div className={styles.toggleButtons}>
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
          <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(showTSX ? tsxCode : cssCode)}>
            Copy
          </button>
          <pre>
            <code>{showTSX ? tsxCode : cssCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection3;
