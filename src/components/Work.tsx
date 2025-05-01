const Work = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center select-none">
        <div className="reveal">
          <h2 className="text-4xl font-bold mb-6 text-black">OUR WORK</h2>
          <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-16 text-black">
            At Metadise, we merge education and innovation in the web3 space. Through Metadise
            Academy, we empower individuals with the knowledge and skills needed to thrive in
            decentralized technologies. With Metadise Sim Racing, we bring these concepts to life—
            creating an interactive platform where users experience blockchain-powered gaming and
            digital asset ownership firsthand. Together, our initiatives build a community that learns,
            experiments, and leads the future of web3.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto reveal">
          <div className="p-6 rounded-lg">
            <img src="/Sarex.png" alt="SAREX 2024" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mt-4 text-black">Metadise Sim Racing</h3>
          </div>
          <div className="p-6 rounded-lg">
            <img src="/KBTAlaunch.JPG" alt="Kuching Blockchain Technology Association Pre-Launching" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mt-4 text-black">Metadise Academy</h3>
          </div>
        </div>
      </div>
    </section>;
};
export default Work;