// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  authState: { token: string | null; username: string | null };
  setAuthState: React.Dispatch<React.SetStateAction<{ token: string | null; username: string | null }>>;
}

export const AuthContext = createContext<AuthContextType>({ authState: { token: null, username: null }, setAuthState: () => {} });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<{ token: string | null; username: string | null }>({
    token: localStorage.getItem('token'),
    username: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthState({ token, username: null });
    }
  }, []);

  return <AuthContext.Provider value={{ authState, setAuthState }}>{children}</AuthContext.Provider>;
};
