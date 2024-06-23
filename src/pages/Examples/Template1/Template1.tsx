import React from 'react';
import Navbar from './Navbar'
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import TestimonialSection from './TestimonialSection';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import Footer from './Footer';
import Carousel from './Carousel';
import styles from './Template1.module.css';

const Template1: React.FC = () => {
  return (

    <div className={styles.template}>
        
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Carousel/>
      <TestimonialSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Template1;
