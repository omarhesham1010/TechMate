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

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 60 });
  }, []);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className={`app-wrapper ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}> 
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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main style={{ paddingTop: 64 }}>
        <section
          className="section"
          id="hero"
          style={{
            marginTop: '0rem',
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
  );
}

export default App;
