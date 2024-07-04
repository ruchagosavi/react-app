import React from 'react';
import styles from './Documentation.module.css';

const Documentation: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UI Toolkit Documentation</h1>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Getting Started</h2>
        <p>Follow these steps to set up and use the UI Toolkit in your project.</p>
        
        <h3 className={styles.stepTitle}>Step 1: Install Dependencies</h3>
        <p>First, install the required dependencies:</p>
        <pre className={styles.code}>
          {`npm install react-router-dom
npm install @emotion/react @emotion/styled
npm install @mui/material @mui/icons-material
npm install axios
npm install react-copy-to-clipboard`}
        </pre>
        
        <h3 className={styles.stepTitle}>Step 2: Set Up Project Structure</h3>
        <p>Ensure your project structure is as follows:</p>
        <pre className={styles.code}>
          {`
my-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.css
│   │   ├── Documentation/
│   │   │   ├── Documentation.tsx
│   │   │   └── Documentation.module.css
│   ├── App.tsx
│   ├── index.tsx
│   └── App.css
          `}
        </pre>
        
        <h3 className={styles.stepTitle}>Step 3: Import and Use Components</h3>
        <p>To use a component, import it into your project:</p>
        <pre className={styles.code}>
          {`import Button from './components/Button/Button';`}
        </pre>
        <p>Then include it in your JSX:</p>
        <pre className={styles.code}>
          {`<Button>Click Me</Button>`}
        </pre>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Example Component: Button</h2>
        <p>Buttons are used to trigger actions in the UI.</p>
        
        <h3 className={styles.stepTitle}>Button Component</h3>
        <pre className={styles.code}>
          {`import React from 'react';
import styles from './Button.module.css';

const Button: React.FC = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};

export default Button;`}
        </pre>
        
        <h3 className={styles.stepTitle}>Button CSS</h3>
        <pre className={styles.code}>
          {`.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}`}
        </pre>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Responsive Design</h2>
        <p>All components are designed to be responsive and work across various devices.</p>
        <p>To ensure responsiveness, use the provided CSS classes and media queries.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Code Copy Functionality</h2>
        <p>Each component comes with a code copy functionality. Click the copy button to copy the code snippet to your clipboard.</p>
      </section>
    </div>
  );
};

export default Documentation;
