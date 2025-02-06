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
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">{t.welcome}</h1>
      <div className="text-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}
        >
          {t.changeLanguage}
        </button>
      </div>
    </div>
  );
}

export default Language;
