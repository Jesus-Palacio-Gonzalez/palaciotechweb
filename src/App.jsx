import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import HowWeWork from "./components/HowWeWork";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
