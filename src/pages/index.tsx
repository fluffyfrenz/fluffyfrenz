// pages/index.tsx
import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero/HeroSection';
//import FeaturesSection from '../components/Features/FeaturesSection';
//import AppDownloadSection from '../components/AppDownload/AppDownloadSection';
//import InstagramSection from '../components/Instagram/InstagramSection';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
