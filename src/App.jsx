import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import VoiceWidget from "./components/VoiceWidget";
import { waLink } from "./content";
import { IconWhatsApp } from "./components/Icons";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function PageWrap({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrap><Home /></PageWrap>} />
          <Route path="/services" element={<PageWrap><Services /></PageWrap>} />
          <Route path="/about" element={<PageWrap><About /></PageWrap>} />
          <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
          <Route path="*" element={<PageWrap><Home /></PageWrap>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <a className="wa-float" href={waLink("Hi IJW Labs!")} target="_blank" rel="noopener" aria-label="Chat with IJW Labs on WhatsApp">
        <IconWhatsApp size={26} color="#fff" />
      </a>
      <VoiceWidget />
    </MotionConfig>
  );
}
