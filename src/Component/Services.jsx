import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { motion } from "framer-motion";

import {
  FiCode,
  FiUsers,
  FiMonitor,
  FiBriefcase,
} from "react-icons/fi";

function Services() {
  const { t } = useContext(LanguageContext);

  const icons = [
    <FiCode />,
    <FiUsers />,
    <FiMonitor />,
    <FiBriefcase />,
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-5 rounded-full"></div>

          <h2 className="text-4xl font-bold text-[#211551]">
            {t.servicesTitle}
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            {t.servicesDesc}
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {t.servicesCards.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .2,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100 hover:border-orange-300 transition-all"
            >

              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-8">

                <div className="text-orange-500 text-3xl">
                  {icons[index]}
                </div>

              </div>

              <h3 className="text-2xl font-bold text-[#211551] mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;