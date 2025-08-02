import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Monitor, Activity, Settings, BarChart3 } from 'lucide-react';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Interactive Demo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of UnisemIoT with our interactive dashboard preview.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-card p-4 rounded-2xl">
            {/* Demo Dashboard Header */}
            <div className="flex items-center justify-between mb-6 p-4 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm">UnisemIoT Dashboard</span>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
              {/* Main Chart Area */}
              <div className="lg:col-span-2">
                <div className="glass-card p-6 rounded-xl h-64 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Device Performance</h3>
                    <button
                      onClick={togglePlay}
                      className="flex items-center space-x-2 gradient-purple px-4 py-2 rounded-lg text-white hover:shadow-lg transition-all duration-200"
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
                    </button>
                  </div>
                  
                  {/* Animated Chart Visualization */}
                  <div className="relative h-40">
                    <svg viewBox="0 0 400 160" className="w-full h-full">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                        </linearGradient>
                      </defs>
                      
                      <motion.path
                        d="M 0 120 Q 50 80 100 90 T 200 70 T 300 85 T 400 60"
                        fill="none"
                        stroke="url(#purpleGradient)"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isPlaying ? 1 : 0.5 }}
                        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                      />
                      
                      <motion.path
                        d="M 0 120 Q 50 80 100 90 T 200 70 T 300 85 T 400 60 L 400 160 L 0 160 Z"
                        fill="url(#chartGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1 }}
                      />

                      <defs>
                        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <Monitor className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Active Devices</span>
                  </div>
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                    className="text-2xl font-bold gradient-text"
                  >
                    2,847
                  </motion.div>
                </div>

                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <Activity className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Uptime</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                </div>

                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Data Points</span>
                  </div>
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 1.5, repeat: isPlaying ? Infinity : 0 }}
                    className="text-2xl font-bold text-purple-400"
                  >
                    1.2M
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex justify-center mt-8">
              <div className="glass-card px-6 py-3 rounded-full">
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span>Real-time data simulation</span>
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
                  <span>{isPlaying ? 'Live' : 'Paused'}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;