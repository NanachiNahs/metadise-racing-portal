const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-16 max-w-6xl">
        {/* Company Header - Left Aligned */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-black">METADISE SDN BHD</h1>
        </div>
        
        {/* Company Description - Left Aligned */}
        <div className="mb-8">
          <p className="text-lg text-black">
            Malaysia Digital (MD) Status Company under Malaysia Digital Economy Corporation (MDEC) and certified as HRDCorp training provider.
          </p>
        </div>
        
        {/* Image - Full Width */}
        <div className="mb-2">
          <img 
            src="metadise.jpeg" 
            alt="Metadise Team" 
            className="w-full"
          />
        </div>
        
        {/* Image Caption - Centered */}
        <div className="text-center mb-8">
          <p className="text-base italic text-blue-800">
            Photo of James Gan, CEO of Metadise with VIPs
          </p>
        </div>
        
        {/* Mission Statement - Left Aligned */}
        <div>
          <p className="text-lg text-black">
            Metadise, founded in December 2022 dedicated to empowering individuals and organisations through innovative education in key areas such as Artificial Intelligence, Cybersecurity, Blockchain, and Digital Literacy, all under the HRD Corp framework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;