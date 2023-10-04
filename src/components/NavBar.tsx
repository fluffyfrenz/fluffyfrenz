// components/NavBar.tsx
import React, { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import firebase from 'firebase/compat/app';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';


const NavBar: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <nav>
      {user ? (
        <>
          <div>Welcome, {user.displayName || user.email}</div>
          <Logout />
        </>
      ) : (
        <>
          <Login />
          <Signup />
        </>
      )}
    </nav>
  );
};

export default NavBar;
