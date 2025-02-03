import React from 'react';
import useLanguage from '../store/useLanguage';

const translations = {
  uz: {
    welcome: 'Xush kelibsiz',
    changeLanguage: 'Tilni o\'zgartirish',
  },
  en: {
    welcome: 'Welcome',
    changeLanguage: 'Change Language',
  }
}

function Language() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h1>{t.welcome}</h1>
      <button onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}>
        {t.changeLanguage}
      </button>
    </div>
  );
}

export default Language;
