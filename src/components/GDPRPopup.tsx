import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

const GDPRPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('unisemiot-cookies-accepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('unisemiot-cookies-accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('unisemiot-cookies-accepted', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="gdpr-popup glass-card border-t border-white/20 p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-4 flex-1">
              <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We use cookies to improve your experience on our website, analyze traffic, and provide personalized content. 
                  By clicking "Accept", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                  <a href="#privacy" className="text-purple-400 hover:text-purple-300 underline">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="gradient-purple text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 text-sm"
              >
                Accept All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GDPRPopup;