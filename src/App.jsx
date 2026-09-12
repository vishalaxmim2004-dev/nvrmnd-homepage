import { useRef } from "react";

import Header from "./components/header";
import Hero from "./components/Hero";
import Process from "./components/process";
import Service from "./components/Service";
import Work from "./components/Work";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const homeRef = useRef(null);
  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      process: processRef,
      services: servicesRef,
      work: workRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header onNavigate={scrollToSection} />

      <main>
        <div ref={homeRef}>
          <Hero />
        </div>

        <div ref={processRef}>
          <Process />
        </div>

        <div ref={servicesRef}>
          <Service />
        </div>

        <div ref={workRef}>
          <Work />
        </div>

        <div ref={contactRef}>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;