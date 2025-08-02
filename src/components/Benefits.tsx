import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, Zap, Globe } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: '40% Efficiency Increase',
      description: 'Streamlined operations and automated processes'
    },
    {
      icon: Clock,
      title: '60% Faster Deployment',
      description: 'Quick setup and seamless integration'
    },
    {
      icon: DollarSign,
      title: '30% Cost Reduction',
      description: 'Optimized resource utilization and energy savings'
    },
    {
      icon: Users,
      title: '24/7 Expert Support',
      description: 'Dedicated support team and comprehensive documentation'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Instant data processing and immediate insights'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-native architecture for worldwide deployment'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Business Outcomes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with measurable results and proven ROI from our IoT platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 gradient-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;