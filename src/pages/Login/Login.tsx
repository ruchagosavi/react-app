// src/pages/Login/Login.tsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      const { token } = response.data;
      setAuthState({ token, username });
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      setError('Login failed. Please check your username and password.');
      console.error('Login failed', error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Welcome back</h2>
        <p>Sign on to manage your accounts.</p>
        <form onSubmit={handleLogin}>
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
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.loginButton}>Sign In</button>
          <button
            type="button"
            className={styles.signUpButton}
            onClick={() => navigate('/signup')}
          >
            Sign Up
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

export default Login;
