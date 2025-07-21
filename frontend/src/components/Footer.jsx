import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandRow}>
          <span className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#00CFFF" />
              <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#181C23" fontFamily="Poppins, Arial, sans-serif">T</text>
            </svg>
          </span>
          <span className={styles.brand}>TechMate</span>
        </div>
        <div className={styles.infoRow}>
          <a href="mailto:info@techmate.com" className={styles.link} aria-label="Email">
            <span className={styles.icon}>✉️</span> techmate1010@gmail.com
          </a>
          <a href="#" className={styles.link} aria-label="Twitter">
            <span className={styles.icon}>🐦</span> {t('footer.twitter')}
          </a>
          <a href="#" className={styles.link} aria-label="LinkedIn">
            <span className={styles.icon}>💼</span> {t('footer.linkedin')}
          </a>
        </div>
        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} TechMate. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 