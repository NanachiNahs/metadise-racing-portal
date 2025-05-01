const Brands = () => {
  return (
    <section className="py-20 bg-black text-white select-none">
      <div className="container mx-auto px-6 text-center">
        {/* OUR BUSINESS UNITS */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12">OUR BUSINESS UNITS</h2>
          <div className="flex justify-center items-center gap-20">
            {/* Metadise Sim Racing Logo */}
            <div className="max-w-xs">
              <img 
                src="/MSR.png" 
                alt="Metadise Sim Racing" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Metadise Academy Logo */}
            <div className="max-w-xs">
              <img 
                src="/academy-white.png" 
                alt="Metadise Academy" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* OUR PARTNERS */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12">OUR PARTNERS</h2>
          <div className="flex justify-center items-center gap-20">
            {/* Kuching Blockchain Technology Association Logo */}
            <div className="max-w-xs">
              <img 
                src="/White.png" 
                alt="Kuching Blockchain Technology Association" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Metadise Electronic Sports Club Logo */}
            <div className="max-w-xs">
              <img 
                src="/MESC.png" 
                alt="Metadise Electronic Sports Club" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* CERTIFIED BY */}
        <div>
          <h2 className="text-4xl font-bold mb-12">CERTIFIED BY</h2>
          <div className="flex justify-center items-center gap-20">
            {/* Malaysia Digital Logo */}
            <div className="max-w-xs">
              <img 
                src="/MDEC.png" 
                alt="Malaysia Digital" 
                className="w-full h-auto"
              />
            </div>
            
            {/* HRDCorp Logo */}
            <div className="max-w-xs">
              <img 
                src="/lovable-uploads/8a2ae-logo-training-provider_logo-registered-training-provider.png" 
                alt="HRDCorp Registered Training Provider" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;