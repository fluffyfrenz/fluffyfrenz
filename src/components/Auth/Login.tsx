// components/Login.tsx
import React, { useState } from 'react';
import { auth } from '@/lib/firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
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
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
