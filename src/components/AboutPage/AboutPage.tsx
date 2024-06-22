import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <h1 className={styles.pageTitle}>About Us</h1>
      <p className={styles.pageDescription}>Explore the various aspects of our company, mission, and values through the following pages.</p>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img src="https://via.placeholder.com/300x200" alt="About Page 1" className={styles.boxImage} />
          <div className={styles.boxContent}>
            <h2>Company Overview</h2>
            <p>Learn more about our company's history, mission, and values.</p>
            <Link to="/aboutpage1" className={styles.viewDemoButton}>View Demo</Link>
          </div>
        </div>
        <div className={styles.box}>
          <img src="https://via.placeholder.com/300x200" alt="About Page 2" className={styles.boxImage} />
          <div className={styles.boxContent}>
            <h2>Our Team</h2>
            <p>Meet the dedicated team behind our company's success.</p>
            <Link to="/aboutpage2" className={styles.viewDemoButton}>View Demo</Link>
          </div>
        </div>
        <div className={styles.box}>
          <img src="https://via.placeholder.com/300x200" alt="About Page 3" className={styles.boxImage} />
          <div className={styles.boxContent}>
            <h2>Contact Us</h2>
            <p>Get in touch with us for any inquiries or support.</p>
            <Link to="/aboutpage3" className={styles.viewDemoButton}>View Demo</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
