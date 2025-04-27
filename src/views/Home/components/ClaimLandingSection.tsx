import SignUpForm from '@/views/auth/SignUp';
import React from 'react';
import { BiBot, BiGlobe, BiMessageSquare, BiTrendingUp } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { LuBuilding2 } from 'react-icons/lu';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ClaimLandingSection = () => {
    const features = [
        { icon: <BiGlobe className="w-6 h-6 text-primary" />, title: 'Online Website With AI Agent', description: 'Intelligent digital presence with 24/7 automated assistance' },
        { icon: <LuBuilding2 className="w-6 h-6 text-primary" />, title: 'Build Digital Business', description: 'Scale your operations with our powerful tools' },
        { icon: <BiMessageSquare className="w-6 h-6 text-primary" />, title: 'Patient Conversation', description: 'Seamless communication through AI-powered chat' },
        { icon: <BiTrendingUp className="w-6 h-6 text-primary" />, title: 'Boost Revenue', description: 'Increase your earnings with better conversion' },
        { icon: <FaUsers className="w-6 h-6 text-primary" />, title: 'Lead Generation Support', description: 'Convert visitors to clients automatically' },
        { icon: <CgLock className="w-6 h-6 text-primary" />, title: '24/7 Support for patient', description: 'Round-the-clock assistance for your patients' }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const hoverEffect = {
        scale: 1.03,
        y: -5,
        transition: { duration: 0.3 }
    };

    const tapEffect = {
        scale: 0.98
    };

    return (
        <div className="bg-gradient-to-br from-white to-indigo-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Features Grid */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={hoverEffect}
                            whileTap={tapEffect}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-xl">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-10"
                >
                    <motion.div 
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-primary to-indigo-600 p-5 rounded-full shadow-lg"
                    >
                        <BiBot className="w-14 h-14 text-white" />
                    </motion.div>

                    <div className="max-w-3xl space-y-6">
                        <motion.h1 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl font-bold text-gray-900 leading-tight"
                        >
                            Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Digital Front Office</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-600"
                        >
                            Transform your online presence with our AI-powered platform that automates patient interactions and grows your practice 24/7
                        </motion.p>
                    </div>

                    {/* Stats Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8"
                    >
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-3xl font-bold text-primary">500+</div>
                            <div className="text-sm text-gray-500">Healthcare Providers</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-3xl font-bold text-primary">90%</div>
                            <div className="text-sm text-gray-500">Patient Satisfaction</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-3xl font-bold text-primary">24/7</div>
                            <div className="text-sm text-gray-500">AI Availability</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-3xl font-bold text-primary">5min</div>
                            <div className="text-sm text-gray-500">Setup Time</div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="w-full max-w-2xl space-y-6"
                    >
                        <div className="relative">
                            <input
                                disabled
                                type="text"
                                placeholder="GoGetWell.ai/your_name"
                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg font-medium"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                .ai
                            </div>
                        </div>
                        
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <HcfSignupPopup 
                                hcfLogin 
                                popupButtonStatus 
                                buttonChildren={
                                    <button className="w-full bg-gradient-to-r from-primary to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
                                        <span>Join the Waiting List</span>
                                        <FiArrowRight className="w-5 h-5" />
                                    </button>
                                } 
                            />
                        </motion.div>
                        
                        <p className="text-sm text-gray-500">
                            Limited spots available. Get early access to our revolutionary platform.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ClaimLandingSection;