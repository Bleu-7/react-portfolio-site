import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    dark: '#2c3e50',
    light: '#ecf0f1',
    accent: '#e74c3c',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
  spacing: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;