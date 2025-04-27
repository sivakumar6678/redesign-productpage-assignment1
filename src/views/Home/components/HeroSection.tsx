import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  featuresRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
  featuresRef,
  contactRef,
  aboutRef,
}) => {
  const stats = [
    { value: "2100+", label: "Qualified Doctors", accent: "text-[#00f0ff]" },
    { value: "1000+", label: "Hospitals", accent: "text-[#ff7d00]" },
    { value: "800+", label: "Treatment Plans", accent: "text-[#a855f7]" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#01052f] to-[#0a0e3a] overflow-hidden lg:h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00f0ff] mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#a855f7] mix-blend-screen filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        
        <div className="lg:pt-8 pt-6">
            <HomeNavbar
            scrollToSection={scrollToSection}
            featuresRef={featuresRef}
            contactRef={contactRef}
            aboutRef={aboutRef}
            />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] py-12">
          {/* Content Column */}
          <div className="order-1 lg:order-none">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">AI Healthcare Solution</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00f0ff]">
                AI Front Office
              </span> 
              <br />
              for Healthcare Agents
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Create <span className="font-semibold text-primary">AI Store</span> in 2 minutes. 
              Scale with <span className="font-semibold text-primary">Digital Marketing</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <HcfSignupPopup 
                popupButtonStatus 
                buttonChildren={
                  <Button 
                    variant="solid"
                    className="bg-gradient-to-r from-primary to-[#00a2ff] hover:from-primary/90 hover:to-[#00a2ff]/90 text-white shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 "
                  >
                    Get Started Free
                  </Button>
                } 
              />
              <Button 
                variant="plain"
                className="text-white border-white/20 hover:bg-white/10 hover:border-white/30"
                onClick={() => scrollToSection(featuresRef)}
              >
                See How It Works
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <p className={`text-3xl font-bold ${stat.accent}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative order-first lg:order-none">
            <div className="relative aspect-square w-full max-w-xl mx-auto">
              {/* Mockup Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[#a855f7]/10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Screen Content */}
                <div className="absolute inset-4 rounded-xl bg-[#020617] flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="inline-block mb-4 p-3 rounded-lg bg-primary/10">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">AI Healthcare Dashboard</h3>
                    <p className="text-gray-400 text-sm">Real-time patient management</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#00f0ff] opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-[#a855f7] opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;