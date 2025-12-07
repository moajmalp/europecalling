import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import CountryTemplate from './pages/CountryTemplate';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Destinations from './pages/Destinations';
import Testimonials from './pages/Testimonials';
import Newsroom from './pages/Newsroom';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<CountryTemplate />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<div className="pt-32 text-center">404 - Page Not Found</div>} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
