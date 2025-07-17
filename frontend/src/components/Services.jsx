import React, { useRef } from 'react';
import RequestForm from './RequestForm';

const services = [
  'Website Creation',
  'SEO Enhancement',
  'Presentation Design',
  'System Development',
  'Campaign Funding',
];

const serviceDetails = [
  {
    icon: '💻',
    title: 'Website Creation',
    desc: 'Modern, responsive websites tailored to your business.'
  },
  {
    icon: '📈',
    title: 'SEO Enhancement',
    desc: 'Boost your online presence and search rankings.'
  },
  {
    icon: '🎨',
    title: 'Presentation Design',
    desc: 'Professional PowerPoint and digital presentations.'
  },
  {
    icon: '💡',
    title: 'System Development',
    desc: 'Custom software and full system solutions.'
  },
  {
    icon: '🚀',
    title: 'Campaign Funding',
    desc: 'Support for digital content and campaign launches.'
  },
];

const Services = () => {
  const formRef = useRef();

  const handleServiceClick = (service) => {
    if (formRef.current && formRef.current.setService) {
      formRef.current.setService(service);
      const el = document.querySelector('#request');
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <section id="services">
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>Our Services</h2>
        <div className="serviceGrid">
          {serviceDetails.map((service, idx) => (
            <div
              className="serviceBox"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              onClick={() => handleServiceClick(service.title)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'inherit' }}>{service.title}</h3>
              <p style={{ fontSize: '1rem', color: 'inherit' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <hr className="section-separator" style={{ marginTop: '5rem', marginBottom: '5rem' }}/>
      <RequestForm ref={formRef} />
    </>
  );
};

export default Services; 