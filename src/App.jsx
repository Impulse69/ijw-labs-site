import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import VoiceWidget from "./components/VoiceWidget";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactSent from "./pages/ContactSent";
import Founder from "./pages/Founder";

export default function App() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/sent" element={<ContactSent />} />
          <Route path="/founders/:slug" element={<Founder />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <VoiceWidget />
    </>
  );
}
