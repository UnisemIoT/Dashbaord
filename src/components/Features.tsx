import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Workflow, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Device Monitoring',
      description: 'Advanced machine learning algorithms continuously monitor your IoT devices, predicting failures before they happen and optimizing performance in real-time.',
      gradient: 'gradient-purple'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics Dashboard',
      description: 'Comprehensive dashboard with interactive visualizations, providing instant insights into device performance, energy consumption, and operational metrics.',
      gradient: 'gradient-purple'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Create intelligent automation workflows that respond to device states, environmental conditions, and custom triggers to streamline operations.',
      gradient: 'gradient-purple'
    },
    {
      icon: Shield,
      title: 'Secure IoT Integration',
      description: 'Enterprise-grade security with end-to-end encryption, secure device onboarding, and compliance with industry standards like SOC 2 and ISO 27001.',
      gradient: 'gradient-purple'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make UnisemIoT the ultimate platform for IoT management and automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;