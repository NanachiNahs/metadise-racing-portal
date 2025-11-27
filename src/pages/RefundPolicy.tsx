import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-up">
            REFUND POLICY
          </h1>
          <p className="text-xl text-gray-300 animate-fade-up delay-200">
            Our policy on refunds and returns
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Non-Refundable Services */}
          <div className="mb-12 bg-red-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Non-Refundable Services</h2>
            <p className="text-xl text-red-900 leading-relaxed font-semibold mb-6">
              All ticket purchases and booking purchases are strictly non-refundable and non-deferrable.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Once a ticket or booking has been purchased and confirmed, no refunds will be issued under any circumstances. This policy applies to all events, services, and bookings offered through Metadise Sdn. Bhd.
            </p>
          </div>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-500 italic">
              Last updated: November 27, 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
