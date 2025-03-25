const Work = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center select-none">
        <div className="reveal">
          <h2 className="text-4xl font-bold mb-6 text-black">OUR WORK</h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-16 text-black">
            We create impactful brand experiences that resonate with our audience. Our role is to help brands tell their story and provide a seamless user experience in order to form meaningful connections through our events. These are some of the experiences we have worked on and created so far.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto reveal">
          <div className="p-6 rounded-lg">
            <img src="/Sarex.png" alt="SAREX 2024" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mt-4 text-black">SAREX 2024</h3>
          </div>
          <div className="p-6 rounded-lg">
            <img src="/KBTAlaunch.JPG" alt="Kuching Blockchain Technology Association Pre-Launching" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mt-4 text-black">Kuching Blockchain Technology Association Pre-Launching</h3>
          </div>
        </div>
      </div>
    </section>;
};
export default Work;