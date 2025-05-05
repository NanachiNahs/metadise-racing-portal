const Brands = () => {
  return (
    <section className="py-10 md:py-20 bg-black text-white select-none">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* OUR BUSINESS UNITS */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">OUR BUSINESS UNITS</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            {/* Metadise Sim Racing Logo */}
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/MSR.png"
                alt="Metadise Sim Racing"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Metadise Academy Logo */}
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/academy-white.png"
                alt="Metadise Academy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* OUR PARTNERS */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">OUR PARTNERS</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            {/* Kuching Blockchain Technology Association Logo */}
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/White.png"
                alt="Kuching Blockchain Technology Association"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Metadise Electronic Sports Club Logo */}
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/MESC.png"
                alt="Metadise Electronic Sports Club"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* CERTIFIED BY */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">CERTIFIED BY</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            {/* Malaysia Digital Logo */}
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/MDEC.png"
                alt="Malaysia Digital"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* HRDCorp Logo */}
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/lovable-uploads/8a2ae-logo-training-provider_logo-registered-training-provider.png"
                alt="HRDCorp Registered Training Provider"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;