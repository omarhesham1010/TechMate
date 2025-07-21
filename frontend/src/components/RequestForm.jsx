import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('lmWyHFFpP9DEO_7cA');
import CountryCodeSelector from './CountryCodeSelector';
import { useTranslation } from 'react-i18next';
import { useAuth } from './auth/AuthContext'; // Import useAuth hook

const services = [
  'website_creation',
  'seo_enhancement',
  'presentation_design',
  'system_development',
  'campaign_funding',
  'other_service',
];

// List of country codes with ISO for flag images
const countryCodes = [
  { code: '+1', iso: 'us' },
  { code: '+1', iso: 'ca' },
  { code: '+7', iso: 'ru' },
  { code: '+20', iso: 'eg' },
  { code: '+27', iso: 'za' },
  { code: '+30', iso: 'gr' },
  { code: '+31', iso: 'nl' },
  { code: '+32', iso: 'be' },
  { code: '+33', iso: 'fr' },
  { code: '+34', iso: 'es' },
  { code: '+39', iso: 'it' },
  { code: '+43', iso: 'at' },
  { code: '+44', iso: 'gb' },
  { code: '+45', iso: 'dk' },
  { code: '+46', iso: 'se' },
  { code: '+47', iso: 'no' },
  { code: '+48', iso: 'pl' },
  { code: '+49', iso: 'de' },
  { code: '+51', iso: 'pe' },
  { code: '+52', iso: 'mx' },
  { code: '+54', iso: 'ar' },
  { code: '+55', iso: 'br' },
  { code: '+56', iso: 'cl' },
  { code: '+57', iso: 'co' },
  { code: '+60', iso: 'my' },
  { code: '+61', iso: 'au' },
  { code: '+62', iso: 'id' },
  { code: '+63', iso: 'ph' },
  { code: '+65', iso: 'sg' },
  { code: '+66', iso: 'th' },
  { code: '+81', iso: 'jp' },
  { code: '+82', iso: 'kr' },
  { code: '+84', iso: 'vn' },
  { code: '+86', iso: 'cn' },
  { code: '+90', iso: 'tr' },
  { code: '+91', iso: 'in' },
  { code: '+92', iso: 'pk' },
  { code: '+212', iso: 'ma' },
  { code: '+213', iso: 'dz' },
  { code: '+216', iso: 'tn' },
  { code: '+218', iso: 'ly' },
  { code: '+234', iso: 'ng' },
  { code: '+351', iso: 'pt' },
  { code: '+380', iso: 'ua' },
  { code: '+386', iso: 'si' },
  { code: '+420', iso: 'cz' },
  { code: '+421', iso: 'sk' },
  { code: '+961', iso: 'lb' },
  { code: '+962', iso: 'jo' },
  { code: '+963', iso: 'sy' },
  { code: '+964', iso: 'iq' },
  { code: '+965', iso: 'kw' },
  { code: '+966', iso: 'sa' },
  { code: '+967', iso: 'ye' },
  { code: '+968', iso: 'om' },
  { code: '+970', iso: 'ps' }, // فلسطين
  { code: '+971', iso: 'ae' },
  { code: '+972', iso: 'ps' },
  { code: '+973', iso: 'bh' },
  { code: '+974', iso: 'qa' },
  { code: '+975', iso: 'bt' }
];

const SERVICE_ID = 'service_xxx'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_xxx'; // Replace with your EmailJS template ID
const USER_ID = 'user_xxx'; // Replace with your EmailJS public key

const RequestForm = forwardRef(({ preselectedService, darkMode = false }, ref) => {
  const { t } = useTranslation();
  const { user, signInWithGoogle } = useAuth(); // Get user and signInWithGoogle from AuthContext
  const [form, setForm] = useState({
    name: '',
    company: '',
    job: '',
    phone: '',
    country: '+1',
    countryIso: 'us',
    email: '',
    service: '',
    budget: '',
    finishDate: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false); // New state for loading
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setForm(f => ({ ...f, service: preselectedService }));
    }
  }, [preselectedService]);

  useImperativeHandle(ref, () => ({
    setService: (service) => setForm(f => ({ ...f, service })),
  }));

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCountryChange = code => {
    const selected = countryCodes.find(c => c.code === code) || countryCodes[0];
    setForm(f => ({ ...f, country: selected.code, countryIso: selected.iso }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // 1. Require Google Sign-In
    if (!user) {
      signInWithGoogle();
      return;
    }

    setIsSending(true);

    // Prepare variables for admin email
    const adminVars = {
      client_name: user.displayName || 'N/A',
      email: user.email || 'N/A',
      client_photo: user.photoURL || '',
      form_name: form.name || 'N/A',
      company: form.company || 'N/A',
      job_title: form.job || 'N/A',
      phone: form.countryIso + ' ' +  form.country + form.phone || 'N/A',
      form_email: form.email || 'N/A',
      service: form.service || 'N/A',
      budget: form.budget || '0',
      deadline: form.finishDate || 'N/A',
      details: form.message || 'N/A',
      to_email: 'techmate1010@gmail.com',
    };

    // Prepare variables for client confirmation email
    const clientVars = {
      name: user.displayName || 'Valued Client',
      form_name: form.name || 'N/A',
      company: form.company || 'N/A',
      job_title: form.job || 'N/A',
      phone: form.countryIso + ' ' +  form.country + form.phone || 'N/A',
      form_email: form.email || 'N/A',
      service: form.service || 'N/A',
      budget: form.budget || '0',
      deadline: form.finishDate || 'N/A',
      details: form.message || 'N/A',
      to_email: user.email || 'techmate1010@gmail.com',
    };

    try {
      await Promise.all([
        emailjs.send(
          'service_9pqabcd',
          'template_snnde7m',
          adminVars
        )
        ,
        emailjs.send(
          'service_9pqabcd',
          'template_vui2etp',
          clientVars
        )
      ]);
      setSuccess('Your request has been sent successfully! A confirmation has been sent to your email.');
      setForm({
        name: '', company: '', job: '', phone: '', country: '+1', countryIso: 'us', email: '', service: '', budget: '', finishDate: '', message: ''
      });
    } catch (err) {
      setError('Failed to send your request. Please try again later.');
      console.error('EmailJS error:', err);
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <section id="request">
      <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>{t('request.section_title')}</h2>
      <form onSubmit={handleSubmit} style={{
        maxWidth: 600,
        margin: '0 auto',
        background: 'var(--color-card)',
        borderRadius: 18,
        boxShadow: 'var(--color-shadow)',
        padding: '2.2rem 1.5rem 1.5rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        border: '1.5px solid #e0f7fa',
        transition: 'background 0.4s, color 0.4s',
      }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            name="name"
            placeholder={t('request.name')}
            value={form.name}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
            />
          <input
            type="text"
            name="company"
            placeholder={t('request.company')}
            value={form.company}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
            />
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            name="job"
            placeholder={t('request.job')}
            value={form.job}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
            />
          <div style={{ display: 'flex', flex: 1, gap: '0.5rem', alignItems: 'center' }}>
            <CountryCodeSelector
              value={form.country}
              onChange={handleCountryChange}
              countryCodes={countryCodes}
              darkMode={darkMode}
              label={null}
              />
            <input
              type="tel"
              name="phone"
              placeholder={t('request.phone')}
              value={form.phone}
              onChange={handleChange}
              required
              style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
              />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="email"
            name="email"
            placeholder={t('request.email')}
            value={form.email}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
            />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
            >
            <option value="">{t('request.select_service')}</option>
            {services.map((s, i) => (
              <option value={s} key={i}>{t(`services.${s}.title`)}</option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            name="budget"
            placeholder={t('request.budget')}
            value={form.budget}
            onChange={handleChange}
            style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
            />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="finishDate" style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{t('request.deadline_label')}</label>
            <input
              type="date"
              name="finishDate"
              placeholder={t('request.finish_date')}
              value={form.finishDate}
              onChange={handleChange}
              style={{ flex: 1, padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
              />
          </div>
        </div>
        <textarea
          name="message"
          placeholder={t('request.message')}
          value={form.message}
          onChange={handleChange}
          required
          style={{ minHeight: 90, resize: 'vertical', padding: '0.9rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: 8, fontSize: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', transition: 'border 0.18s, box-shadow 0.18s', outline: 'none' }}
          />
        <button type="submit" disabled={isSending} style={{
          background: 'var(--color-accent)',
          color: 'var(--color-bg)',
          fontWeight: 700,
          padding: '0.95rem 2.5rem',
          borderRadius: 32,
          fontSize: '1.1rem',
          border: 'none',
          cursor: isSending ? 'not-allowed' : 'pointer',
          marginTop: '0.5rem',
          transition: 'background 0.2s, color 0.2s, transform 0.2s, opacity 0.2s',
          boxShadow: '0 4px 24px rgba(0, 207, 255, 0.12)',
          opacity: isSending ? 0.7 : 1,
        }}
        onMouseOver={e => { if (!isSending) e.target.style.transform = 'scale(1.04)'; }}
        onMouseOut={e => { if (!isSending) e.target.style.transform = 'none'; }}
        >
          {isSending ? t('request.sending') : t('request.send')}
        </button>
        {error && <div style={{ color: '#f44336', textAlign: 'center', marginTop: '1rem' }}>{error}</div>}
        {success && <div style={{ color: '#4caf50', textAlign: 'center', marginTop: '1rem' }}>{success}</div>}
      </form>
    </section>
  );
});

export default RequestForm; 