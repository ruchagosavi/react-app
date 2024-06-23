import React from 'react';
import styles from './Examples.module.css';
import { useNavigate } from 'react-router-dom';

const Example = ({ title, description, demoLink, downloadLink, imageUrl }) => (
  <div className={styles.exampleBox}>
    <img src={imageUrl} alt={`${title} screenshot`} className={styles.image} />
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <div className={styles.buttons}>
      <button onClick={() => window.location.href = demoLink} className={styles.demoButton}>Show Demo</button>
      <button onClick={() => window.location.href = downloadLink} className={styles.downloadButton}>Download</button>
    </div>
  </div>
);

const Examples = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Template 1',
      description: 'A modern and responsive template for businesses.',
      demoLink: '/examples/template1',
      downloadLink: '/downloads/template1.zip',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Template 2',
      description: 'A clean and minimalist template for portfolios.',
      demoLink: '/examples/template2',
      downloadLink: '/downloads/template2.zip',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Template 3',
      description: 'A vibrant and dynamic template for startups.',
      demoLink: '/examples/template3',
      downloadLink: '/downloads/template3.zip',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Template 4',
      description: 'A professional template for corporate websites.',
      demoLink: '/examples/template4',
      downloadLink: '/downloads/template4.zip',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Template 5',
      description: 'An elegant template for blogs and magazines.',
      demoLink: '/examples/template5',
      downloadLink: '/downloads/template5.zip',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <div className={styles.examplesPage}>
      <h1 className={styles.heading}>Examples</h1>
      <div className={styles.examplesGrid}>
        {examples.map((example, index) => (
          <Example
            key={index}
            title={example.title}
            description={example.description}
            demoLink={example.demoLink}
            downloadLink={example.downloadLink}
            imageUrl={example.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Examples;
