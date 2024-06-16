// src/pages/HeroSection/HeroSection.tsx

import React, { useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const heroSections = [
    {
      id: 1,
      title: 'Standard Hero Section',
      component: (
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Our Website</h1>
            <p className={styles.subtitle}>Discover our amazing services and features.</p>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </section>
      ),
      code: `
<section className={styles.hero}>
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to Our Website</h1>
    <p className={styles.subtitle}>Discover our amazing services and features.</p>
    <button className={styles.ctaButton}>Get Started</button>
  </div>
</section>`,
    },
    {
      id: 2,
      title: 'Feature Highlight Hero Section',
      component: (
        <section className={styles.heroFeature}>
          <div className={styles.container}>
            <h1 className={styles.title}>Amazing Features</h1>
            <p className={styles.subtitle}>Explore the unique features we offer.</p>
            <button className={styles.ctaButton}>Learn More</button>
          </div>
        </section>
      ),
      code: `
<section className={styles.heroFeature}>
  <div className={styles.container}>
    <h1 className={styles.title}>Amazing Features</h1>
    <p className={styles.subtitle}>Explore the unique features we offer.</p>
    <button className={styles.ctaButton}>Learn More</button>
  </div>
</section>`,
    },
    {
      id: 3,
      title: 'Call to Action Card Hero Section',
      component: (
        <section className={styles.heroCTA}>
          <div className={styles.container}>
            <h1 className={styles.title}>Join Us Today</h1>
            <p className={styles.subtitle}>Sign up now and start enjoying our services.</p>
            <div className={styles.card}>
              <button className={styles.ctaButton}>Sign Up</button>
            </div>
          </div>
        </section>
      ),
      code: `
<section className={styles.heroCTA}>
  <div className={styles.container}>
    <h1 className={styles.title}>Join Us Today</h1>
    <p className={styles.subtitle}>Sign up now and start enjoying our services.</p>
    <div className={styles.card}>
      <button className={styles.ctaButton}>Sign Up</button>
    </div>
  </div>
</section>`,
    },
  ];

  return (
    <div className={styles.heroSectionsPage}>
      <h1>Hero Sections</h1>
      {heroSections.map((hero) => (
        <div key={hero.id} className={styles.heroSection}>
          <h2>{hero.title}</h2>
          {hero.component}
          <button
            className={styles.copyButton}
            onClick={() => handleCopy(hero.code)}
          >
            {copiedCode === hero.code ? 'Copied!' : 'Copy Code'}
          </button>
          <pre className={styles.codeBlock}>{hero.code}</pre>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
