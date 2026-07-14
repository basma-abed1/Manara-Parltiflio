import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiTarget, FiCpu, FiTool } from 'react-icons/fi';

// مكون عداد الأرقام المحدث: يعد، ينتظر، ثم يعيد العد
function Counter({ from, to }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, to, { 
      duration: 2,
      repeat: Infinity,      // تكرار العد
      repeatDelay: 1,        // الانتظار 3 ثوانٍ قبل إعادة العد
      ease: "easeInOut"
    });
    return () => controls.stop();
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

function About() {
  const { t } = useContext(LanguageContext);
  const icons = [<FiTarget />, <FiCpu />, <FiTool />];

  return (
    <section id= 'about'className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* الجانب النصي */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-black leading-snug">{t.aboutTitle}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{t.aboutDesc}</p>
            
            {/* الإحصائيات */}
            <div className="flex gap-12 pt-6">
              <div>
                <h3 className="text-4xl font-bold text-orange-500">
                  <Counter from={0} to={40} />+
                </h3>
                <p className="text-gray-500">{t.stats.projects}</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-orange-500">
                  <Counter from={0} to={500} />+
                </h3>
                <p className="text-gray-500">{t.stats.trainees}</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {t.points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ x: -100, opacity: 0 }}
                viewport={{ once: false }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.8, 
                  ease: "easeOut" 
                }}
                className="flex gap-4 p-4 border-r-4 border-orange-500 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="text-orange-500 text-3xl mt-1">{icons[index]}</div>
                <div>
                  <h4 className="font-bold text-xl">{point.title}</h4>
                  <p className="text-gray-600 text-sm">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;