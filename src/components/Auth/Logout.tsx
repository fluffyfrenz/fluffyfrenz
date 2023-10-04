// components/Logout.tsx
import React, { useState } from 'react';
import { auth } from '../../lib/firebase';

const Logout: React.FC = () => {
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        // If it's not an Error object, we don't know what to do with it, so rethrow
        throw error;
      }
    }
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      {error && <div>{error}</div>}
    </>
  );
};

export default Logout;
