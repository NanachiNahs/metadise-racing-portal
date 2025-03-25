const About = () => {
  return <section className="py-20 bg-white select-none">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h1 className="text-5xl font-bold mb-6 text-zinc-950">ABOUT OUR COMPANY</h1>
            <h2 className="text-4xl mb-6 text-zinc-950">
              This is the space to introduce the business and what it has to offer.
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-16 text-zinc-950 text-justify">
              This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
            </p>
            <button className="px-10 py-5 text-xl rounded-full transition-colors duration-300 bg-zinc-950 hover:bg-zinc-800 text-zinc-50">
              Read More
            </button>
          </div>
          <div className="reveal delay-200">
            <img src="/lovable-uploads/c556b-metadise-racer_2.png" alt="About Metadise" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default About;