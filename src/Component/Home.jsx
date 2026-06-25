import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { motion } from 'framer-motion';

function Home() {
  const { t } = useContext(LanguageContext);
  const [showLight, setShowLight] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLight(true);
    }, 750); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
   <section className="relative w-full min-h-screen flex items-start md:items-center pt-55 md:pt-0 overflow-hidden">
  
  {/* الخلفية */}
  <div className="absolute inset-0 z-1">
    <img 
      src={showLight ? '/Light.svg' : '/NoLight.svg'} 
      alt='Background' 
      className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" 
    />
  </div>

  {/* كتلة النص: مرفوعة للأعلى في الجوال بفضل الـ pt-20 في الـ section */}
  <motion.div 
    className="relative z-10 w-[85%] md:w-1/2 ml-auto pr-8 md:pr-20 text-start"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-indigo-900">
      {t.heroTitle || "منارة من قلب الركام... نور لا ينطفئ"}
    </h1>
    
    <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-md mt-2 md:mt-6">
      {t.heroDesc || "من تحت رماد التحديات، ووسط ركام غزة، ولدت منارة ... لا كفكرة عابرة، بل كرسالة."}
    </p>
  </motion.div>
  
</section>
  );
}

export default Home;