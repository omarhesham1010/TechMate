import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import RequestForm from '../components/RequestForm';

const HomePage = () => {
  return (
    <>
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
      <hr className="section-separator" />
      <div id="request">
        <RequestForm />
      </div>
    </>
  );
};

export default HomePage; 