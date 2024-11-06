import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout/Layout';
import Loading from './components/Loading'; // Create this simple loading component
import GlobalBackground from './components/Layout/GlobalBackground';
import { Toaster } from 'react-hot-toast';
import { PerformanceProvider } from './context/PerformanceContext';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load service pages
const TechSupport = lazy(() => import('./pages/services/TechSupport'));
const DeviceRepair = lazy(() => import('./pages/services/DeviceRepair'));
const Setup = lazy(() => import('./pages/services/Setup'));
const Consultation = lazy(() => import('./pages/services/Consultation'));

function App() {
  return (
    <PerformanceProvider>
      <div className="app">
        <GlobalBackground />
        <Router>
          <Layout>
            <Suspense fallback={<Loading />}>
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
            </Suspense>
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
      </div>
    </PerformanceProvider>
  );
}

export default App;