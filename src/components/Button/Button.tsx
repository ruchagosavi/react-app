// src/components/Button/Button.tsx

import React, { useState } from 'react';
import styles from './Button.module.css';

const buttonExamples = [
  {
    label: 'Sign On',
    className: 'buttonText',
    tsxCode: `<div className={styles.buttonText}>Sign On</div>`,
    cssCode: `
.buttonText {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 20px 20px;
}

.buttonText:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `,
  },
  {
    label: 'Sign On White',
    className: 'signOn1',
    tsxCode: `<div className={styles.signOn1}>Sign On</div>`,
    cssCode: `
.signOn1 {
  width: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  font-weight: 550;
}

.signOn1:hover {
  text-decoration: underline;
}
    `,
  },
  {
    label: 'Sign On Purple',
    className: 'signOn2',
    tsxCode: `<div className={styles.signOn2}>Sign On</div>`,
    cssCode: `
.signOn2 {
  width: 130px;
  background-color: #352b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 20px 20px;
  border: 1px solid;
}

.signOn2:hover {
  text-decoration: underline;
  background-color: #1f1940;
}
    `,
  },
  {
    label: 'Learn More',
    className: 'learnMore',
    tsxCode: `<div className={styles.learnMore}>Learn More</div>`,
    cssCode: `
.learnMore {
  width: 130px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  border: 1px solid;
}

.learnMore:hover {
  background-color: #000000;
  color: #ffffff;
}
    `,
  },
  {
    label: 'Learn More Red',
    className: 'learnMore2',
    tsxCode: `<div className={styles.learnMore2}>Learn More</div>`,
    cssCode: `
.learnMore2 {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 10px 10px;
  border: 1px solid;
  font-size: 17px;
  font-weight: 400;
}

.learnMore2:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `,
  },
  {
    label: 'Continue',
    className: 'buttonText',
    tsxCode: `<div className={styles.buttonText}>Continue</div>`,
    cssCode: `
.buttonText {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 20px 20px;
}

.buttonText:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `,
  },
  {
    label: 'Get Started',
    className: 'learnMore',
    tsxCode: `<div className={styles.learnMore}>Get Started</div>`,
    cssCode: `
.learnMore {
  width: 130px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  border: 1px solid;
}

.learnMore:hover {
  background-color: #000000;
  color: #ffffff;
}
    `,
  },
  {
    label: 'Cancel',
    className: 'learnMore',
    tsxCode: `<div className={styles.learnMore}>Cancel</div>`,
    cssCode: `
.learnMore {
  width: 130px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #000000;
  border-radius: 20px 20px;
  border: 1px solid;
}

.learnMore:hover {
  background-color: #000000;
  color: #ffffff;
}
    `,
  },
  {
    label: 'Search',
    className: 'learnMore2',
    tsxCode: `<div className={styles.learnMore2}>Search</div>`,
    cssCode: `
.learnMore2 {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 10px 10px;
  border: 1px solid;
  font-size: 17px;
  font-weight: 400;
}

.learnMore2:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `,
  },
  {
    label: 'Join Now',
    className: 'learnMore2',
    tsxCode: `<div className={styles.learnMore2}>Join Now</div>`,
    cssCode: `
.learnMore2 {
  width: 130px;
  background-color: #dd1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Wells Fargo Sans SemiBold', Arial, Helvetica, 'sans-serif';
  color: #ffffff;
  border-radius: 10px 10px;
  border: 1px solid;
  font-size: 17px;
  font-weight: 400;
}

.learnMore2:hover {
  text-decoration: underline;
  background-color: #b01c24;
}
    `,
  },
];

const Button: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showCSS, setShowCSS] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleCodeView = (index: number) => {
    setShowCSS((prevState) => ({ ...prevState, [index]: !prevState[index] }));
  };

  return (
    <div className={styles.buttonPage}>
      <h1>Button Components</h1>
      <div className={styles.buttonGrid}>
        {buttonExamples.map((button, index) => (
          <div key={index} className={styles.buttonSection}>
            <div className={styles.buttonExample}>
              <div className={styles[button.className]}>{button.label}</div>
            </div>
            <label className={styles.toggleSwitch}>
              <input
                type="checkbox"
                checked={showCSS[index] || false}
                onChange={() => toggleCodeView(index)}
              />
              <span className={styles.slider}></span>
            </label>
            <button
              className={styles.copyButton}
              onClick={() =>
                handleCopy(showCSS[index] ? button.cssCode : button.tsxCode)
              }
            >
              {copiedCode === (showCSS[index] ? button.cssCode : button.tsxCode)
                ? 'Copied!'
                : 'Copy Code'}
            </button>
            <pre className={styles.codeBlock}>
              {showCSS[index] ? button.cssCode : button.tsxCode}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Button;
