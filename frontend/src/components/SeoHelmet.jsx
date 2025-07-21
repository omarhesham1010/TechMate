import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

const BASE_URL = 'https://techmatee.netlify.app';

function getLangPath(lang, pathname) {
  if (lang === 'en') return `${BASE_URL}${pathname}`;
  return `${BASE_URL}/${lang}${pathname}`;
}

const SeoHelmet = ({
  title: overrideTitle,
  description: overrideDesc,
  keywords: overrideKeywords,
  canonical: overrideCanonical,
  ogImage = '/og-image.png',
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const seo = t('seo', { returnObjects: true });
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const canonical = overrideCanonical || getLangPath(lang, pathname);
  const title = overrideTitle || seo.title || 'TechMate';
  const description = overrideDesc || seo.description || '';
  const keywords = overrideKeywords || seo.keywords || '';

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      {/* hreflang alternates */}
      {languages.map(l => (
        <link
          key={l.code}
          rel="alternate"
          hrefLang={l.code}
          href={getLangPath(l.code, pathname)}
        />
      ))}
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : BASE_URL + ogImage} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : BASE_URL + ogImage} />
    </Helmet>
  );
};

export default SeoHelmet; 