import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import theme from './theme/theme';
import './i18n/i18n';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/hakkimizda" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/urunler" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/hizmetler" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/iletisim" element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <AnimatedRoutes />
          </Box>
          <Footer />
          <WhatsAppButton />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
