import React, { useRef } from 'react';
import RequestForm from './RequestForm';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const formRef = useRef();

  const serviceDetails = [
    {
      icon: '💻',
      title: t('services.website_creation.title'),
      desc: t('services.website_creation.desc'),
      key: 'website_creation',
    },
    {
      icon: '📈',
      title: t('services.seo_enhancement.title'),
      desc: t('services.seo_enhancement.desc'),
      key: 'seo_enhancement',
    },
    {
      icon: '🎨',
      title: t('services.presentation_design.title'),
      desc: t('services.presentation_design.desc'),
      key: 'presentation_design',
    },
    {
      icon: '💡',
      title: t('services.system_development.title'),
      desc: t('services.system_development.desc'),
      key: 'system_development',
    },
    {
      icon: '🚀',
      title: t('services.campaign_funding.title'),
      desc: t('services.campaign_funding.desc'),
      key: 'campaign_funding',
    },
  ];

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
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>{t('services.section_title')}</h2>
        <div className="serviceGrid">
          {serviceDetails.map((service, idx) => (
            <div
              className="serviceBox"
              key={service.key}
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