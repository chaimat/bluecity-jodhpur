import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-50 border-t border-blue-city-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Blue City Parivar</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Connecting the hearts of Jodhpur in Ahmedabad. A community dedicated to preserving our 
              heritage, celebrating our culture, and supporting each other.
            </p>
            <div className="text-sm text-gray-600">
              <p>A registered community organization</p>
              <p>Serving Jodhpuris in Ahmedabad since 2015</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-blue-city-text mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about" className="hover:text-blue-city-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-blue-city-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-city-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-city-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-blue-city-text mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-city-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-city-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-city-primary transition-colors">
                  Membership Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-city-secondary/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Blue City Parivar. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Made with ❤️ for the Jodhpuri community
          </p>
        </div>
      </div>
    </footer>
  );
};




