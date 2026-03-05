import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function removeEmergentBadge() {
  const byId = document.getElementById("emergent-badge");
  if (byId) byId.remove();
  document.querySelectorAll('a[href*="emergent"]').forEach((a) => {
    if (a.textContent.includes("Made with") || a.getAttribute("id") === "emergent-badge") a.remove();
  });
}

function App() {
  useEffect(() => {
    removeEmergentBadge();
    const t1 = setTimeout(removeEmergentBadge, 100);
    const t2 = setTimeout(removeEmergentBadge, 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
