import React, { useContext, useState } from 'react';

import { LanguageContext } from '../LanguageContext';

import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-white sticky px-6 py-4 top-0  z-[100]'>
    <nav className="container flex items-center justify-between m-auto">
      
      <div className="w-16 order-1 ">
        <img src='/Logo.svg' alt='Manara Logo' />
      </div>

      <ul className="hidden md:flex gap-8 text-indigo-900 font-bold order-2">
        <li className="cursor-pointer hover:text-orange-500 transition">{t.home}</li>
        <li className="cursor-pointer hover:text-orange-500 transition">{t.about}</li>
        <li className="cursor-pointer hover:text-orange-500 transition">{t.services}</li>
        <li className="cursor-pointer hover:text-orange-500 transition">{t.team}</li>
        <li className="cursor-pointer hover:text-orange-500 transition">{t.contact}</li>
      </ul>

      <div className="flex items-center gap-4 order-3">
        <button 
          onClick={setLang} 
          className="px-3 py-1 font-bold text-indigo-900 border border-indigo-900 rounded hover:bg-indigo-900 hover:text-white transition"
        >
          {lang === 'AR' ? 'EN' : 'عربي'}
        </button>

        <button className="md:hidden text-indigo-900 text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* القائمة المنسدلة: يجب أن تكون z-50 لتغطي الخلفية */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-8 shadow-xl md:hidden text-indigo-900 font-bold border-t z-[60]">
          <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-orange-500">{t.home}</li>
          <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-orange-500">{t.about}</li>
          <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-orange-500">{t.services}</li>
          <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-orange-500">{t.team}</li>
          <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-orange-500">{t.contact}</li>
        </ul>
      )}
    </nav>
    </div>
  );
}
export default Navbar;