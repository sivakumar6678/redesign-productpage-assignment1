import React from 'react';
import { motion } from 'framer-motion';
import aboutUs from '@/assets/images/about_us.gif';
import mission from '@/assets/images/our_mission.gif';
import challenges from '@/assets/images/challenges_solve.gif';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const FullPageSections = () => {
  return (
    <div className="scroll-smooth max-w-[1538px] mx-auto">
      <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col gap-y-20 md:gap-y-32">
        {/* ========== ABOUT US SECTION ========== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Image Section */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            className="w-full lg:w-1/2 flex items-center justify-center order-last lg:order-first"
          >
            <motion.img
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              src={aboutUs}
              alt="About us"
              className="w-full object-cover rounded-xl max-w-[400px] border-4 border-white shadow-lg transition-transform duration-300"
            />
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div custom={1.2} variants={fadeInUp} className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">About Us</h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>
            </motion.div>

            <motion.div custom={1.4} variants={fadeInUp} className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry...
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
              </p>
            </motion.div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[ 
                { title: "Modern Solutions", desc: "Leveraging AI technology for healthcare" },
                { title: "Patient-Centric", desc: "Personalized healthcare experiences" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={1.6 + idx * 0.2}
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-blue-50 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {idx === 0 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ========== MISSION SECTION ========== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 items-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl"
        >
          {/* Image Section */}
          <motion.div custom={1} variants={fadeInUp} className="w-full lg:w-1/2 flex items-center justify-center order-first lg:order-last">
            <motion.img
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              src={mission}
              alt="Our Mission"
              className="w-full object-cover rounded-xl max-w-md border-4 border-white shadow-lg transition-transform duration-300"
            />
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div custom={1.2} variants={fadeInUp} className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Mission</h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            <motion.div custom={1.4} variants={fadeInUp} className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Our mission is to simplify the complex medical tourism process...
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to become the leading platform for healthcare tourism management and digital transformation.
              </p>
            </motion.div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { title: "AI-Powered Solutions", desc: "Optimizing operations with advanced technology" },
                { title: "Growth Focus", desc: "Maximizing revenue and opportunities" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={1.6 + idx * 0.2}
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {idx === 0 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ========== CHALLENGES SECTION ========== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 items-center bg-[#01052f] text-white p-8 rounded-3xl"
        >
          {/* Image Section */}
          <motion.div custom={1} variants={fadeInUp} className="w-full lg:w-1/2 flex items-center justify-center order-last lg:order-first">
            <motion.img
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              src={challenges}
              alt="Challenges in Medical Tourism"
              className="w-full object-cover rounded-xl max-w-[400px] border-4 border-white/10 shadow-lg transition-transform duration-300"
            />
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div custom={1.2} variants={fadeInUp} className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Challenges We Solve</h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </motion.div>

            <motion.div custom={1.4} variants={fadeInUp} className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Medical tourism, especially in India, is plagued by disorganization and inefficiency...
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our platform addresses these pain points by streamlining lead management and improving operational efficiency.
              </p>
            </motion.div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { title: "Efficient Operations", desc: "Streamlined booking and management" },
                { title: "Enhanced Support", desc: "Improved patient communication" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={1.6 + idx * 0.2}
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(255,255,255,0.3)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/10 p-4 rounded-lg backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-blue-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {idx === 0 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586M7.586 14L11 10h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FullPageSections;
