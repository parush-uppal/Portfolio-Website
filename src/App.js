import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Certificate from "./pages/Certificate";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;