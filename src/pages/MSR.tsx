import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyComponent from "../components/slideshow";

const MSR = () => {
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
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/home.png')] bg-cover bg-center flex items-center relative overflow-hidden select-none">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="hero-content max-w-1200 mx-auto px-8 text-center animate-fade-up z-10">
          <h1 className="text-5xl mb-6 font-bold">
            Welcome to <span className="text-[#b74b4b]">Metadise Sim Racing</span>
          </h1>
          <p className="text-xl mb-8 max-w-[800px] mx-auto">
            Immerse yourself in the ultimate racing simulation. Experience the thrill of high-speed competition on meticulously recreated tracks from around the world. Whether you're a seasoned driver or new to racing, our state-of-the-art simulators deliver unparalleled realism and excitement.
          </p>
          <a
            className="btn inline-block px-11 py-4 bg-black text-[#b74b4b] border-2 border-[#b74b4b] rounded-full text-lg font-semibold tracking-widest transition duration-300 ease-in-out cursor-pointer hover:bg-[#b74b4b] hover:text-black hover:shadow-[0_0_15px_#b74b4b]"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Book Your Race Now
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-black text-white reveal select-none">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side - About Us Text */}
          <div className="text-left self-start">
            <span className="inline-block bg-[#111] px-4 py-2 rounded text-white text-sm font-semibold uppercase tracking-wider mb-6">
              About Us
            </span>
            <h2 className="text-4xl mb-6 font-semibold relative after:block after:w-16 after:h-1 after:bg-[#b74b4b] after:mt-4 text-[#b74b4b]">
              Discover the World of Metadise Sim Racing
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify">
            Metadise—launched on 6 September 2024 by founder Dylan Ang Wee Chin—is a Sarawak-based sim racing hub blending pro-grade technology (direct-drive wheelbases, load cell pedals) with motorsport talent development. Supported by TEGAS Digital Village (TDV) and the TEGAS Fundraising Accelerator (TFA), it drives Sarawak’s digital economy while advancing blockchain/Web3 via the Kuching Blockchain Technology Association (KBTA) through workshops and hackathons. Metadise aims to elevate Sarawak’s global sim racing profile while cultivating talent and community.
            </p>
            <br />
            <a href="#" className="text-[#b74b4b] hover:text-white transition-colors font-semibold">
              Learn More &rarr;
            </a>
          </div>

          {/* Right Side - 2x2 Grid Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🏙️</div>
              <h4 className="text-xl font-semibold mb-2">Professional Setup</h4>
              <p className="text-gray-300">
                State-of-the-art simulators and rigs designed to replicate real-world racing conditions.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-semibold mb-2">Competitive Tournaments</h4>
              <p className="text-gray-300">
                Regular leagues, time trials, and special events to challenge racers of all skill levels.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
              <p className="text-gray-300">
                A vibrant, inclusive community of like-minded enthusiasts supporting each other's journey.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-semibold mb-2">Continuous Growth</h4>
              <p className="text-gray-300">
                Regular updates and improvements based on community feedback to enhance your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section id="mission-vision" className="bg-black text-white py-16 reveal select-none">
      <div className="container mx-auto px-4">
        {/* Mission Block */}
        <div 
          className="mission-block flex items-center justify-between gap-8 mb-16 p-8 rounded-lg"
          style={{
            backgroundImage: "url('/wavy-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="text-content w-full">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#86a8e7] bg-clip-text text-transparent">Mission</span>
            </h2>
            <h3 className="text-2xl text-[#ff7f7f] uppercase font-semibold mb-4">
              To Elevate Virtual Racing to a Professional and Immersive Experience
            </h3>
            <p className="text-lg text-white-300">
              Our mission is to bridge the gap between simulation and reality by delivering cutting-edge technology, authentic physics, and a competitive environment that empowers racers to test their limits and grow as drivers.
            </p>
          </div>
        </div>

        {/* Vision Block */}
        <div className="vision-block flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Slideshow Container */}
          <div className="w-full sm:w-2/3 relative overflow-hidden rounded-lg bg-[#111]">
            <MyComponent />
          </div>

          {/* Vision Text */}
          <div 
            className="w-full sm:w-1/3 p-8 rounded-lg"
            style={{
              backgroundImage: "url('/wavy-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#86a8e7] bg-clip-text text-transparent">Vision</span>
            </h2>
            <h3 className="text-2xl text-[#ff7f7f] uppercase font-semibold mb-4">
              To Become the Global Leader in Virtual Racing Experiences
            </h3>
            <p className="text-lg text-white-300">
              We envision a future where virtual and real-world motorsports seamlessly integrate, enabling fans and competitors to engage, train, and compete on a global scale. By leveraging technology and community collaboration, we aim to set new standards in eRacing.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Upcoming Listing Section */}
      <section id="upcoming-listing" className="bg-black text-white py-16 reveal select-none">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Why you should <span className="bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#86a8e7] bg-clip-text text-transparent">choose us</span>
          </h2>
          <p className="text-xl text-center max-w-4xl mx-auto mb-16 text-gray-300">
            Metadise stands out as more than just a premier simulation racing hub—it's a visionary academy committed to shaping the future of motorsports.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
              <span className="text-4xl block mb-4">🎮</span>
              <h4 className="text-2xl text-[#b74b4b] mb-4 font-semibold">Professional-Grade Racing Technology</h4>
              <p className="text-gray-300">
                Metadise features cutting-edge equipment like direct-drive wheelbases, load cell pedals, and immersive audio systems, offering a racing experience that mirrors real-world motorsports.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
              <span className="text-4xl block mb-4">🏫</span>
              <h4 className="text-2xl text-[#b74b4b] mb-4 font-semibold">Dedicated Training Academy</h4>
              <p className="text-gray-300">
                Metadise is committed to becoming a renowned academy for preparing racers to excel, especially with the upcoming Serapi Race Track, positioning itself as a key player in fostering motorsport talent in the region.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
              <span className="text-4xl block mb-4">🏆</span>
              <h4 className="text-2xl text-[#b74b4b] mb-4 font-semibold">Expertise and Vision</h4>
              <p className="text-gray-300">
                Founded by Dylan Ang Wee Chin, Metadise combines years of passion and innovation to nurture drivers, build a strong racing community, and advance the eRacing industry.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
              <span className="text-4xl block mb-4">🏢</span>
              <h4 className="text-2xl text-[#b74b4b] mb-4 font-semibold">Support from TEGAS Digital Village (TDV)</h4>
              <p className="text-gray-300">
                Backed by TEGAS and part of the TEGAS Fundraising Accelerator (TFA), Metadise contributes to Sarawak's digital economy and exemplifies innovation and growth.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
              <span className="text-4xl block mb-4">🗂️</span>
              <h4 className="text-2xl text-[#b74b4b] mb-4 font-semibold">Pioneering Blockchain and Web3 Integration</h4>
              <p className="text-gray-300">
                Through its collaboration with the Kuching Blockchain Technology Association (KBTA), Metadise empowers the community with blockchain education, fostering a culture of innovation and collaboration.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform">
              <span className="text-4xl block mb-4">🗺️</span>
              <h4 className="text-2xl text-[#b74b4b] mb-4 font-semibold">Global Ambitions and Local Impact</h4>
              <p className="text-gray-300">
                With its mission to bridge simulation and reality and its vision of becoming a global leader in virtual motorsports, Metadise is set to redefine the racing experience while elevating Sarawak's prominence in the global motorsport arena.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSR;