import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { motion } from 'framer-motion';

function Team() {
  const { t } = useContext(LanguageContext);

  const teamImages = [
    "/Karam.png",
    "/Bahaa.png",
    "/Baraa.png",
    "/Roaa.png",
    "/Basma.png"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* عنوان السكشن مع تأثير حركة بسيط */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#211551] mb-16"
        >
          {t.teamTitle}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              // تأثير الصعود من الأسفل عند وصول المستخدم للسكشن
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // ليعمل التأثير مرة واحدة فقط
              transition={{ duration: 0.6, delay: index * 0.2 }} 
             viewport={{ once: false }}

              // تأخير بسيط لكل صورة ليظهروا بالتتابع
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              {/* الصورة بنسبة 3/4 لتبدو طويلة وأنيقة */}
              <div className="w-full aspect-[3/4] mb-4 shadow-sm overflow-hidden rounded-3xl bg-gray-100">
                <img 
                  src={teamImages[index]} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <h3 className="font-bold text-[#211551]">{member.name}</h3>
              <p className="text-orange-500 text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;