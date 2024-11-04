import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
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

import { Toaster } from 'react-hot-toast';
import GlobalBackground from './components/Layout/GlobalBackground';

function App() {
  return (
    <>
      <GlobalBackground />
      <Router>
        <Layout>
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
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Layout>
      </Router>
    </>
  );
}

export default App;