import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Stories', href: '/stories' },
    { name: 'Team', href: '/team' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com',
      icon: FaFacebookF,
    },
    {
      name: 'Twitter',
      href: 'https://www.twitter.com',
      icon: FaTwitter,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com',
      icon: FaInstagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      icon: FaLinkedinIn,
    },
  ],
};

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white">Nyaho Dove Foundation</h3>
            <p className="mt-4 text-gray-400">
              Enhancing access to quality healthcare in Ghana through comprehensive programs and initiatives.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <p className="mt-4 text-gray-400">
              No. 35 El-Wak Stadium Road, Airport Residential Area, Accra
            </p>
            <p className="mt-2 text-gray-400">Email: info@nyahodove.org</p>
            <p className="mt-2 text-gray-400">Phone: +233 (0) 30 708 6490</p>
            <div className="mt-4 flex space-x-4">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Nyaho Dove Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;