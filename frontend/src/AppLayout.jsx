import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import i18n from './i18n';
import { languages } from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './components/auth/AuthContext';
import SeoHelmet from './components/SeoHelmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const RTL_LANGS = ['ar', 'he', 'fa', 'ur'];

function getDefaultTheme() {
  const sessionTheme = typeof window !== 'undefined' ? sessionStorage.getItem('theme') : null;
  if (sessionTheme === 'dark' || sessionTheme === 'light') return sessionTheme;
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  }
  return 'light';
}

function GlobalLoadingSpinner() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--color-bg)', zIndex: 9999, flexDirection: 'column',
    }}>
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 16, animation: 'pulse 1.2s infinite alternate' }}>
        <circle cx="16" cy="16" r="16" fill="#00CFFF" />
        <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#181C23" fontFamily="Poppins, Arial, sans-serif">T</text>
      </svg>
      <div style={{ width: 40, height: 40, border: '4px solid #eee', borderTop: '4px solid #00cfff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} } @keyframes pulse { 0% { opacity: 1; } 100% { opacity: 0.7; transform: scale(1.08);} }`}</style>
    </div>
  );
}

function AppContent({ children }) {
  const { loading } = useAuth();
  if (loading) return <GlobalLoadingSpinner />;
  return children;
}

const AppLayout = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(getDefaultTheme);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 60 });
  }, []);

  useEffect(() => {
    const validLang = languages.some(l => l.code === lang);
    if (validLang) {
      i18n.changeLanguage(lang);
      const isRtl = RTL_LANGS.includes(lang);
      document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    } else {
      navigate('/en', { replace: true });
    }
  }, [lang, navigate]);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const handleLanguageChange = (newLang) => {
    navigate(`/${newLang}`);
  };

  return (
    <AuthProvider>
      <AppContent>
        <div className={`app-wrapper ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}> 
          <SeoHelmet />
          <Header theme={theme} toggleTheme={toggleTheme} language={lang} onLanguageChange={handleLanguageChange} />
          <main style={{ paddingTop: 64 }}>
            <Outlet />
          </main>
          <Footer theme={theme} />
        </div>
      </AppContent>
    </AuthProvider>
  );
};

export default AppLayout; 