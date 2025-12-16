/* 
  ═══════════════════════════════════════════════════════════════════
  HEMATRIKAN WEBSITE - MAIN APP COMPONENT
  Entry point that orchestrates all sections and manages state
  Updated: December 2025
  Slogan: "Innovating Technology & Securing Trust"
  ═══════════════════════════════════════════════════════════════════
*/

import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ContactSection,
} from "./components/sections/MainSections";
import TeamSection from "./components/sections/TeamSection";
import ProfileView from "./components/team/ProfileView";

export default function App() {
  // State Management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Handle scroll effects for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open profile view
  const openProfile = (member) => {
    setSelectedMember(member);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Close profile view and return to team section
  const closeProfile = () => {
    setSelectedMember(null);
    setTimeout(() => {
      const teamSection = document.getElementById("team");
      if (teamSection) teamSection.scrollIntoView({ behavior: "auto" });
    }, 50);
  };

  // If a team member is selected, show their profile page
  if (selectedMember) {
    return <ProfileView member={selectedMember} onBack={closeProfile} />;
  }

  // Main website view
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-800">
      {/* Header / Navigation */}
      <Header
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToTop={scrollToTop}
      />

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <TeamSection onMemberClick={openProfile} />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
