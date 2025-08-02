import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Introduction',
    content: `Your privacy is critically important to us. At UnisemIoT, we have a few fundamental principles:
- We don’t ask you for personal information unless we truly need it.
- We don’t share your personal information except to comply with the law, develop our products, or protect our rights.
- We don’t store personal information on our servers unless required for the ongoing operation of our services.`,
  },
  {
    title: 'Information We Collect',
    content: `We collect information to provide better services to all our users. This includes:
- Information you provide us directly (like account information, contact info).
- Data collected automatically such as device info, usage logs, IP addresses, and cookies.
- Information from third-party services if you link them to your account.`,
  },
  {
    title: 'How We Use Information',
    content: `We use your information to:
- Provide, maintain, and improve our services.
- Communicate with you, including customer support.
- Monitor usage and detect fraud or abuse.
- Comply with legal obligations.`,
  },
  {
    title: 'Data Security',
    content: `We implement industry-standard security measures including encryption, access controls, and regular audits to protect your data. However, no system is 100% secure, so please take precautions when sharing sensitive information.`,
  },
  {
    title: 'Your Choices',
    content: `You control your information:
- You can update your account details anytime.
- You may opt out of promotional emails.
- You can delete your account, which will remove your data from our active systems (subject to legal requirements).`,
  },
  {
    title: 'Contact Us',
    content: `If you have questions about this Privacy Policy or your data, please contact us at info@unisemiot.com.`,
  },
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

const PrivacyPolicy = () => {
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
        Privacy Policy
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

export default PrivacyPolicy;
