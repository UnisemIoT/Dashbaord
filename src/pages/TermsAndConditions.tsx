import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using UnisemIoT, you agree to be bound by these Terms and Conditions. If you do not agree with any part, you may not access the service.`,
  },
  {
    title: '2. Use of the Service',
    content: `You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use of the service.`,
  },
  {
    title: '3. User Accounts',
    content: `You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.`,
  },
  {
    title: '4. Intellectual Property',
    content: `All content, trademarks, logos, and data on this site are the property of UnisemIoT and are protected by intellectual property laws. Unauthorized use is strictly prohibited.`,
  },
  {
    title: '5. Termination',
    content: `We reserve the right to suspend or terminate your access to the platform at our discretion, without prior notice, for any breach of these Terms.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `UnisemIoT will not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the service.`,
  },
  {
    title: '7. Modifications',
    content: `We reserve the right to update or modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: '8. Governing Law',
    content: `These Terms are governed by and construed in accordance with the laws of your jurisdiction. Any disputes will be handled in the appropriate courts of law.`,
  },
  {
    title: '9. Contact',
    content: `If you have any questions about these Terms, please contact us at info@unisemiot.com.`,
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const PURPLE = '#905bf7';

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-white relative">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 right-6 inline-block px-5 py-2 rounded-full bg-[#905bf7] text-white font-semibold shadow-lg hover:brightness-110 transition"
      >
        ← Back to Home
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ color: PURPLE }}
        className="text-4xl font-extrabold mb-12 text-center"
      >
        Terms & Conditions
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {sections.map(({ title, content }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-8 rounded-3xl border border-[#905bf7] shadow-lg"
            style={{ backgroundColor: 'rgba(144, 91, 247, 0.1)' }}
          >
            <h2 className="text-3xl font-semibold mb-5" style={{ color: PURPLE }}>
              {title}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-white">{content}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TermsAndConditions;
