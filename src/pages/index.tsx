// pages/index.tsx
import React from 'react';
import "@/styles/Home.module.css";
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero/HeroSection';
//import FeaturesSection from '../components/Features/FeaturesSection';
//import AppDownloadSection from '../components/AppDownload/AppDownloadSection';
//import InstagramSection from '../components/Instagram/InstagramSection';
import MapComponent from '../components/GoogleMap/MapComponent';
import ChatRoom from '../components/Chat/ChatRoom';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ChatRoom />
      <Footer />
    </div>
  );
};

export default Home;
