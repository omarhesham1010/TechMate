import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './i18n';
import i18n from './i18n';
import { languages } from './i18n';
import { AuthProvider, useAuth } from './components/auth/AuthContext';

const RTL_LANGS = ['ar', 'he', 'fa', 'ur'];

function getDefaultLanguage() {
  // 1. Check sessionStorage
  const sessionLang = typeof window !== 'undefined' ? sessionStorage.getItem('language') : null;
  if (sessionLang && languages.some(l => l.code === sessionLang)) return sessionLang;
  // 2. Check browser language
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language?.split('-')[0];
    if (languages.some(l => l.code === browserLang)) return browserLang;
  }
  // 3. Fallback
  return 'en';
}

function getDefaultTheme() {
  // 1. Check sessionStorage
  const sessionTheme = typeof window !== 'undefined' ? sessionStorage.getItem('theme') : null;
  if (sessionTheme === 'dark' || sessionTheme === 'light') return sessionTheme;
  // 2. Check browser preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  }
  // 3. Fallback
  return 'light';
}

function GlobalLoadingSpinner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg)',
      zIndex: 9999,
      flexDirection: 'column',
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

function AppContent(props) {
  const { loading } = useAuth();
  if (loading) return <GlobalLoadingSpinner />;
  return props.children;
}

function App() {
  const [theme, setTheme] = useState(getDefaultTheme);
  const [language, setLanguage] = useState(getDefaultLanguage);
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 60 });
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    sessionStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const isRtl = RTL_LANGS.includes(language);
    setDirection(isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.body.style.transition = 'direction 0.3s';
  }, [language]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  const handleLanguageChange = (lang) => setLanguage(lang);

  return (
    <AuthProvider>
      <AppContent>
        <div className={`app-wrapper ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`} style={{ transition: 'direction 0.3s' }}> 
          <Helmet>
            <title>TechMate | Digital Services Platform</title>
            <meta name="description" content="TechMate offers web development, SEO, presentations, and system building. Modern, responsive, and animated digital services for any business." />
            <meta property="og:title" content="TechMate | Digital Services Platform" />
            <meta property="og:description" content="Order web development, SEO, presentations, and more. Fast, professional, and tailored to your needs." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://example.com/" />
            <meta property="og:image" content="/og-image.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="TechMate | Digital Services Platform" />
            <meta name="twitter:description" content="Order web development, SEO, presentations, and more. Fast, professional, and tailored to your needs." />
            <meta name="twitter:image" content="/og-image.png" />
          </Helmet>
          <Header theme={theme} toggleTheme={toggleTheme} language={language} onLanguageChange={handleLanguageChange} />
          <main style={{ paddingTop: 64 }}>
            <section
              className="section"
              id="hero"
              style={{
                marginTop: '0',
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="container">
                <Hero />
              </div>
            </section>
            <hr className="section-separator" />
            <section className="section" id="services">
              <div className="container">
                <Services />
              </div>
            </section>
            <hr className="section-separator" />
            <section className="section" id="how">
              <div className="container">
                <HowItWorks />
              </div>
            </section>
            <hr className="section-separator" />
            <section className="section" id="testimonials">
              <div className="container">
                <Testimonials />
              </div>
            </section>
          </main>
          <Footer theme={theme} />
        </div>
      </AppContent>
    </AuthProvider>
  );
}

export default App;
