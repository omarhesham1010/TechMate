import React, { useState, useRef, useEffect } from 'react';
import styles from './LanguageSelector.module.css';
import { useTranslation } from 'react-i18next';
import i18n, { languages } from '../i18n';

// languages and RTL info are now imported from i18n.js

const LanguageSelector = ({ value, onChange, darkMode = false }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selected = languages.find(l => l.code === value) || languages[0];
  const { t } = useTranslation();

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLanguageSelect = (langCode) => {
    setOpen(false);
    i18n.changeLanguage(langCode); // This triggers translation and direction update
    if (onChange) onChange(langCode);
  };

  return (
    <div className={styles.wrapper} data-dark={darkMode} ref={dropdownRef}>
      <button
        type="button"
        className={styles.selected}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        tabIndex={0}
        data-dark={darkMode}
      >
        <span className={styles.globe} aria-hidden>🌐</span>
        <span className={styles.langName}>{selected.name}</span>
        <span className={styles.arrow} aria-hidden>▼</span>
      </button>
      <ul
        className={`${styles.dropdown} ${open ? styles.open : ''}`}
        role="listbox"
        tabIndex={-1}
        aria-label="Language list"
        data-dark={darkMode}
      >
        {languages.map((l, i) => (
          <li
            key={l.code}
            className={
              styles.item +
              (selected.code === l.code ? ' ' + styles.selectedItem : '') +
              (l.rtl ? ' ' + styles.rtl : '')
            }
            role="option"
            aria-selected={selected.code === l.code}
            tabIndex={0}
            onClick={() => handleLanguageSelect(l.code)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') { handleLanguageSelect(l.code); }
            }}
            data-dark={darkMode}
          >
            <span className={styles.langName}>{l.name}</span>
            {l.rtl && <span className={styles.rtlTag}>RTL</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector; 