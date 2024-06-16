// src/pages/Components/Components.tsx

import React from 'react';
import styles from './Components.module.css';

const Components: React.FC = () => {
  return (
    <div className={styles.componentsContainer}>
      <div className={styles.heroSection}>
        <h1>Huge collection of sections</h1>
        <h2>Infinite combinations</h2>
        <p>
          Discover a multitude of customizable options to craft pixel-perfect pages with ease.
        </p>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search for multiple components..." />
        </div>
      </div>
      <div className={styles.designBlocksSection}>
        <h3>Design Blocks</h3>
        <p>A selection of many page sections that fit perfectly in any combination</p>
        <div className={styles.blocksContainer}>
          <div className={styles.block}>
            <div className={styles.blockImage}>Image</div>
            <p>Headers</p>
          </div>
          <div className={styles.block}>
            <div className={styles.blockImage}>Image</div>
            <p>Footers</p>
          </div>
          <div className={styles.block}>
            <div className={styles.blockImage}>Image</div>
            <p>Stats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
