
const Brands = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center select-none">
        <div className="reveal">
          <h2 className="text-4xl font-bold mb-6">OUR BRANDS</h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-16">
            Our new space will be a cutting-edge Web3 hub and an exhilarating sim racing café, designed to fuel your passion for technology and speed like never before!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 items-center max-w-8xl mx-auto reveal">
          <div className="p-1">
            <img src="/MSR.png" alt="Metadise Sim Racing" className="w-full h-auto" />
          </div>
          <div className="p-1">
            <img src="/Web3.png" alt="Web3 Academy" className="w-full h-auto" />
          </div>
          <div className="p-1">
            <img src="/White.png" alt="Kuching Blockchain" className="w-full h-auto" />
          </div>
          <div className="p-1">
            <img src="/MESC.png" alt="Kuching Blockchain" className="w-full h-auto" />
          </div>
          <div className="p-1">
            <img src="/MDEC.png" alt="Kuching Blockchain" className="w-full h-auto" />
          </div>
          <div className="p-1">
            <img src="/lovable-uploads/8a2ae-logo-training-provider_logo-registered-training-provider.png" alt="HRDC" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
