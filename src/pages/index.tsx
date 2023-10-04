// pages/index.tsx
import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome!</h1>
      </main>
    </div>
  );
};

export default Home;
