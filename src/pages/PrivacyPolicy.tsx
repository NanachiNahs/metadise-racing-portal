import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-up">
            PRIVACY POLICY
          </h1>
          <p className="text-xl text-gray-300 animate-fade-up delay-200">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Your Privacy */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Your Privacy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We respect the privacy of your personal information and we strive to maintain the confidentiality of your personal information given by you. The objective of collecting your personal data is to deliver products and services, future marketing purposes and to improve our services to you. Only our authorized employees have access to your personal information. We will not disclose information about our customers to third parties except where it is part of providing a service to you - e.g. arranging for a product to be sent to you, carrying out credit and other security checks and for the purposes of customer research and profiling or where we have your express permission to do so. We may also be required to disclose such information to regulators, lawyers, auditors, other companies in the same group, third party service providers and appointed marketing agency.
            </p>
          </div>

          {/* Your Consent */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Your Consent</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We will not sell your name, address, e-mail address, credit card information or personal information to any third party (excluding partners from whom you may have linked to our site) without your permission.
            </p>
          </div>

          {/* Communication & Marketing */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Communication & Marketing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you have made a purchase from our store we may occasionally update you on our latest products, news and special offers via e-mail, post & telephone. You will also be given the opportunity to receive such communications from us and selected third parties when you become a member of Metadise Sdn. Bhd.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              All Metadise Sdn. Bhd. members have the option to opt-out of receiving marketing communications from us and/or selected third parties. If you do not wish to continue to receive marketing from us and/or selected third parties you should opt-out by visiting 'Your Details' in 'Your Account' on the Metadise Sdn. Bhd. website. You can access 'Your Account' once you register and login. Or click on the 'unsubscribe' link in any email communications which might we send you.
            </p>
          </div>

          {/* What are Cookies? */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">What are Cookies?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A cookie is a small information file that is sent to your computer and is stored on your hard drive. If you have registered with us then your computer will store an identifying cookie which will save you time each time you re-visit Metadise Sdn. Bhd., by remembering your email address for you. You can change the settings on your browser to prevent cookies being stored on your computer without your explicit consent.
            </p>
          </div>

          {/* Site Statistics */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Site Statistics</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may disclose aggregate, anonymised statistics about the number of visitors to this Website or number of purchases made as required by our investors. We use an independent measurement and research company to gather data regarding the visitors to this Website on our behalf using cookies and code which is embedded in the site. Both the cookies and the embedded code provide statistical information about visits to pages on the site, the duration of individual page view, paths taken by visitors through the site, data on visitors' screen settings and other general information. Metadise Sdn. Bhd. uses and stores this type of information, as with that obtained from other cookies used on the site, to help it improve the services to its users. Further information regarding the way in which this information is obtained and used can be obtained by contacting us.
            </p>
          </div>

          {/* Disclosures of your information */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Disclosures of Your Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We may disclose your personal information to any of our group of companies. We may also disclose your personal information to third parties:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>In the event that Metadise Sdn. Bhd. sells or buys any business or assets.</li>
              <li>If Metadise Sdn. Bhd. or substantially all of its assets are acquired by a third party, in which case personal data which we hold about our customers may be one of the transferred assets; or</li>
              <li>If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of; or to protect the rights, property, or safety of FVSB, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.</li>
            </ul>
          </div>

          {/* Third Party Sites */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Third Party Sites</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our site may contain links to and from the websites of our partner networks, advertisers and other third parties. If you follow a link to any of these websites, please note that they have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
            </p>
          </div>

          {/* Checking Your Details */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">Checking Your Details</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you wish to verify the details you have submitted to Metadise Sdn. Bhd. you may do so by contacting us via the e-mail address or address given below. Our security procedures mean that we may request proof of identity before we reveal information. This proof of identity will take the form of your e-mail address and password submitted upon registration. You must therefore keep this information safe as you will be responsible for any action which we take in response to a request from someone using your e-mail and password. We would strongly recommend that you do not use the browser's password memory function as that would permit other people using your terminal to access your personal information.
            </p>
          </div>

          {/* Contacting Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Contacting Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are always pleased to hear from our customers (even if it is a complaint!). We are always grateful for any time you spend providing us with the knowledge we need to ensure our customers are completely satisfied - we want you to return to the site and to recommend us to your friends and family. If you have any questions or feedback about this statement, or if you would like us to stop processing your information, please do not hesitate to contact a member of the Metadise Sdn. Bhd. team, who will be delighted to answer any questions you may have.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Email: <a href="mailto:metadise.io@gmail.com" className="text-blue-600 hover:text-blue-800 underline">metadise.io@gmail.com</a><br />
              Phone: +60 13-802 6696
            </p>
          </div>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-500 italic">
              Last updated: November 5, 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
