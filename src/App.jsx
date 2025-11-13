import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}