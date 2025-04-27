import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import ClaimLandingSection from './components/ClaimLandingSection';

const Home: React.FC = () => {
    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const FqRef = useRef(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const hcf = document.querySelector('.hcf-profile');
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > lastScrollTop) {
                hcf?.classList.add('hcf-profile-fixed');
            } else if (scrollTop < lastScrollTop) {
                hcf?.classList.remove('hcf-profile-fixed');
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div>
                {/* Hero Section */}
                <HeroSection
                    scrollToSection={scrollToSection}
                    featuresRef={FqRef}
                    contactRef={contactRef}
                    aboutRef={aboutRef}
                />

                {/* Claim Landing section  */}
                <div className="!bg-[#eff6ff] relative">
                    <ClaimLandingSection />
                </div>

                {/* Features Section */}
                <div className="!bg-[#eff6ff] relative">
                    <FeaturesGrid />
                </div>



                {/* Info Section */}
                <div className="!bg-white relative" ref={aboutRef}>
                    <InfoSection />
                </div>

                {/* FAQs Section */}
                <div className="relative bg-white" ref={FqRef}>
                    <HomeFAQs />
                </div>

                {/* Contact Form */}
                <div className="bg-white relative" ref={contactRef}>
                    <ContactForm />
                </div>

                {/* Footer */}
                <MainFooter />
            </div>
        </>
    );
};

export default Home;