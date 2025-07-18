import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { auth, provider } from '../../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false); // for sign in/out

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          uid: firebaseUser.uid,
        };
        setUser(userData);
        localStorage.setItem('authUser', JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem('authUser');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setAuthLoading(true);
    try {
      await signInWithPopup(auth, provider);
      // onAuthStateChanged will handle user state
    } catch (error) {
      // Optionally handle error
    } finally {
      setAuthLoading(false);
    }
  }, []);

  const signOutUser = useCallback(async () => {
    setAuthLoading(true);
    try {
      await signOut(auth);
      // onAuthStateChanged will handle user state
    } catch (error) {
      // Optionally handle error
    } finally {
      setAuthLoading(false);
    }
  }, []);

  const value = {
    user,
    loading, // global loading (initial check)
    authLoading, // sign in/out loading
    signInWithGoogle,
    signOutUser,
    displayName: user?.displayName,
    email: user?.email,
    photoURL: user?.photoURL,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 