// HeroSection.jsx

import React, { useContext } from 'react';

import { LanguageContext } from '../LanguageContext';

import { motion } from 'framer-motion';



function HeroSection() {

  const { t } = useContext(LanguageContext);



  return (

    <section id='home' className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center">

      {/* تأثير الإضاءة الخلفية */}

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px] -z-0"></div>

     


      <div className="container mx-auto px-6 md:px-10 z-10">

       


        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

         


          <motion.div

            initial={{ x: -100, opacity: 0 }}

            animate={{ x: 0, opacity: 1 }}

            transition={{ duration: 1, ease: "easeOut" }}

            className="flex-1 w-full flex justify-center md:justify-start"

          >

       <img src="Hero.png" alt="Manara" className="w-full max-w-lg drop-shadow-2xl md:w-xl" />        

  </motion.div>




          <motion.div

            initial={{ x: 100, opacity: 0 }}

            animate={{ x: 0, opacity: 1 }}

            transition={{ duration: 1, ease: "easeOut" }}

            className="flex-1 w-full text-right"

          >

            <span className="text-orange-500 font-semibold block mb-4">

              {t.heroSub}

            </span>

           

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">

              {t.heroTitle}

            </h1>

           

            <p className="text-gray-400 text-lg max-w-xl ml-auto mb-8 leading-relaxed">

              {t.heroDesc}

            </p>

           

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all">

              {t.contact}

            </button>

          </motion.div>



        </div>

      </div>

    </section>

  );

}



export default HeroSection; 