import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Demo from './components/Demo';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GDPRPopup from './components/GDPRPopup';
import ChatbotWidget from './components/ChatbotWidget';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Demo />
        <UseCases />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <GDPRPopup />
      <ChatbotWidget />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
}

export default App;
