import React from 'react';

const Hero = () => (
  <section
    id="hero"
    style={{
      width: '100%',
      minHeight: 'calc(100vh - 64px)',
      background: 'var(--color-bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2.8rem', fontWeight: 700, textAlign: 'center', color: 'var(--color-text)', marginBottom: '1.2rem', letterSpacing: '-1px', lineHeight: 1.1 }}>
        Elevate Your Digital Presence<br />
        <span style={{ color: 'var(--color-accent)', textShadow: '0 0 50px var(--color-accent)' }}>with TechMate</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '2.2rem', fontWeight: 500, textAlign: 'center', maxWidth: 540 }}>
        Professional web development, SEO, presentations, and system building for every business. Fast, modern, and tailored to your needs.
      </p>
      <a href="#request" style={{
        display: 'inline-block',
        background: 'var(--color-accent)',
        color: 'var(--color-bg)',
        fontWeight: 700,
        padding: '1rem 2.5rem',
        borderRadius: 32,
        fontSize: '1.15rem',
        textDecoration: 'none',
        boxShadow: '0 4px 24px rgba(0, 207, 255, 0.15)',
        transition: 'background 0.2s, color 0.2s, transform 0.2s',
      }}
      onMouseOver={e => { e.target.style.background = 'var(--color-text)'; e.target.style.color = 'var(--color-accent)'; e.target.style.transform = 'scale(1.04)'; }}
      onMouseOut={e => { e.target.style.background = 'var(--color-accent)'; e.target.style.color = 'var(--color-bg)'; e.target.style.transform = 'none'; }}
      >
        Start Your Project
      </a>
    </div>
  </section>
);

export default Hero; 