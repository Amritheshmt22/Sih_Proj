import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Impact from "./components/Impact";
import Team from "./components/Team";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Workflow />
      <Impact />
      <Team />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/Sih_Proj">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:person" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;