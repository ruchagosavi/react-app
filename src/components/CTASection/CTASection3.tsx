import React, { useState } from 'react';
import styles from './CTASection3.module.css';

const CTASection3: React.FC = () => {
    const [showTSX, setShowTSX] = useState(true);
    const handleToggle = () => setShowTSX(!showTSX);

    const codeTSX = `
import React from 'react';
import styles from './CTASection3.module.css';

const CTASection3: React.FC = () => {
    return (
        <div className={styles.ctaSection}>
            <div className={styles.content}>
                <h2>Our people</h2>
                <p>
                    Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut
                    molestiae velit error quod. Excepturi quidem expedita molestias quas.
                </p>
                <div className={styles.imageContainer}>
                    <img src="https://via.placeholder.com/400x300" alt="Team" />
                    <img src="https://via.placeholder.com/400x300" alt="Work" />
                    <img src="https://via.placeholder.com/400x300" alt="Play" />
                </div>
                <button className={styles.primaryButton}>Join our team</button>
            </div>
        </div>
    );
};

export default CTASection3;
`;

    const codeCSS = `
.ctaSection {
    padding: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.content {
    text-align: center;
    color: #333;
}

h2 {
    font-size: 2rem;
    margin-bottom: 10px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.imageContainer {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

img {
    border-radius: 8px;
}

.primaryButton {
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.codeSection {
    width: 100%;
    text-align: center;
    margin-top: 20px;
}

.toggleButton {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.active {
    background-color: #3b82f6;
    color: white;
}

.codeBox {
    padding: 20px;
    border-radius: 5px;
    background-color: #1e1e1e;
    overflow: auto;
    white-space: pre-wrap;
    position: relative;
    color: white;
}

.copyButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
`;

    return (
        <div className={styles.ctaSection}>
            <div className={styles.content}>
                <h2>Our people</h2>
                <p>
                    Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut
                    molestiae velit error quod. Excepturi quidem expedita molestias quas.
                </p>
                <div className={styles.imageContainer}>
                    <img src="https://via.placeholder.com/400x300" alt="Team" />
                    <img src="https://via.placeholder.com/400x300" alt="Work" />
                    <img src="https://via.placeholder.com/400x300" alt="Play" />
                </div>
                <button className={styles.primaryButton}>Join our team</button>
            </div>
            <div className={styles.codeSection}>
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
                <pre className={styles.codeBox}>
                    <button
                        className={styles.copyButton}
                        onClick={() => navigator.clipboard.writeText(showTSX ? codeTSX : codeCSS)}
                    >
                        Copy
                    </button>
                    <code>
                        {showTSX ? codeTSX : codeCSS}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CTASection3;
