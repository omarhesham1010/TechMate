import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      avatar: '👩‍💼',
      name: 'Sarah B.',
      quote: t('testimonials.sarah'),
    },
    {
      avatar: '👨‍⚕️',
      name: 'Dr. Ahmed K.',
      quote: t('testimonials.ahmed'),
    },
    {
      avatar: '👔',
      name: 'Omar S.',
      quote: t('testimonials.omar'),
    },
  ];
  return (
    <section id="testimonials">
      <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>{t('testimonials.section_title')}</h2>
      <div className="serviceGrid">
        {testimonials.map((tst, idx) => (
          <div
            className="serviceBox"
            key={idx}
            tabIndex={0}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>{tst.avatar}</div>
            <div style={{ fontSize: '1.05rem', color: 'inherit', marginBottom: '0.7rem', fontStyle: 'italic' }}>&ldquo;{tst.quote}&rdquo;</div>
            <div style={{ fontSize: '1rem', color: 'inherit', fontWeight: 700 }}>- {tst.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 