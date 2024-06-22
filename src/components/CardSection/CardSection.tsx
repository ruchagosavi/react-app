import React, { useState } from 'react';
import styles from './CardSection.module.css';

const CardSection: React.FC = () => {
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'tsx' | 'css'>('tsx');
  const [copied, setCopied] = useState<boolean>(false);

  const cards = [
    {
      id: '1',
      title: 'Earn up to 60,000 bonus points',
      description: 'with the Choice Privileges® Mastercard® Credit Cards',
      buttonText: 'Learn more',
      imageUrl: '150 x 150',
    },
    {
      id: '2',
      title: 'Plan. Prepare. Enjoy home.',
      description: 'Discover tools and tips to help make buying or refinancing a little easier',
      buttonText: 'Get tips for homebuying',
      imageUrl: '150 x 150',
    },
    {
      id: '3',
      title: 'Save. Invest. Retire well.',
      description: 'Discover how to start saving to meet your retirement goals',
      buttonText: 'Get ready for retirement',
      imageUrl: '150 x 150',
    },
    {
      id: '4',
      title: 'Scams are on the rise. Protect yourself.',
      description: 'Recognize the tell-tale signs of scams so you won\'t be the next victim.',
      buttonText: 'See what to look for',
      imageUrl: '150 x 150',
    },
    {
      id: '5',
      title: 'Investment Strategy update',
      description: 'Weekly market insights and possible impacts on investors from Wells Fargo Investment Institute.',
      buttonText: 'Get the report',
      imageUrl: '150 x 150',
    },
    {
      id: '6',
      title: 'Get ready for retirement',
      description: 'Discover how to start saving to meet your retirement goals.',
      buttonText: 'Learn more',
      imageUrl: '150 x 150',
    },
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCode = (id: string) => {
    if (id !== activeCode) return null;

    const tsxCode = `<div className={styles.card}>
  <div className={styles.cardImage}>
    ${cards.find((card) => card.id === id)?.imageUrl}
  </div>
  <div className={styles.cardContent}>
    <h3>${cards.find((card) => card.id === id)?.title}</h3>
    <p>${cards.find((card) => card.id === id)?.description}</p>
    <button className={styles.cardButton}>
      ${cards.find((card) => card.id === id)?.buttonText}
    </button>
  </div>
</div>`;

    const cssCode = `.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.cardImage {
  background-color: #eee;
  border-radius: 5px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #aaa;
}

.cardContent {
  margin-top: 15px;
}

.cardButton {
  background-color: #dd1e25;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cardButton:hover {
  background-color: #b01c24;
}`;

    const codeToDisplay = activeTab === 'tsx' ? tsxCode : cssCode;

    return (
      <div className={styles.codeContainer}>
        <button
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
          onClick={() => copyToClipboard(codeToDisplay)}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre className={styles.code}>{codeToDisplay}</pre>
      </div>
    );
  };

  return (
    <div className={styles.cardSectionContainer}>
      <h2>Card Section</h2>

      <h3>Rewards Cards</h3>
      <div className={styles.cardsWrapper}>
        {cards.slice(0, 2).map((card) => (
          <div key={card.id} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardImage}>{card.imageUrl}</div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button className={styles.cardButton}>{card.buttonText}</button>
              </div>
            </div>
            <div className={styles.toggleContainer}>
              <div
                className={`${styles.toggleButton} ${activeCode === card.id && activeTab === 'tsx' ? styles.active : ''}`}
                onClick={() => {
                  setActiveCode(card.id);
                  setActiveTab('tsx');
                }}
              >
                TSX
              </div>
              <div
                className={`${styles.toggleButton} ${activeCode === card.id && activeTab === 'css' ? styles.active : ''}`}
                onClick={() => {
                  setActiveCode(card.id);
                  setActiveTab('css');
                }}
              >
                CSS
              </div>
            </div>
            {renderCode(card.id)}
          </div>
        ))}
      </div>

      <h3>Home Improvement Cards</h3>
      <div className={styles.cardsWrapper}>
        {cards.slice(2, 4).map((card) => (
          <div key={card.id} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardImage}>{card.imageUrl}</div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button className={styles.cardButton}>{card.buttonText}</button>
              </div>
            </div>
            <div className={styles.toggleContainer}>
              <div
                className={`${styles.toggleButton} ${activeCode === card.id && activeTab === 'tsx' ? styles.active : ''}`}
                onClick={() => {
                  setActiveCode(card.id);
                  setActiveTab('tsx');
                }}
              >
                TSX
              </div>
              <div
                className={`${styles.toggleButton} ${activeCode === card.id && activeTab === 'css' ? styles.active : ''}`}
                onClick={() => {
                  setActiveCode(card.id);
                  setActiveTab('css');
                }}
              >
                CSS
              </div>
            </div>
            {renderCode(card.id)}
          </div>
        ))}
      </div>

      <h3>Security and Investment Cards</h3>
      <div className={styles.cardsWrapper}>
        {cards.slice(4, 6).map((card) => (
          <div key={card.id} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardImage}>{card.imageUrl}</div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button className={styles.cardButton}>{card.buttonText}</button>
              </div>
            </div>
            <div className={styles.toggleContainer}>
              <div
                className={`${styles.toggleButton} ${activeCode === card.id && activeTab === 'tsx' ? styles.active : ''}`}
                onClick={() => {
                  setActiveCode(card.id);
                  setActiveTab('tsx');
                }}
              >
                TSX
              </div>
              <div
                className={`${styles.toggleButton} ${activeCode === card.id && activeTab === 'css' ? styles.active : ''}`}
                onClick={() => {
                  setActiveCode(card.id);
                  setActiveTab('css');
                }}
              >
                CSS
              </div>
            </div>
            {renderCode(card.id)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
