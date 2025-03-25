import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Web3Academy = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="container mx-auto px-6 select-none">
          <div className="max-w-5xl mx-auto">
            <div className="relative mb-16 reveal">
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/0c8a7-whatsapp-image-2024-10-10-at-11.26.24-am-2.jpeg"
                  alt="Web3 Academy Classroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            <div className="text-center reveal">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                METADISE BLOCKCHAIN & WEB3 ACADEMY
              </h1>
              <div className="space-y-6 text-gray-200 max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl leading-relaxed reveal delay-100">
                  Introducing Sarawak's first blockchain courses and programs that are supported by a university.
                </p>
                <p className="text-lg md:text-xl leading-relaxed reveal delay-200">
                  In line with Sarawak's Digital Economy strategy, we aim to bring awareness and build the foundations of tomorrow's builders so they can participate in this fast growing industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6 select-none">
          <div className="flex flex-col space-y-16 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 reveal">
              <h2 className="text-4xl font-bold text-white whitespace-nowrap md:w-48">
                VISION
              </h2>
              <p className="text-xl leading-relaxed text-gray-300 flex-1">
                To empower developers, start-up aspirants, decision-makers and the public to gain a solid understanding of blockchain and Web3 so that they can make informed decisions in building, using and creating sound policies and initiatives relating to this technology.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 reveal delay-200">
              <h2 className="text-4xl font-bold text-white whitespace-nowrap md:w-48">
                MISSION
              </h2>
              <p className="text-xl leading-relaxed text-gray-300 flex-1">
                To become the epicenter for blockchain and Web3 education and community in Sarawak where the public, developers, industry players and students can learn about the technology in an responsible and productive manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 select-none">
          <h2 className="text-5xl font-bold text-center mb-20 reveal bg-black bg-clip-text text-transparent">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center max-w-4xl mx-auto reveal delay-100">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/lovable-uploads/e1bb4-cropped-logo-ukiss-4146607897-e1680617292137.png"
                alt="Zukiss"
                className="w-full max-w-[150px] mx-auto"
              />
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/lovable-uploads/8a2ae-logo-training-provider_logo-registered-training-provider.png"
                alt="HRD Corp"
                className="w-full max-w-[150px] mx-auto"
              />
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/pangu.png"
                alt="Fangli Kenal"
                className="w-full max-w-[150px] mx-auto"
              />
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/MDEC_black.png"
                alt="Malaysia Digital Company"
                className="w-full max-w-[150px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6 select-none">
          <h2 className="text-5xl font-bold text-center mb-8 reveal bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            TESTIMONIALS
          </h2>
          <p className="text-2xl text-center text-gray-200 mb-16 reveal delay-100">
            Client Success Stories: Hear What Our Clients Say
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm reveal delay-200">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-300 text-center mb-6">
                "This is the space to share a review from one of the business's clients or customers."
              </p>
              <p className="text-xl font-semibold text-center text-purple-400">
                CUSTOMER'S NAME
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm reveal delay-300">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-300 text-center mb-6">
                "This is the space to share a review from one of the business's clients or customers."
              </p>
              <p className="text-xl font-semibold text-center text-purple-400">
                CUSTOMER'S NAME
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Web3Academy;
