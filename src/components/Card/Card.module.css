import React, { useState } from 'react';
import styles from './CardSection.module.css';

const CardSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showCss, setShowCss] = useState<string | null>(null);

  const toggleCodeView = (card: string) => {
    setActiveCard(activeCard === card ? null : card);
  };

  const toggleCssView = (card: string) => {
    setShowCss(showCss === card ? null : card);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard');
    });
  };

  const card1Tsx = `
<div className={styles.card}>
  <h2>Card Title</h2>
  <p>Card content goes here. This is a sample card.</p>
  <button>Read More</button>
</div>
`;

  const card1Css = `
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  margin-bottom: 15px;
}

.card button {
  background-color: #d71e28; /* Wells Fargo red */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.card button:hover {
  background-color: #b01c24; /* Darker red */
}
`;

  const card2Tsx = `
<div className={styles.card}>
  <h2>Another Card</h2>
  <p>Different content for this card.</p>
  <button>Learn More</button>
</div>
`;

  const card2Css = `
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  margin-bottom: 15px;
}

.card button {
  background-color: #352b6b; /* Dark purple */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.card button:hover {
  background-color: #1f1940; /* Darker purple */
}
`;

  return (
    <div className={styles.cardSection}>
      {/* Card 1 */}
      <div className={styles.card}>
        <h2>Card Title</h2>
        <p>Card content goes here. This is a sample card.</p>
        <button>Read More</button>
      </div>
      <div className={styles.toggleContainer}>
        <button className={`${styles.toggleButton} ${activeCard === 'card1' ? styles.active : ''}`} onClick={() => toggleCodeView('card1')}>
          TSX
        </button>
        <button className={`${styles.toggleButton} ${showCss === 'card1' ? styles.active : ''}`} onClick={() => toggleCssView('card1')}>
          CSS
        </button>
      </div>
      {activeCard === 'card1' && (
        <div className={styles.codeBlock}>
          <pre>
            <code>{card1Tsx}</code>
          </pre>
          <button onClick={() => copyToClipboard(card1Tsx)}>Copy TSX</button>
        </div>
      )}
      {showCss === 'card1' && (
        <div className={styles.codeBlock}>
          <pre>
            <code>{card1Css}</code>
          </pre>
          <button onClick={() => copyToClipboard(card1Css)}>Copy CSS</button>
        </div>
      )}

      {/* Card 2 */}
      <div className={styles.card}>
        <h2>Another Card</h2>
        <p>Different content for this card.</p>
        <button>Learn More</button>
      </div>
      <div className={styles.toggleContainer}>
        <button className={`${styles.toggleButton} ${activeCard === 'card2' ? styles.active : ''}`} onClick={() => toggleCodeView('card2')}>
          TSX
        </button>
        <button className={`${styles.toggleButton} ${showCss === 'card2' ? styles.active : ''}`} onClick={() => toggleCssView('card2')}>
          CSS
        </button>
      </div>
      {activeCard === 'card2' && (
        <div className={styles.codeBlock}>
          <pre>
            <code>{card2Tsx}</code>
          </pre>
          <button onClick={() => copyToClipboard(card2Tsx)}>Copy TSX</button>
        </div>
      )}
      {showCss === 'card2' && (
        <div className={styles.codeBlock}>
          <pre>
            <code>{card2Css}</code>
          </pre>
          <button onClick={() => copyToClipboard(card2Css)}>Copy CSS</button>
        </div>
      )}
    </div>
  );
};

export default CardSection;
