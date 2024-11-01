import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

// Service-specific pages
import TechSupport from './pages/services/TechSupport';
import DeviceRepair from './pages/services/DeviceRepair';
import Setup from './pages/services/Setup';
import Consultation from './pages/services/Consultation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            
            {/* Service Routes */}
            <Route path="/services/tech-support" element={<TechSupport />} />
            <Route path="/services/device-repair" element={<DeviceRepair />} />
            <Route path="/services/setup" element={<Setup />} />
            <Route path="/services/consultation" element={<Consultation />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;