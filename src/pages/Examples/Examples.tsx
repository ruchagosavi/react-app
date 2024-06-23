import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Examples.module.css';

const Examples: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = (path: string) => {
    navigate(path);
  };

  const examples = [
    { title: 'Template 1: Business Website', path: '/examples/template1' },
    { title: 'Template 2: Portfolio', path: '/examples/template2' },
    { title: 'Template 3: E-commerce', path: '/examples/template3' },
    { title: 'Template 4: Blog', path: '/examples/template4' },
    { title: 'Template 5: Landing Page', path: '/examples/template5' },
  ];

  return (
    <div className={styles.examples}>
      <h1>Examples</h1>
      <div className={styles.grid}>
        {examples.map((example, index) => (
          <div key={index} className={styles.card}>
            <h2>{example.title}</h2>
            <button onClick={() => handleDemoClick(example.path)} className={styles.demoButton}>
              Show Demo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;
