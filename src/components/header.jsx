import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About Us', link: '/about_us' },
  { id: 3, name: 'Discover', link: '/discover' },
  { id: 4, name: 'Explore', link: '/explore' },
  { id: 5, name: 'Shop', link: '/shop' },
  { id: 6, name: 'Blogs', link: '/blog' },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className="bg-gray-800 py-4 px-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src="/logo1.svg" width={'120px'} alt="Company Logo" />
        </Link>
        <div className="hidden md:block ">
          <ul className="nav-links flex" role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.link} className="text-[#FF702A] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden z-50">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 z-10" role="navigation" aria-label="Mobile Navigation">
            <ul className="nav-links flex flex-col justify-center items-center h-full">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    className="text-white hover:text-gray-300 py-4 text-xl font-medium"
                    onClick={handleMobileMenuToggle}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
}

export default Header;
