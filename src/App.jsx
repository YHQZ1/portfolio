import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

function ScrollToTopButtonWrapper() {
  const { darkMode } = useTheme();
  return <ScrollToTopButton darkMode={darkMode} />;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Cursor />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTopButtonWrapper />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
