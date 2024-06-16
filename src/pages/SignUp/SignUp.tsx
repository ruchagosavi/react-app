// src/pages/SignUp/SignUp.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './SignUp.module.css';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', { username, password });
      navigate('/login');
    } catch (error) {
      setError('Sign up failed. Please try again.');
      console.error('Sign up failed', error);
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpBox}>
        <h2>Good morning</h2>
        <p>Sign on to manage your accounts.</p>
        <form onSubmit={handleSignUp}>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className={styles.passwordLabel}>
            Password
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
          <div className={styles.saveUsername}>
            <input type="checkbox" id="saveUsername" />
            <label htmlFor="saveUsername">Save username</label>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.signUpButton}>Sign Up</button>
          <button
            type="button"
            className={styles.loginButton}
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </form>
        <div className={styles.footerBox}>
          <a href="/forgot">Forgot username or password?</a>
          <a href="/security">Security Center</a>
          <a href="/privacy">Privacy, Cookies, and Legal</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
