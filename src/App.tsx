// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Components from './pages/Components/Components';
import Utilities from './pages/Utilities';
import Documentation from './pages/Documentation';
import Examples from './pages/Examples';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

import Footer from './components/Footer/Footer';

import HeroSection from './components/HeroSection/HeroSection';
import Button from './components/Button/Button';
import NavbarSection from './components/NavbarSection/NavbarSection';


import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/button" element={<Button/>} />
          <Route path="/navbarsection" element={<NavbarSection/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
};

export default App;
