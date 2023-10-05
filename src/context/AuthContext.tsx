// context/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../lib/firebase";
import firebase from "firebase/compat/app";

interface AuthContextType {
  user: firebase.User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
