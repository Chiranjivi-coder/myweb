
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gaushala from './pages/Gaushala';
import About from './pages/About';
import EventGallery from './pages/EventGallery';
import VideoGallery from './pages/VideoGallery';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import EnquiryModal from './components/EnquiryModal';
import InfoModal from './components/InfoModal';
import './App.css';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/Splash/SplashScreen';
import { ModalProvider } from './context/ModalContext';

function App() {
  const { i18n } = useTranslation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      document.body.classList.remove('lang-hi', 'lang-mr', 'lang-en');
      if (lng === 'hi') document.body.classList.add('lang-hi');
      else if (lng === 'mr') document.body.classList.add('lang-mr');
      else document.body.classList.add('lang-en');
    };

    // Initial set
    handleLanguageChange(i18n.language);

    // Listen for changes
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <ModalProvider>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onEnter={() => setShowSplash(false)} />
        ) : (
          <motion.div 
            key="main-container"
            initial="initial"
            animate="animate"
            className="relative"
          >
            {/* Cinematic Shutter Reveal */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="fixed top-0 left-0 w-full h-[50vh] z-[120] bg-[#0a0c0b]"
            />
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="fixed bottom-0 left-0 w-full h-[50vh] z-[120] bg-[#0a0c0b]"
            />

            <Router>
              <ScrollToTop />
              <div className="flex flex-col min-h-screen font-sans text-stone-800">
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gaushala" element={<Gaushala />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<EventGallery />} />
                    <Route path="/videos" element={<VideoGallery />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
                <EnquiryModal />
                <InfoModal />
              </div>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalProvider>
  );
}

export default App;
