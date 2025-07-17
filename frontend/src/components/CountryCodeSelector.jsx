import React, { useState, useRef, useEffect } from 'react';
import styles from './CountryCodeSelector.module.css';

const CountryCodeSelector = ({
  value,
  onChange,
  countryCodes,
  darkMode = false,
  label = 'Country Code',
  defaultValue = '',
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    countryCodes.find(c => c.code === value) || countryCodes[0]
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelected(countryCodes.find(c => c.code === value) || countryCodes[0]);
  }, [value, countryCodes]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (c) => {
    setSelected(c);
    setOpen(false);
    if (onChange) onChange(c.code);
  };

  return (
    <div className={styles.wrapper} data-dark={darkMode} ref={dropdownRef}>
      {label && <label className={styles.label}>{label}</label>}
      <button
        type="button"
        className={styles.selected}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        tabIndex={0}
        data-dark={darkMode}
      >
        <img
          src={`https://flagcdn.com/w40/${selected.iso}.png`}
          alt="flag"
          width={24}
          height={16}
          loading="lazy"
          className={styles.flag}
        />
        <span className={styles.code}>{selected.code}</span>
        <span className={styles.arrow} aria-hidden>▼</span>
      </button>
      <ul
        className={`${styles.dropdown} ${open ? styles.open : ''}`}
        role="listbox"
        tabIndex={-1}
        aria-label="Country code list"
        data-dark={darkMode}
      >
        {countryCodes.map((c, i) => (
          <li
            key={c.code + c.iso}
            className={
              styles.item +
              (selected.code === c.code && selected.iso === c.iso ? ' ' + styles.selectedItem : '')
            }
            role="option"
            aria-selected={selected.code === c.code && selected.iso === c.iso}
            tabIndex={0}
            onClick={() => handleSelect(c)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') handleSelect(c);
            }}
            data-dark={darkMode}
          >
            <img
              src={`https://flagcdn.com/w40/${c.iso}.png`}
              alt="flag"
              width={24}
              height={16}
              loading="lazy"
              className={styles.flag}
            />
            <span className={styles.code}>{c.code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryCodeSelector; 