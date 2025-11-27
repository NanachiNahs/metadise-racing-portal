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
            CANCELLATION, REFUND & POLICY ON SERVICE
          </h1>
          <p className="text-xl text-gray-300 animate-fade-up delay-200">
            Our cancellation and refund policy
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Cancellation Period */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Cancellation Period</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Customers may cancel their service booking within 24 hours of making the reservation without penalty.
            </p>
          </div>

          {/* Cancellation Fees */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Cancellation Fees</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If cancellation occurs more than 24 hours after booking, a cancellation fee of 20% of the total service cost will be charged.
            </p>
          </div>

          {/* Refund Eligibility */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Refund Eligibility</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Refunds will be issued for cancellations made within the allowable cancellation period (24 hours from booking). Refunds will be processed within 5-7 business days and will be credited back to the original method of payment.
            </p>
          </div>

          {/* Non-Refundable Services */}
          <div className="mb-12 pb-8 border-b border-gray-200 bg-red-50 p-6 rounded">
            <h2 className="text-3xl font-bold text-red-700 mb-4">Non-Refundable Services</h2>
            <p className="text-lg text-red-900 leading-relaxed font-semibold">
              All ticket purchases/booking purchases are strictly non-refundable and non-deferrable.
            </p>
          </div>

          {/* Process for Cancellation */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Process for Cancellation</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To cancel a service booking, customers must contact our customer service department at <a href="mailto:metadise.io@gmail.com" className="text-blue-600 hover:text-blue-800 underline">metadise.io@gmail.com</a> or <a href="tel:0138026696" className="text-blue-600 hover:text-blue-800 underline">0138026696</a>
            </p>
          </div>

          {/* Changes to Reservations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Changes to Reservations</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Changes to reservation dates or times may be accommodated depending on availability and must be requested at least 48 hours before the scheduled service time. Additional charges may apply for changes made outside of this timeframe.
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
