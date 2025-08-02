import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Empower Your IoT Network</span>
            <br />
            <span className="text-white">with Intelligent AI</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Seamless device management, analytics, and automation. Transform your IoT infrastructure with cutting-edge AI technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('#features')}
              className="group gradient-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Discover Platform</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => scrollToSection('#demo')}
              className="group glass-card text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Request Demo</span>
            </button>
          </motion.div>
        </motion.div>

        {/* IoT Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <div className="relative w-full max-w-4xl mx-auto h-64">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full"
            >
              {/* Central Hub */}
              <motion.circle
                cx="400" cy="200" r="30"
                fill="url(#gradient1)"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Connected Nodes */}
              {[
                { x: 200, y: 100 },
                { x: 600, y: 100 },
                { x: 150, y: 300 },
                { x: 650, y: 300 },
                { x: 300, y: 50 },
                { x: 500, y: 50 },
                { x: 300, y: 350 },
                { x: 500, y: 350 },
              ].map((node, i) => (
                <g key={i}>
                  <motion.line
                    x1="400" y1="200"
                    x2={node.x} y2={node.y}
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="2"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <motion.circle
                    cx={node.x} cy={node.y} r="12"
                    fill="rgba(139, 92, 246, 0.6)"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </g>
              ))}
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;