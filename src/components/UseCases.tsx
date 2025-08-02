import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Heart, Building2, Truck, Zap } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Factory,
      title: 'Smart Manufacturing',
      description: 'Monitor production lines, predict equipment failures, and optimize manufacturing processes with real-time IoT data.',
      stats: '35% productivity increase',
      gradient: 'gradient-purple'
    },
    {
      icon: Heart,
      title: 'Healthcare IoT',
      description: 'Patient monitoring, medical device management, and hospital asset tracking for improved patient care.',
      stats: '50% faster response times',
      gradient: 'gradient-purple'
    },
    {
      icon: Building2,
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and smart infrastructure for sustainable urban development.',
      stats: '25% energy savings',
      gradient: 'gradient-purple'
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Fleet management, cargo tracking, and route optimization for efficient supply chain operations.',
      stats: '30% cost reduction',
      gradient: 'gradient-purple'
    },
    {
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Smart grid management, renewable energy monitoring, and predictive maintenance for utilities.',
      stats: '40% efficiency gain',
      gradient: 'gradient-purple'
    }
  ];

  return (
    <section id="use-cases" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Industry Use Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how UnisemIoT transforms operations across diverse industries with tailored IoT solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {useCase.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">
                  {useCase.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;