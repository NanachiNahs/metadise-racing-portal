import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about' },
    { name: 'MSR', path: '/msr' },
    { name: 'WEB3 Academy', path: 'https://metadiseacademy.com/', target: "_blank" },
    { name: 'KBTA', path: 'https://www.kch-bta.com/', target: "_blank" },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  return <footer className="pt-20 pb-6 bg-gray-50">
    <hr></hr>
    <div className="container mx-auto px-6 pt-12 select-none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <img src="/lovable-uploads/4e6dd-metadise_logo-18.png" alt="Metadise Logo" className="h-48 mb-4 mx-auto mt-8"/>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-black">Quick Links</h3>
          <div className="text-black p-4 bg-white">
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  {link.target ? (
                    <a 
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-light transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.path}
                      className="hover:text-purple-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-black">Contact Us</h3>
          <address className="not-italic space-y-2 text-black">
            <p>THE PODIUM Block C-2-7 N C-2-8 Lot 21,</p>
            <p>Block 20B Kuching North Land District</p>
            <p>93350, Kuching, Sarawak</p>
            <p className="mt-4">Phone: +60 13-802 6696</p>
            <p>Email: metadise@gmail.com</p>
          </address>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6 text-center text-sm text-black">
        <p>© 2025 Metadise Sdn. Bhd. All Rights Reserved.</p>
      </div>
    </div>
  </footer>;
};

export default Footer;
