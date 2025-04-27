import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

const ContactForm = () => {
    const [formState, setFormState] = useState<{
        fullname: string;
        email: string;
        subject: string;
        message: string;
    }>({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    interface FormState {
        fullname: string;
        email: string;
        subject: string;
        message: string;
    }

    interface ErrorResponse {
        response?: {
            data: {
                message: string;
            };
        };
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState)
            setIsSubmitting(false);
            toast.push(
                <Notification title={'Success'} type={'success'}>
                    Successfully submitted
                </Notification>,
            );
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err: unknown) {
            setIsSubmitting(false);
            const error = err as ErrorResponse;
            toast.push(
                <Notification title={error?.response?.data.message} type={'danger'}>
                    {error?.response?.data.message}
                </Notification>,
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const hoverEffect = {
        scale: 1.05,
        transition: { duration: 0.3 }
    };

    const tapEffect = {
        scale: 0.98
    };

    return (
        <div className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Column - Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-10">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Let's build something <span className="text-primary">amazing</span> together
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Whether you have questions about GoGetWell.AI, need technical support, or want to explore partnership opportunities, our team is ready to assist you.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <motion.div 
                                whileHover={hoverEffect}
                                whileTap={tapEffect}
                                className="bg-white p-6 rounded-xl shadow-md"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Office</h3>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <FiMapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Address</p>
                                        <p className="text-gray-900">
                                            123 Tech Park, Innovation Road<br />
                                            Bangalore, Karnataka 560001<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={hoverEffect}
                                whileTap={tapEffect}
                                className="bg-white p-6 rounded-xl shadow-md"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <BiPhone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Phone</p>
                                            <a href="tel:+919811396858" className="text-gray-900 hover:text-primary transition-colors">
                                                +91 9811396858
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <CgMail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Email</p>
                                            <a href="mailto:hello@gogetwell.ai" className="text-gray-900 hover:text-primary transition-colors">
                                                hello@gogetwell.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                            variants={itemVariants}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <motion.a 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://x.com/gogetwellai" 
                                    target='_blank' 
                                    className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors"
                                >
                                    <BsTwitter className="w-6 h-6 text-primary" />
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://www.linkedin.com/company/gogetwellai/" 
                                    target='_blank' 
                                    className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors"
                                >
                                    <BsLinkedin className="w-6 h-6 text-primary" />
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://github.com/gogetwellai" 
                                    target='_blank' 
                                    className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors"
                                >
                                    <BsGithub className="w-6 h-6 text-primary" />
                                </motion.a>
                            </div>
                        </motion.div>
                           
                        </div>

                        {/* Social Links */}
                        
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-2xl shadow-xl p-6 sm:p-10"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                        <p className="text-gray-600 mb-8">
                            Fill out the form below and we'll get back to you as soon as possible. Typically we respond within 24 hours.
                        </p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div 
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'fullname' || formState.fullname ? 'text-primary' : 'text-gray-400'}`}>
                                    <BiUser className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formState.fullname}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('fullname')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                    required
                                />
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'email' || formState.email ? 'text-primary' : 'text-gray-400'}`}>
                                    <CgMail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                    required
                                />
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('subject')}
                                    onBlur={() => setFocused('')}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                    required
                                />
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.01 }}
                                className="relative"
                            >
                                <textarea
                                    name="message"
                                    placeholder="Your message..."
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows={5}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    loading={isSubmitting}
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md"
                                >
                                    <span>Send Message</span>
                                    <BiSend className="w-5 h-5" />
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;