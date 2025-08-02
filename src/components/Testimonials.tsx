import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow Industries',
      avatar: '/3.png',
      content: 'UnisemIoT transformed our manufacturing operations. The AI-powered insights helped us reduce downtime by 40% and optimize our production processes like never before.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Operations',
      company: 'Smart City Solutions',
      avatar: '/4.png',
      content: 'The platform\'s scalability and real-time analytics are incredible. We manage over 10,000 IoT devices across multiple cities, and UnisemIoT handles it effortlessly.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Digital Health Director',
      company: 'MedTech Innovations',
      avatar: '/5.png',
      content: 'Patient safety improved dramatically with UnisemIoT\'s monitoring capabilities. The predictive maintenance features ensure our medical devices are always operational.',
      rating: 5
    },
    {
      name: 'James Thompson',
      role: 'VP of Engineering',
      company: 'GreenEnergy Corp',
      avatar: '/6.png',
      content: 'The energy optimization features saved us millions. UnisemIoT\'s AI algorithms continuously optimize our renewable energy infrastructure with remarkable precision.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their IoT operations with UnisemIoT.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-300">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-purple-400 font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;