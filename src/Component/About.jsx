import React, { useContext, useState } from 'react';
import { LanguageContext } from '../LanguageContext';
import { motion } from 'framer-motion';

function About() {
  const { lang, t } = useContext(LanguageContext);
  const [resetKey, setResetKey] = useState(0); 
  const sentence = t.aboutP4.split(" ");

  return (
    <div className='bg-[#fffbf1]'>
    <section 
      className=" container m-auto w-full py-20  flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden text-indigo-900"
      onMouseEnter={() => setResetKey(prev => prev + 1)} // إعادة الحركة عند دخول الماوس
    >
      
      <motion.h2 
        key={resetKey} // يتغير المفتاح ليعيد الحركة
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t.aboutTitle}
      </motion.h2>

      <div dir={lang === 'AR' ? 'rtl' : 'ltr'} className="max-w-4xl text-center space-y-6">
        {[t.aboutP1, t.aboutP2, t.aboutP3].map((text, idx) => (
          <motion.p
            key={`${resetKey}-${idx}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed"
          >
            {text}
          </motion.p>
        ))}
        
        <p className="text-xl md:text-2xl font-bold pt-6">
          {sentence.map((word, i) => (
            <motion.span
              key={`${resetKey}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.25), duration: 0.6 }} // فترة زمنية أطول (0.25)
              className="inline-block mx-1"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
    </div>
  );
}

export default About;