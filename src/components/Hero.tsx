const Hero = () => {
  return (
    <section className="min-h-screen bg-[url('/Artboard_1.png')] bg-cover bg-center flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center select-none">
        <div className="w-full md:w-5/12 animate-fade-up">
          <img 
            src="/metadise_white.png" 
            alt="Metadise" 
            className="w-96 mb-8 mx-auto"
          />
        </div>
        <div className="w-full md:w-1/12 animate-fade-up"></div>
        <div className="w-full md:w-6/12 space-y-4 animate-fade-up delay-200">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            The go-to-venue for anything WEB3.0 <br></br>related in Sarawak
          </h1>
          <div className="text-xl md:text-2xl text-white">
            #METADISE
            <br />
            #EATPLAYEARN
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
