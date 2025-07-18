import React from 'react';
import { useAuth } from './AuthContext';
import styles from './LoginButton.module.css';

export default function LoginButton() {
  const { user, signInWithGoogle, signOutUser, authLoading } = useAuth();

  if (authLoading) {
    return (
      <button className={styles.loadingBtn} disabled>
        <span className={styles.spinner}></span>
        <span className={styles.loadingText}>Loading...</span>
      </button>
    );
  }

  if (!user) {
    return (
      <button className={styles.googleBtn} onClick={signInWithGoogle}>
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className={styles.googleIcon} />
        <span>Sign in with Google</span>
      </button>
    );
  }

  return (
    <div className={styles.profileWrap}>
      <img src={user.photoURL} alt={user.displayName || user.email} className={styles.avatar} />
      <span className={styles.userName}>{user.displayName || user.email}</span>
      <button className={styles.signOutBtn} onClick={signOutUser}>Sign Out</button>
    </div>
  );
} 