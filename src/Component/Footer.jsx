import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-[#1a163a] py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          {t.footerText}
        </p>
      </div>
    </footer>
  );
}

export default Footer;