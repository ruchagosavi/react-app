import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [codeType, setCodeType] = useState('tsx');

  const tsxCode = `import React, { useState } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        <div className={styles.stepContainer}>
          <div className={\`\${styles.step} \${activeStep >= 1 ? styles.active : ''}\`}>Step 1</div>
          <div className={styles.description}>Job details</div>
        </div>
        <div className={styles.stepContainer}>
          <div className={\`\${styles.step} \${activeStep >= 2 ? styles.active : ''}\`}>Step 2</div>
          <div className={styles.description}>Application form</div>
        </div>
        <div className={styles.stepContainer}>
          <div className={\`\${styles.step} \${activeStep >= 3 ? styles.active : ''}\`}>Step 3</div>
          <div className={styles.description}>Preview</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;`;

  const cssCode = `.progressContainer {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.progressBar {
  display: flex;
  justify-content: space-between;
  width: 80%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  background-color: #f9f9f9;
}

.stepContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
}

.step {
  font-size: 14px;
  padding: 10px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.step.active {
  border-color: #3b82f6;
  color: white;
  background-color: #3b82f6;
}

.description {
  font-size: 12px;
  color: #555;
}`;

  const newProgressBarTSXCode = `import React, { useState } from 'react';
import styles from './ProgressBar.module.css';

const NewProgressBar: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className={styles.newProgressContainer}>
      <div className={styles.newProgressBar}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={\`\${styles.newStep} \${activeStep > index ? styles.active : ''}\`}
            onClick={() => setActiveStep(index + 1)}
          >
            {activeStep > index ? '✓' : index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProgressBar;`;

  const newProgressBarCSSCode = `.newProgressContainer {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.newProgressBar {
  display: flex;
  justify-content: space-between;
  width: 80%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  background-color: #f9f9f9;
}

.newStep {
  width: 30px;
  height: 30px;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  transition: all 0.3s ease-in-out;
}

.newStep.active {
  border-color: #3b82f6;
  color: white;
  background-color: #3b82f6;
}`;

  const thirdProgressBarTSXCode = `import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';

const ThirdProgressBar: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => Math.min(prevStep + 1, 4));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.thirdProgressContainer}>
      <div className={styles.thirdProgressBar}>
        <div className={styles.thirdProgress} style={{ width: \`\${activeStep * 25}%\` }}></div>
      </div>
      <div className={styles.thirdSteps}>
        <div className={styles.thirdStep}>Copying files</div>
        <div className={styles.thirdStep}>Migrating database</div>
        <div className={styles.thirdStep}>Compiling assets</div>
        <div className={styles.thirdStep}>Deployed</div>
      </div>
    </div>
  );
};

export default ThirdProgressBar;`;

  const thirdProgressBarCSSCode = `.thirdProgressContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.thirdProgressBar {
  width: 80%;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
}

.thirdProgress {
  height: 100%;
  background-color: #3b82f6;
  width: 0;
  border-radius: 5px;
  position: absolute;
  transition: width 1s ease-in-out;
}

.thirdSteps {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.thirdStep {
  font-size: 12px;
  color: #555;
}`;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  };

  return (
    <div>
      <h2 className={styles.heading}>Progress Bar 1</h2>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div className={`${styles.stepContainer} ${activeStep >= 1 ? styles.active : ''}`}>
            <div className={`${styles.step} ${activeStep >= 1 ? styles.active : ''}`}>Step 1</div>
            <div className={styles.description}>Job details</div>
          </div>
          <div className={`${styles.stepContainer} ${activeStep >= 2 ? styles.active : ''}`}>
            <div className={`${styles.step} ${activeStep >= 2 ? styles.active : ''}`}>Step 2</div>
            <div className={styles.description}>Application form</div>
          </div>
          <div className={`${styles.stepContainer} ${activeStep >= 3 ? styles.active : ''}`}>
            <div className={`${styles.step} ${activeStep >= 3 ? styles.active : ''}`}>Step 3</div>
            <div className={styles.description}>Preview</div>
          </div>
        </div>
      </div>
      <div className={styles.codeBox}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
            onClick={() => setCodeType('tsx')}
          >
            TSX
          </button>
          <button
            className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
            onClick={() => setCodeType('css')}
          >
            CSS
          </button>
        </div>
        <button className={styles.copyButton} onClick={() => handleCopyCode(tsxCode)}>
          Copy
        </button>
        <pre>{codeType === 'tsx' ? tsxCode : cssCode}</pre>
      </div>

      <h2 className={styles.heading}>Progress Bar 2</h2>
      <div className={styles.newProgressContainer}>
        <div className={styles.newProgressBar}>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`${styles.newStep} ${activeStep > index ? styles.active : ''}`}
              onClick={() => setActiveStep(index + 1)}
            >
              {activeStep > index ? '✓' : index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.codeBox}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
            onClick={() => setCodeType('tsx')}
          >
            TSX
          </button>
          <button
            className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
            onClick={() => setCodeType('css')}
          >
            CSS
          </button>
        </div>
        <button className={styles.copyButton} onClick={() => handleCopyCode(newProgressBarTSXCode)}>
          Copy
        </button>
        <pre>{codeType === 'tsx' ? newProgressBarTSXCode : newProgressBarCSSCode}</pre>
      </div>

      <h2 className={styles.heading}>Progress Bar 3</h2>
      <div className={styles.thirdProgressContainer}>
        <div className={styles.thirdProgressBar}>
          <div className={styles.thirdProgress} style={{ width: `${activeStep * 25}%` }}></div>
        </div>
        <div className={styles.thirdSteps}>
          <div className={styles.thirdStep}>Copying files</div>
          <div className={styles.thirdStep}>Migrating database</div>
          <div className={styles.thirdStep}>Compiling assets</div>
          <div className={styles.thirdStep}>Deployed</div>
        </div>
      </div>
      <div className={styles.codeBox}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
            onClick={() => setCodeType('tsx')}
          >
            TSX
          </button>
          <button
            className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
            onClick={() => setCodeType('css')}
          >
            CSS
          </button>
        </div>
        <button
          className={styles.copyButton}
          onClick={() => handleCopyCode(thirdProgressBarTSXCode)}
        >
          Copy
        </button>
        <pre>{codeType === 'tsx' ? thirdProgressBarTSXCode : thirdProgressBarCSSCode}</pre>
      </div>
    </div>
  );
};

export default ProgressBar;
