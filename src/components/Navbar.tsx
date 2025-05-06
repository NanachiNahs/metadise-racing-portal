import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [window.location.pathname]);

  // Define the navigation items with their proper paths and external flag
  const navItems = [
    { name: 'HOME', path: '/', external: false },
    { name: 'ABOUT', path: '/about', external: false },
    { name: 'MSR', path: '/msr', external: false },
    { name: 'ACADEMY', path: 'https://metadiseacademy.com/', external: true },
    { name: 'KBTA', path: 'https://www.kch-bta.com/', external: true },
    { name: 'CONTACT US', path: '/contact-us', external: false }
  ];

  // Function to render navigation item - either Link or anchor based on external flag
  const renderNavItem = (item, isMobile = false) => {
    if (item.external) {
      return (
        <a
          key={item.name}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-light transition-colors duration-300"
          onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
        >
          {item.name}
        </a>
      );
    } else {
      return (
        <Link
          key={item.name}
          to={item.path}
          className="text-white hover:text-purple-light transition-colors duration-300"
          onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
        >
          {item.name}
        </Link>
      );
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center select-none">
        <Link to="/" className="flex items-center">
          <img src="/icon.png" alt="Metadise Logo" className="h-8" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => renderNavItem(item))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black py-4 md:hidden">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {navItems.map((item) => renderNavItem(item, true))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;