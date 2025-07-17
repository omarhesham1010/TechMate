import React, { useState } from 'react';
import styles from './Header.module.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const navItems = [
  { label: 'nav.home', href: '#hero' },
  { label: 'nav.services', href: '#services' },
  { label: 'nav.contact', href: '#request' },
];

const HEADER_HEIGHT = 64;

function scrollToSection(id) {
  const el = document.querySelector(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const Header = ({ theme, toggleTheme, language, onLanguageChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = theme === 'dark';
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} aria-label="TechMate Home" onClick={e => { e.preventDefault(); scrollToSection('#hero'); }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#00CFFF" />
            <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#181C23" fontFamily="Poppins, Arial, sans-serif">T</text>
          </svg>
          <span className={styles.brand}>TechMate</span> {/* Brand: do not translate */}
        </a>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navItem}
              onClick={e => {
                e.preventDefault();
                scrollToSection(item.href);
                setMenuOpen(false);
              }}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <LanguageSelector value={language} onChange={onLanguageChange} darkMode={darkMode} />
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label={t('toggle_dark_mode', 'Toggle dark mode')}>
            {theme === 'dark' ? (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="#00CFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="#00CFFF" strokeWidth="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#00CFFF" strokeWidth="2" strokeLinecap="round"/></svg>
            )}
          </button>
          <a href="#" className={styles.signIn}>{t('sign_in', 'Sign In')}</a>
          <button className={styles.menuBtn} onClick={() => setMenuOpen((v) => !v)} aria-label={t('open_menu', 'Open menu')}>
            <span className={styles.menuIcon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 