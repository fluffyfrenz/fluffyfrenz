// components/Hero.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-40 bg-gray-100 text-center max-w-full text-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to FluffyFrenz!</h1>
        <p className="text-xl mt-4 md:text-2xl">Your furry friends favorite social network.</p>
        <button className="mt-8 px-8 py-4 bg-blue-500 text-white rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
