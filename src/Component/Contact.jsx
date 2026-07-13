import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

function Contact() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* الفورم */}
        <form 
          action="https://formsubmit.co/manara.gaza.pal@gmail.com" 
          method="POST" 
          className="bg-[#f9f9ff] p-8 md:p-12 rounded-[3rem] shadow-sm"
        >
          {/* حقل مخفي للعودة للصفحة الرئيسية بعد الإرسال */}
          <input type="hidden" name="_next" value="http://localhost:5173" />
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input 
              name="name" 
              type="text" 
              placeholder={t.namePlaceholder} 
              className="p-4 rounded-2xl border-none outline-none w-full" 
              required 
            />
            <input 
              name="email" 
              type="email" 
              placeholder={t.emailPlaceholder} 
              className="p-4 rounded-2xl border-none outline-none w-full" 
              required 
            />
          </div>
          <textarea 
            name="message" 
            placeholder={t.messagePlaceholder} 
            className="w-full p-4 rounded-2xl border-none outline-none mb-6 h-40" 
            required
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-[#f97316] text-white py-4 rounded-2xl font-bold hover:bg-[#ea580c] transition-all"
          >
            {t.sendBtn}
          </button>
        </form>

        {/* معلومات التواصل */}
        <div className="space-y-8 text-right">
          <h2 className="text-3xl font-bold text-[#211551]">{t.contactTitle}</h2>
          <p className="text-gray-500 leading-relaxed">{t.contactDesc}</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-end">
              <span>{t.address}</span>
              <div className="p-3 bg-gray-50 rounded-full"><FiMapPin className="text-[#f97316]" /></div>
            </div>
            <div className="flex items-center gap-4 justify-end">
              <span>{t.email}</span>
              <div className="p-3 bg-gray-50 rounded-full"><FiMail className="text-[#f97316]" /></div>
            </div>
            <div className="flex items-center gap-4 justify-end">
              <span>{t.phone}</span>
              <div className="p-3 bg-gray-50 rounded-full"><FiPhone className="text-[#f97316]" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;