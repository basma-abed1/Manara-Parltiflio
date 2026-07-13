import React, { useContext, useState } from 'react';
import { LanguageContext } from '../LanguageContext';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

const linkStyle = "text-white hover:text-orange-500 cursor-pointer transition-colors duration-300 font-medium";  
return (
  
<nav className="sticky top-4 z-50  bg-black/90 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg">      {/* الحاوية لضمان تناسق العرض وتوسيط المحتوى */}
<div className="container mx-auto px-6 py-4 flex justify-between items-center">        
        {/* الشعار */}
        <div className="text-2xl font-bold cursor-pointer">
          <img src='Logo.png' alt="Logo" className="h-10" />
        </div>

        {/* الروابط للشاشات الكبيرة */}
        <ul className="hidden md:flex gap-8">
          <li className={linkStyle}>{t.home}</li>
          <li className={linkStyle}>{t.services}</li>
          <li className={linkStyle}>{t.team}</li>
          <li className={linkStyle}>{t.about}</li>
        </ul>

        {/* زر التواصل + زر اللغة + أيقونة المنيو */}
        <div className="flex gap-4 items-center">
          <button className="hidden md:block bg-orange-500 px-6 py-2 rounded-full font-bold hover:bg-orange-600 active:scale-95 transition-all duration-200">
            {t.contact}
          </button>
          
          <button 
            onClick={setLang}
            className="border border-white px-3 py-1 rounded text-white hover:bg-white hover:text-black hover:border-white active:scale-95 transition-all duration-200 text-sm font-medium"
          >
            {lang === 'AR' ? 'English' : 'العربية'}
          </button>

          {/* أيقونة القائمة للموبايل */}
          <button className="md:hidden text-3xl text-white hover:text-orange-500 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm flex flex-col items-center gap-6 py-8 md:hidden border-t border-gray-950 z-40">
          <ul className="flex flex-col gap-6 text-center">
            <li className={linkStyle} onClick={() => setIsOpen(false)}>{t.home}</li>
            <li className={linkStyle} onClick={() => setIsOpen(false)}>{t.services}</li>
            <li className={linkStyle} onClick={() => setIsOpen(false)}>{t.team}</li>
            <li className={linkStyle} onClick={() => setIsOpen(false)}>{t.about}</li>
          </ul>
          <button className="bg-orange-500 px-8 py-2 rounded-full font-bold hover:bg-orange-600 w-4/5 max-w-xs transition-colors">
            {t.contact}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;