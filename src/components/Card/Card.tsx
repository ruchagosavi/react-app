import React, { useState } from 'react';
import styles from './CardSection.module.css';

const CardSection: React.FC = () => {
  const initialState = Array(7).fill(false);
  const [showCss, setShowCss] = useState(initialState);

  const toggleCodeView = (index: number) => {
    const newShowCss = [...showCss];
    newShowCss[index] = !newShowCss[index];
    setShowCss(newShowCss);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard');
    });
  };

  const cards = [
    {
      type: 'imageCard',
      title: 'Enjoy $300',
      text: 'New customers open an eligible checking account with qualifying electronic deposits.',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=$300',
      link: '#'
    },
    {
      type: 'titleCard',
      title: 'Checking Accounts',
      text: 'Manage your checking accounts with ease and convenience.',
      link: '#'
    },
    {
      type: 'testimonialCard',
      title: 'Credit Cards',
      text: 'Choose the best credit card for your needs and enjoy rewards.',
      testimonial: 'This credit card has been amazing for my needs. - Customer',
      link: '#'
    },
    {
      type: 'imageCard',
      title: 'Home Loans',
      text: 'Get the right home loan for your dream home.',
      image: 'https://via.placeholder.com/150/00FF00/000000?text=Home+Loans',
      link: '#'
    },
    {
      type: 'titleCard',
      title: 'Savings & CDs',
      text: 'Grow your savings with our competitive rates.',
      link: '#'
    },
    {
      type: 'imageCard',
      title: 'Auto Loans',
      text: 'Find the perfect auto loan for your new car.',
      image: 'https://via.placeholder.com/150/00FFFF/000000?text=Auto+Loans',
      link: '#'
    },
    {
      type: 'testimonialCard',
      title: 'Personal Loans',
      text: 'Get a personal loan for your financial needs.',
      testimonial: 'The personal loan process was quick and easy. - Customer',
      link: '#'
    }
  ];

  const cardJsx = (card: any) => {
    if (card.type === 'imageCard') {
      return (
        <div className={styles.card}>
          <img src={card.image} alt={`${card.title} image`} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <a href={card.link} className={styles.cardLink}>Go somewhere</a>
          </div>
        </div>
      );
    } else if (card.type === 'titleCard') {
      return (
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <a href={card.link} className={styles.cardLink}>Go somewhere</a>
          </div>
        </div>
      );
    } else if (card.type === 'testimonialCard') {
      return (
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <blockquote className={styles.testimonial}>"{card.testimonial}"</blockquote>
            <a href={card.link} className={styles.cardLink}>Go somewhere</a>
          </div>
        </div>
      );
    }
  };

  const cardTsxString = (card: any) => {
    if (card.type === 'imageCard') {
      return `
<div className={styles.card}>
  <img src="${card.image}" alt="${card.title} image" className={styles.cardImage} />
  <div className={styles.cardContent}>
    <h3 className={styles.cardTitle}>${card.title}</h3>
    <p className={styles.cardText}>${card.text}</p>
    <a href="${card.link}" className={styles.cardLink}>Go somewhere</a>
  </div>
</div>
`;
    } else if (card.type === 'titleCard') {
      return `
<div className={styles.card}>
  <div className={styles.cardContent}>
    <h3 className={styles.cardTitle}>${card.title}</h3>
    <p className={styles.cardText}>${card.text}</p>
    <a href="${card.link}" className={styles.cardLink}>Go somewhere</a>
  </div>
</div>
`;
    } else if (card.type === 'testimonialCard') {
      return `
<div className={styles.card}>
  <div className={styles.cardContent}>
    <h3 className={styles.cardTitle}>${card.title}</h3>
    <p className={styles.cardText}>${card.text}</p>
    <blockquote className={styles.testimonial}>"${card.testimonial}"</blockquote>
    <a href="${card.link}" className={styles.cardLink}>Go somewhere</a>
  </div>
</div>
`;
    }
  };

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

.testimonial {
  font-style: italic;
  color: #555;
  margin: 1rem 0;
}
`;

  return (
    <div className={styles.cardSection}>
      <h2>Card Section</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            {cardJsx(card)}
            <div className={styles.toggleContainer}>
              <button className={`${styles.toggleButton} ${showCss[index] ? styles.active : ''}`} onClick={() => toggleCodeView(index)}>
                {showCss[index] ? 'CSS' : 'TSX'}
              </button>
            </div>
            {showCss[index] && (
              <div className={styles.codeBlock}>
                <pre>
                  <code>{showCss[index] ? cardCss : cardTsxString(card)}</code>
                </pre>
                <button onClick={() => copyToClipboard(showCss[index] ? cardCss : cardTsxString(card))}>Copy {showCss[index] ? 'CSS' : 'TSX'}</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
