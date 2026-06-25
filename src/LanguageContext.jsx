// LanguageContext.jsx
import React, { createContext, useState } from 'react';
import { translations } from './translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('AR');
  const toggleLang = () => setLang(prev => (prev === 'AR' ? 'EN' : 'AR'));

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};