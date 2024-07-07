import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const breadcrumbExamples = [
  {
    label: 'Single Level',
    paths: [{ path: '/', label: 'Home' }],
    tsxCode: `
<nav aria-label="breadcrumb">
  <ol className={styles.breadcrumb}>
    <li className={styles.active} aria-current="page">Home</li>
  </ol>
</nav>`,
    cssCode: `
.breadcrumb {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.breadcrumb li {
  margin-right: 5px;
}

.breadcrumb li:last-child {
  font-weight: bold;
}

.breadcrumb li a {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb li a:hover {
  text-decoration: underline;
}

.breadcrumb li.active {
  color: #6c757d;
}
    `,
  },
  {
    label: 'Two Levels',
    paths: [
      { path: '/', label: 'Home' },
      { path: '/library', label: 'Library' },
    ],
    tsxCode: `
<nav aria-label="breadcrumb">
  <ol className={styles.breadcrumb}>
    <li><Link to="/">Home</Link></li>
    <li className={styles.active} aria-current="page">Library</li>
  </ol>
</nav>`,
    cssCode: `
.breadcrumb {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.breadcrumb li {
  margin-right: 5px;
}

.breadcrumb li:last-child {
  font-weight: bold;
}

.breadcrumb li a {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb li a:hover {
  text-decoration: underline;
}

.breadcrumb li.active {
  color: #6c757d;
}
    `,
  },
  {
    label: 'Three Levels',
    paths: [
      { path: '/', label: 'Home' },
      { path: '/library', label: 'Library' },
      { path: '/library/data', label: 'Data' },
    ],
    tsxCode: `
<nav aria-label="breadcrumb">
  <ol className={styles.breadcrumb}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/library">Library</Link></li>
    <li className={styles.active} aria-current="page">Data</li>
  </ol>
</nav>`,
    cssCode: `
.breadcrumb {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.breadcrumb li {
  margin-right: 5px;
}

.breadcrumb li:last-child {
  font-weight: bold;
}

.breadcrumb li a {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb li a:hover {
  text-decoration: underline;
}

.breadcrumb li.active {
  color: #6c757d;
}
    `,
  },
];

const Breadcrumb: React.FC = () => {
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
    <div className={styles.breadcrumbPage}>
      <h1>Breadcrumb Components</h1>
      <div className={styles.breadcrumbGrid}>
        {breadcrumbExamples.map((breadcrumb, index) => (
          <div key={index} className={styles.breadcrumbSection}>
            <nav aria-label="breadcrumb" className={styles.breadcrumbExample}>
              <ol className={styles.breadcrumb}>
                {breadcrumb.paths.map((item, idx) => (
                  <li
                    key={idx}
                    className={idx === breadcrumb.paths.length - 1 ? styles.active : ''}
                  >
                    {idx === breadcrumb.paths.length - 1 ? (
                      item.label
                    ) : (
                      <Link to={item.path}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
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
                handleCopy(showCSS[index] ? breadcrumb.cssCode : breadcrumb.tsxCode)
              }
            >
              {copiedCode === (showCSS[index] ? breadcrumb.cssCode : breadcrumb.tsxCode)
                ? 'Copied!'
                : 'Copy Code'}
            </button>
            <pre className={styles.codeBlock}>
              {showCSS[index] ? breadcrumb.cssCode : breadcrumb.tsxCode}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
