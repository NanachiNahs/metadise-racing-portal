import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
    <div className="min-h-screen bg-black text-white select-none">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex bg-[url('/Artboard_2.png')] bg-cover bg-center items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 pt-20">
        <img 
          src="/Isometric.png"
          alt="Metadise Visualization" 
          className="w-full max-h-[50vh] md:max-h-[80vh] md:h-auto object-contain mx-auto reveal animate-float"
        />
        <div className="reveal pb-12">
          <h1 className="text-4xl md:text-4xl font-bold mb-8 text-white">Executive Board and Advisors</h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            With decades of collective experience in blockchain, decentralized technologies, and digital innovation, our Board of Directors and Advisors guide our mission—driving impactful results and advancing the future of web3.
          </p>
        </div>
      </div>
    </div>

      {/* Team Section */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 reveal">TEAM</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "JAMES GAN",
                role: "CEO",
                image: "/team-01.png",
                description: "James is a serial entrepreneur with over 30 years of experience in Asia. Trained as a software engineer, he started in telecommunications (with AT&T as a major client) and has successfully spun off businesses in industries from IT to Oil & Gas and Real Estate Development."
              },
              {
                name: "AFIQ FADHLI NARAWI",
                role: "ADVISOR",
                image: "/team-02.png",
                description: "Afiq is the founder and President of Sarawak Esports Association. His past achievement and contribution led him to be elected as Deputy President of Malaysia Esports Federation."
              },
              {
                name: "DYLAN ANG WEE CHIN",
                role: "COO",
                image: "/team-03.png",
                description: "Dylan is an enthusiastic blockchain/crypto person and has been actively participating in blockchain projects since 2017."
              }
            ].map((member, index) => (
              <div 
                key={member.name} 
                className={`reveal delay-${index * 200}`}
              >
                <div className="bg-zinc-800 rounded-xl p-8 hover:bg-zinc-700 transition-all duration-300 h-full">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto mb-6 rounded-full object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-3 max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-16 reveal">OUR VISION</h2>
          <div className="space-y-8 text-center pb-20">
            <p className="text-xl leading-relaxed text-gray-300 reveal delay-100">
              Metadise will guide the community in an engaging way that is easy for beginners to understand through its very own educational workshops.
            </p>
          </div>
          <h2 className="text-5xl font-bold text-center mb-16 reveal">OUR MISSION</h2>
          <div className="space-y-8 text-center">
            <p className="text-xl leading-relaxed text-gray-300 reveal delay-100">
              Metadise seeks to become the leading blockchain hub in the whole of Sarawak, known for its commitment to building a community of likeminded people who share the same values and aspirations for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal">TESTIMONIALS</h2>
          <p className="text-2xl text-center text-gray-300 mb-20 reveal delay-100">
            Client Success Stories: Hear What Our Clients Say
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                stars: 5,
                review: "This is the space to share a review from one of the business's clients or customers.",
                name: "CUSTOMER'S NAME"
              },
              {
                stars: 5,
                review: "This is the space to share a review from one of the business's clients or customers.",
                name: "CUSTOMER'S NAME"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`reveal delay-${index * 200} bg-zinc-800 rounded-xl p-8 hover:bg-zinc-700 transition-all duration-300`}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-yellow-400 mx-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-center mb-6">{testimonial.review}</p>
                <p className="text-lg font-bold text-center text-purple-400">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;
