import React from 'react';

const steps = [
  {
    icon: '⚡',
    title: 'Fast & Reliable',
    desc: 'Get your projects delivered quickly and professionally.'
  },
  {
    icon: '🤝',
    title: 'Personalized Service',
    desc: 'Solutions tailored to your needs and budget.'
  },
  {
    icon: '💬',
    title: 'Real Communication',
    desc: 'Stay in touch with our team throughout your project.'
  },
  {
    icon: '🔒',
    title: 'Trust & Security',
    desc: 'Your data and ideas are safe and confidential.'
  },
];

const HowItWorks = () => (
  <section id="how">
    <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>Why Choose TechMate?</h2>
    <div className="serviceGrid">
      {steps.map((step, idx) => (
        <div
          className="serviceBox"
          key={idx}
          tabIndex={0}
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{step.icon}</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'inherit' }}>{step.title}</h3>
          <p style={{ fontSize: '1rem', color: 'inherit' }}>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks; 