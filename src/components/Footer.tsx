import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Facebook,
  Youtube,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/UnisemIoT.png"
                alt="Logo"
                className="w-48 h-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses worldwide with intelligent IoT solutions.
              Transform your operations with AI-driven insights and seamless
              device management.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/UnisemIOT"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578624306758"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@UnisemIoT"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.pinterest.com/UnisemIoT"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faPinterest} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#pricing")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#demo")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4 max-w-sm">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handle newsletter submission logic here
                alert("Thank you for subscribing!");
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-2 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025{" "}
            <a
              href="https://unisemiot.com/"
              className="text-purple-400 hover:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              UnisemIoT
            </a>
            . All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm">
  <Link
    to="/privacy-policy"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    Privacy Policy
  </Link>
  <Link
    to="/terms-and-conditions"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    Terms & Conditions
  </Link>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
