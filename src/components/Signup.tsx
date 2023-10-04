// components/Signup.tsx
import React, { useState } from 'react';
import { auth } from '../lib/firebase';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      if (error instanceof Error) {  // Type check for Error object
        setError(error.message);
      } else {
        // If it's not an Error object, we don't know what to do with it, so rethrow
        throw error;
      }
    }
};

  return (
    <form onSubmit={handleSignup}>
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
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      {error && <div>{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
