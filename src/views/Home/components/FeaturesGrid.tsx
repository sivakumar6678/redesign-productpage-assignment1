import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt className="w-8 h-8" />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FaUserSecret className="w-8 h-8" />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <BiMessageSquare className="w-8 h-8" />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FiFileText className="w-8 h-8" />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: <BiTrendingUp className="w-8 h-8" />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <BsDatabase className="w-8 h-8" />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: <LuLanguages className="w-8 h-8" />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <BiCreditCard className="w-8 h-8" />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: <BiSearch className="w-8 h-8" />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "from-cyan-500 to-cyan-600"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase mb-5 animate-fade-in">
            Our Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 animate-slide-up">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">AI Healthcare</span> Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-slow">
            Everything you need to transform your healthcare practice with AI-powered solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              {/* Animated Background Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${solution.color}`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col items-start justify-between space-y-6">
                <div
                  className={`bg-gradient-to-br ${solution.color} p-5 rounded-xl text-white mb-4 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="flex items-center gap-2 text-primary group-hover:text-white font-medium tracking-wide hover:underline">
                    Learn more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FeaturesGrid;
