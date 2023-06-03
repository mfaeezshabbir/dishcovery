import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    { id: 1, name: 'Facebook', link: 'https://www.facebook.com/', icon: <FaFacebook /> },
    { id: 2, name: 'Twitter', link: 'https://twitter.com/', icon: <FaTwitter /> },
    { id: 3, name: 'Instagram', link: 'https://www.instagram.com/', icon: <FaInstagram /> },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg mb-4">Contact Us</h2>
            <p>hello@dishcovery.com</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg mb-4">Follow Us</h2>
            <div className="flex flex-row">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.link} className="text-gray-300 hover:text-white transition-colors duration-300 ease-in-out mr-4">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex flex-row flex-wrap items-center">
              <input type="email" placeholder="Your Email" className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md mb-2 md:mb-0 md:mr-2 focus:outline-none" />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md focus:outline-none">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-gray-500 text-sm">&copy; 2023 Dishcovery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
