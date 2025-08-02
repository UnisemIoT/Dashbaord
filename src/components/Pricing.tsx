import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and proof of concepts',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Up to 100 devices',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '1GB data storage',
        'Basic automation rules'
      ],
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses and advanced features',
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        'Up to 1,000 devices',
        'Advanced analytics & AI insights',
        'Priority support',
        'Custom integrations',
        '10GB data storage',
        'Advanced automation workflows',
        'Real-time alerts',
        'API access'
      ],
      gradient: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom requirements',
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        'Unlimited devices',
        'Enterprise analytics & ML',
        'Dedicated support manager',
        'White-label solution',
        'Unlimited data storage',
        'Custom automation engine',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training'
      ],
      gradient: 'from-gold-500 to-yellow-500'
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your IoT deployment. All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 text-green-400 text-sm font-semibold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
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
              className={`glass-card p-8 rounded-2xl relative ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              } hover:bg-white/10 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-purple px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold gradient-text">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>

                {isAnnual && (
                  <div className="text-green-400 text-sm">
                    Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'gradient-purple text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'glass-card text-white hover:bg-white/10'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">
            Need a custom solution? Contact our enterprise team for tailored pricing.
          </p>
          <button className="gradient-purple text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;