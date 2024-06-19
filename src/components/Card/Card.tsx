import React, { useState } from 'react';
import styles from './CardSection.module.css';

const CardSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showCss, setShowCss] = useState(false);

  const toggleCodeView = (card: string) => {
    if (activeCard === card) {
      setShowCss(!showCss);
    } else {
      setActiveCard(card);
      setShowCss(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard');
    });
  };

  const cards = [
    {
      title: 'Enjoy $300',
      text: 'New customers open an eligible checking account with qualifying electronic deposits.',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=$300',
      link: '#'
    },
    {
      title: 'Checking Accounts',
      text: 'Manage your checking accounts with ease and convenience.',
      image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Checking',
      link: '#'
    },
    {
      title: 'Credit Cards',
      text: 'Choose the best credit card for your needs and enjoy rewards.',
      image: 'https://via.placeholder.com/150/FFFF00/000000?text=Credit+Cards',
      link: '#'
    },
    {
      title: 'Home Loans',
      text: 'Get the right home loan for your dream home.',
      image: 'https://via.placeholder.com/150/00FF00/000000?text=Home+Loans',
      link: '#'
    },
    {
      title: 'Savings & CDs',
      text: 'Grow your savings with our competitive rates.',
      image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Savings+%26+CDs',
      link: '#'
    },
    {
      title: 'Auto Loans',
      text: 'Find the perfect auto loan for your new car.',
      image: 'https://via.placeholder.com/150/00FFFF/000000?text=Auto+Loans',
      link: '#'
    },
    {
      title: 'Personal Loans',
      text: 'Get a personal loan for your financial needs.',
      image: 'https://via.placeholder.com/150/FFAA00/000000?text=Personal+Loans',
      link: '#'
    }
  ];

  const cardTsx = (title: string, text: string, image: string, link: string) => `
<div className={styles.card}>
  <img src="${image}" alt="${title} image" className={styles.cardImage} />
  <div className={styles.cardContent}>
    <h3 className={styles.cardTitle}>${title}</h3>
    <p className={styles.cardText}>${text}</p>
    <a href="${link}" className={styles.cardLink}>Go somewhere</a>
  </div>
</div>
`;

  const cardCss = `
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #fff;
}

.cardImage {
  width: 100%;
  height: auto;
}

.cardContent {
  padding: 1rem;
}

.cardTitle {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.cardText {
  margin-bottom: 1rem;
}

.cardLink {
  color: #d71e28; /* Wells Fargo red */
  text-decoration: none;
  font-weight: bold;
}

.cardLink:hover {
  text-decoration: underline;
}
`;

  return (
    <div className={styles.cardSection}>
      <h2>Card Section</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            <div className={styles.card}>
              <img src={card.image} alt={`Card ${index + 1} image`} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
                <a href={card.link} className={styles.cardLink}>Go somewhere</a>
              </div>
            </div>
            <div className={styles.toggleContainer}>
              <button className={`${styles.toggleButton} ${activeCard === `card${index}` && showCss ? styles.active : ''}`} onClick={() => toggleCodeView(`card${index}`)}>
                {activeCard === `card${index}` && showCss ? 'CSS' : 'TSX'}
              </button>
            </div>
            {activeCard === `card${index}` && (
              <div className={styles.codeBlock}>
                <pre>
                  <code>{showCss ? cardCss : cardTsx(card.title, card.text, card.image, card.link)}</code>
                </pre>
                <button onClick={() => copyToClipboard(showCss ? cardCss : cardTsx(card.title, card.text, card.image, card.link))}>Copy {showCss ? 'CSS' : 'TSX'}</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
