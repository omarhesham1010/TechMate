import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: '⚡',
      title: t('how.fast.title'),
      desc: t('how.fast.desc'),
    },
    {
      icon: '🤝',
      title: t('how.personalized.title'),
      desc: t('how.personalized.desc'),
    },
    {
      icon: '💬',
      title: t('how.communication.title'),
      desc: t('how.communication.desc'),
    },
    {
      icon: '🔒',
      title: t('how.trust.title'),
      desc: t('how.trust.desc'),
    },
  ];
  return (
    <section id="how">
      <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>{t('how.section_title')}</h2>
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
};

export default HowItWorks; 