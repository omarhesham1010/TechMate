import React from 'react';

const testimonials = [
  {
    avatar: '👩‍💼',
    name: 'Sarah B.',
    quote: 'TechMate delivered my website fast and exceeded my expectations! Highly recommended.'
  },
  {
    avatar: '👨‍⚕️',
    name: 'Dr. Ahmed K.',
    quote: 'Professional, responsive, and truly understood my needs. Will use again.'
  },
  {
    avatar: '👔',
    name: 'Omar S.',
    quote: 'The team was communicative and the results were top-notch. Great value!'
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>What Our Clients Say</h2>
    <div className="serviceGrid">
      {testimonials.map((t, idx) => (
        <div
          className="serviceBox"
          key={idx}
          tabIndex={0}
          data-aos="zoom-in"
          data-aos-delay={idx * 100}
        >
          <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>{t.avatar}</div>
          <div style={{ fontSize: '1.05rem', color: 'inherit', marginBottom: '0.7rem', fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</div>
          <div style={{ fontSize: '1rem', color: 'inherit', fontWeight: 700 }}>- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 