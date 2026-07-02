import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-50 pt-24 pb-10 relative overflow-hidden border-t-4 border-teal-600">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-teal-800/30 to-transparent blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <span className="font-display text-3xl font-black text-white tracking-tight leading-none">ATLAS</span>
              <span className="font-display text-sm font-bold text-teal-400 tracking-wider mt-1">Main Branch</span>
            </div>
            <p className="text-teal-200/80 leading-relaxed text-sm">
              Discover our most trusted, scientifically backed formulations designed for your modern lifestyle. Elevate your health with ATLAS.
            </p>
            <p className="text-teal-200/80 text-sm mt-2">
              Developed and Managed by{' '}
              <a href="https://bizleap.in/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white transition-colors font-bold">
                BIZLEAP
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900/80 flex items-center justify-center text-teal-300 hover:bg-teal-500 hover:text-white transition-all shadow-lg hover:shadow-teal-500/25 border border-teal-800/50">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900/80 flex items-center justify-center text-teal-300 hover:bg-teal-500 hover:text-white transition-all shadow-lg hover:shadow-teal-500/25 border border-teal-800/50">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900/80 flex items-center justify-center text-teal-300 hover:bg-teal-500 hover:text-white transition-all shadow-lg hover:shadow-teal-500/25 border border-teal-800/50">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900/80 flex items-center justify-center text-teal-300 hover:bg-teal-500 hover:text-white transition-all shadow-lg hover:shadow-teal-500/25 border border-teal-800/50">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-teal-200/80 hover:text-teal-300 transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-400" /> All Products</Link></li>
              <li><Link to="/experts" className="text-teal-200/80 hover:text-teal-300 transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-400" /> Consult an Expert</Link></li>
              <li><Link to="/diet-plans" className="text-teal-200/80 hover:text-teal-300 transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-400" /> Diet Plans</Link></li>
              <li><Link to="/about" className="text-teal-200/80 hover:text-teal-300 transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-400" /> About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-teal-200/80 text-sm leading-relaxed">123 Health Avenue, Science District,<br/>Innovation City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-teal-200/80 text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-teal-200/80 text-sm">support@atlashealth.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-wide">Newsletter</h4>
            <p className="text-teal-200/80 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="relative mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-teal-900/40 border border-teal-800 text-white rounded-lg pl-4 pr-12 py-3 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-teal-600/50"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white rounded-md p-1.5 transition-colors shadow-sm">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-teal-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-teal-600 text-sm font-medium">© 2026 ATLAS Main Branch. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-teal-600 hover:text-teal-400 transition-colors font-medium">Privacy Policy</Link>
            <Link to="#" className="text-teal-600 hover:text-teal-400 transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
