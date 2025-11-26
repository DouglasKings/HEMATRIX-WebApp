/* 
  ═══════════════════════════════════════════════════════════════════
  HEMATRIX Cloud & Cyber Innovations - Official Website
  ═══════════════════════════════════════════════════════════════════
  
  UPDATES:
  1. Fixed "ValueItem is not defined" error.
  2. Contact Form sends to info@hematrixtech.com (via mailto).
  3. Team Section has exactly 4 placeholders.
  4. Footer contains ALL original information.
*/

import React, { useState, useEffect } from "react";

// 1. ICONS
import {
  Menu,
  X,
  Cloud,
  Shield,
  Database,
  CheckCircle,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Github,
  Instagram,
  Server,
  Activity,
  Lock,
  ArrowRight,
  Target,
  Lightbulb,
  Heart,
  Zap,
  Award,
  Send, // Added for contact button
} from "lucide-react";

// 2. ASSETS
// Ensure your logo is at this exact path in your project folder
import logoImg from "./assets/logo.png";

// 3. SOCIAL CONFIGURATION
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/hematrix-tech",
  twitter: "https://x.com/hematrix_tech",
  instagram: "https://instagram.com/hematrix_tech",
  youtube: "https://youtube.com/@hematrix_tech",
  github: "https://github.com/hematrix-tech",
  discord: "https://discord.gg/hematrix",
};

export default function HematrixWebsite() {
  // --- STATE MANAGEMENT ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- SCROLL LISTENER ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- SCROLL TO TOP ---
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- FORM HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Construct Email Content
    const subject = `Website Inquiry: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // 2. Use mailto to open default email client
    // This is the most reliable way without a backend server
    setTimeout(() => {
      window.location.href = `mailto:info@hematrixtech.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-800">
      {/* 
        ═══════════════════════════════════════════════════════════
        HEADER NAVIGATION
        Order: About, Team, Services, Contact
        ═══════════════════════════════════════════════════════════
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl ring-1 ring-slate-900/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* Logo Area */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={scrollToTop}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <img
                src={logoImg}
                alt="Hematrix Logo"
                className="relative h-10 w-10 object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                HEMATRIX
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium mt-0.5">
                Cloud & Cyber Innovations
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#contact"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-indigo-600 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              Get a Quote <ChevronRight className="h-4 w-4" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl md:hidden animate-in slide-in-from-top-5">
            <div className="flex flex-col p-6 space-y-4 text-base font-medium text-slate-700">
              <MobileLink
                onClick={() => setMobileMenuOpen(false)}
                href="#about"
              >
                About
              </MobileLink>
              <MobileLink onClick={() => setMobileMenuOpen(false)} href="#team">
                Team
              </MobileLink>
              <MobileLink
                onClick={() => setMobileMenuOpen(false)}
                href="#services"
              >
                Services
              </MobileLink>
              <MobileLink
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
              >
                Contact
              </MobileLink>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* 
          ═══════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════
        */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-50 blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-50 blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />

          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1 text-sm font-semibold text-indigo-600 mb-6 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  Trusted. Secure. African-first.
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                  Securing Tomorrow, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                    Powering Today
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-lg">
                  Hematrix delivers secure, scalable cloud and cybersecurity
                  solutions tailored to African businesses. From cloud
                  migrations to incident response, we build resilient digital
                  ecosystems.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
                  >
                    Get Started
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md transition-all"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:max-w-md">
                  <div className="p-4 rounded-xl bg-white/50 border border-slate-100 shadow-sm hover:shadow-lg hover:scale-105 hover:bg-white transition-all duration-300">
                    <div className="text-3xl font-bold text-slate-900">10+</div>
                    <div className="text-sm font-medium text-slate-500">
                      Years Experience
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/50 border border-slate-100 shadow-sm hover:shadow-lg hover:scale-105 hover:bg-white transition-all duration-300">
                    <div className="text-3xl font-bold text-slate-900">
                      100+
                    </div>
                    <div className="text-sm font-medium text-slate-500">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:ml-auto w-full max-w-xl">
                <div className="relative rounded-2xl bg-white p-3 shadow-2xl shadow-indigo-900/10 ring-1 ring-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center aspect-[4/3] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 opacity-50"></div>
                    <img
                      src={logoImg}
                      alt="Hematrix Visual"
                      className="relative z-10 w-2/3 h-auto object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl shadow-slate-400/20 border border-slate-50 flex items-center gap-3 animate-bounce-slow">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600 shadow-sm">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">
                        Status
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        System Secure
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 -z-10 h-72 w-72 bg-gradient-to-br from-indigo-200 to-cyan-200 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ═══════════════════════════════════════════════════════════
          ABOUT SECTION
          ═══════════════════════════════════════════════════════════
        */}
        <section
          id="about"
          className="py-24 bg-white border-y border-slate-100 scroll-mt-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            {/* Overview */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
                Company Profile
              </h2>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Delivering Secure, Intelligent Digital Experiences
              </h3>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Hematrix Cloud & Cyber Innovations is a next-generation
                technology company dedicated to delivering cloud computing,
                cybersecurity, and information systems solutions across Uganda
                and Africa. We empower organizations through secure and scalable
                technologies to navigate digital transformation with confidence.
              </p>
            </div>

            {/* Identity Split */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <h4 className="text-2xl font-bold mb-4">Our Identity</h4>
                <p className="text-indigo-200 mb-6">
                  The name <strong>HEMATRIX</strong> blends elements of the
                  founder’s identity with the concept of a digital matrix—a
                  network of interconnected systems that power modern
                  organizations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="p-1 bg-indigo-500 rounded text-white mt-1">
                      <Zap className="w-4 h-4" />
                    </span>
                    <div>
                      <strong className="block text-white">Resilience</strong>
                      <span className="text-sm text-indigo-300">
                        Inspired by the phoenix symbolism.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="p-1 bg-indigo-500 rounded text-white mt-1">
                      <Lock className="w-4 h-4" />
                    </span>
                    <div>
                      <strong className="block text-white">Security</strong>
                      <span className="text-sm text-indigo-300">
                        Protection of systems, data, and digital identities.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="p-1 bg-indigo-500 rounded text-white mt-1">
                      <Lightbulb className="w-4 h-4" />
                    </span>
                    <div>
                      <strong className="block text-white">Innovation</strong>
                      <span className="text-sm text-indigo-300">
                        Continuous discovery of emerging technologies.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  Driving Purpose
                </h4>
                <div className="space-y-6">
                  {/* Mission Card */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="text-indigo-600 h-6 w-6" />
                      <h5 className="font-bold text-lg">Mission Statement</h5>
                    </div>
                    <p className="text-slate-600">
                      To deliver secure, innovative, and scalable cloud and
                      cybersecurity solutions that empower organizations to grow
                      confidently in a digital-first world.
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <ArrowRight className="text-indigo-600 h-6 w-6" />
                      <h5 className="font-bold text-lg">Vision Statement</h5>
                    </div>
                    <p className="text-slate-600">
                      To become Africa’s most trusted partner in cloud
                      innovation and cyber intelligence, shaping a safer and
                      smarter digital future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Our Core Values
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <ValueCard
                  icon={<Shield />}
                  title="Integrity"
                  desc="Ethical and transparent solutions."
                />
                <ValueCard
                  icon={<Lightbulb />}
                  title="Innovation"
                  desc="Transforming ideas into experiences."
                />
                <ValueCard
                  icon={<Lock />}
                  title="Security First"
                  desc="Protection built into every step."
                />
                <ValueCard
                  icon={<Award />}
                  title="Excellence"
                  desc="High-quality, reliable services."
                />
                <ValueCard
                  icon={<Heart />}
                  title="Impact"
                  desc="Driving positive digital change."
                />
              </div>
            </div>

            {/* Values/Why Us - FIXED: ValueItem is now defined at the bottom */}
            <div
              id="approach"
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Why Partner With Hematrix?
              </h3>
              <div className="space-y-6">
                <ValueItem
                  title="Security-First Mindset"
                  desc="We don't just add security; we build it into the foundation of every solution."
                />
                <ValueItem
                  title="Local Context, Global Standards"
                  desc="We apply international best practices tailored to the African business landscape."
                />
                <ValueItem
                  title="Client-Centered Delivery"
                  desc="Solutions are customized to your specific goals, challenges, and budget."
                />
                <ValueItem
                  title="Innovation Driven"
                  desc="We continuously discover and apply emerging technologies for your benefit."
                />
              </div>
            </div>

            {/* Promise */}
            <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8 text-center border border-indigo-100 mt-20">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Our Promise
              </h4>
              <p className="text-slate-700 max-w-3xl mx-auto italic">
                "Hematrix is committed to helping clients build trusted,
                high-performance, secure digital ecosystems. We ensure
                dependable, future-ready technology that drives growth."
              </p>
            </div>
          </div>
        </section>

        {/* 
          ═══════════════════════════════════════════════════════════
          TEAM SECTION - 4 PLACEHOLDERS
          ═══════════════════════════════════════════════════════════
        */}
        <section
          id="team"
          className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
                The Team
              </h2>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Meet Our Experts
              </h3>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Led by industry veterans committed to transforming Africa's
                digital landscape.
              </p>
            </div>

            {/* Displaying exactly 4 placeholders */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <TeamMemberCard
                id="1"
                name="Team Member 1"
                role="Executive Leadership"
              />
              <TeamMemberCard
                id="2"
                name="Team Member 2"
                role="Technical Lead"
              />
              <TeamMemberCard
                id="3"
                name="Team Member 3"
                role="Cybersecurity Specialist"
              />
              <TeamMemberCard
                id="4"
                name="Team Member 4"
                role="Systems Engineer"
              />
            </div>
          </div>
        </section>

        {/* 
          ═══════════════════════════════════════════════════════════
          SERVICES SECTION
          ═══════════════════════════════════════════════════════════
        */}
        <section id="services" className="py-24 bg-white relative scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
                Our Expertise
              </h2>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive Digital Solutions
              </h3>
              <p className="mt-4 text-lg text-slate-600">
                We combine local context with global standards to deliver
                technology that prioritizes security, scalability, and
                measurable impact.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Cloud Migration"
                icon={<Cloud className="h-6 w-6 text-white" />}
                color="bg-blue-500"
              >
                Seamless migration to Azure, AWS, and Google Cloud with cost
                optimization.
              </ServiceCard>
              <ServiceCard
                title="Cybersecurity"
                icon={<Lock className="h-6 w-6 text-white" />}
                color="bg-indigo-600"
              >
                Advanced penetration testing, incident response, and threat
                monitoring.
              </ServiceCard>
              <ServiceCard
                title="Info Systems"
                icon={<Database className="h-6 w-6 text-white" />}
                color="bg-cyan-500"
              >
                Custom secure application development, BI, and automation.
              </ServiceCard>
              <ServiceCard
                title="Disaster Recovery"
                icon={<Server className="h-6 w-6 text-white" />}
                color="bg-slate-700"
              >
                Automated backup solutions and resilient architectures.
              </ServiceCard>
              <ServiceCard
                title="Training"
                icon={<Activity className="h-6 w-6 text-white" />}
                color="bg-teal-500"
              >
                Capacity building and security awareness workshops for teams.
              </ServiceCard>
              <ServiceCard
                title="Compliance"
                icon={<CheckCircle className="h-6 w-6 text-white" />}
                color="bg-violet-500"
              >
                Strategic guidance on IT governance and data protection.
              </ServiceCard>
            </div>
          </div>
        </section>

        {/* 
          ═══════════════════════════════════════════════════════════
          CONTACT SECTION
          ═══════════════════════════════════════════════════════════
        */}
        <section id="contact" className="py-24 bg-slate-50 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-slate-900 overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-indigo-600 blur-3xl opacity-20" />
                  <div>
                    <h2 className="text-3xl font-bold mb-6">
                      Let's Secure Your Future
                    </h2>
                    <p className="text-indigo-200 mb-10 text-lg">
                      Ready to discuss a project or need a security
                      consultation?
                    </p>
                    <div className="space-y-6">
                      <ContactItem
                        icon={<MapPin />}
                        label="Visit Us"
                        value="Kampala, Uganda"
                      />
                      <ContactItem
                        icon={<Mail />}
                        label="Email Us"
                        value="info@hematrixtech.com"
                      />
                      <ContactItem
                        icon={<Phone />}
                        label="Call Us"
                        value="+256 769210906 | +256 742791595"
                      />
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-sm font-semibold text-indigo-200 mb-4">
                      Connect with us
                    </p>
                    <div className="flex gap-4">
                      <SocialLink
                        href={socialLinks.linkedin}
                        icon={<Linkedin className="h-5 w-5" />}
                        label="LinkedIn"
                      />
                      <SocialLink
                        href={socialLinks.twitter}
                        icon={<XIcon className="h-5 w-5" />}
                        label="X"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 lg:p-16">
                  {/* Contact Form with submit handler */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 bg-slate-50 transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 bg-slate-50 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-slate-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 bg-slate-50 transition-all"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Processing..." : "Send Message"}
                      {!isSubmitting && <Send className="h-4 w-4" />}
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-2">
                      Clicking send will open your default email client.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 
        ═══════════════════════════════════════════════════════════
        FOOTER - RESTORED FULL CONTENT
        ═══════════════════════════════════════════════════════════
      */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoImg}
                  alt="Hematrix"
                  className="h-8 w-8 object-contain brightness-0 invert"
                />
                <span className="text-white font-bold text-lg tracking-tight">
                  HEMATRIX
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Building trusted, high-performance, secure digital ecosystems
                for Africa and beyond.
              </p>

              <div className="flex flex-wrap gap-3">
                <SocialLink
                  href={socialLinks.linkedin}
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href={socialLinks.twitter}
                  icon={<XIcon className="h-5 w-5" />}
                  label="X (Twitter)"
                />
                <SocialLink
                  href={socialLinks.instagram}
                  icon={<Instagram className="h-5 w-5" />}
                  label="Instagram"
                />
                <SocialLink
                  href={socialLinks.youtube}
                  icon={<Youtube className="h-5 w-5" />}
                  label="YouTube"
                />
                <SocialLink
                  href={socialLinks.github}
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                />
                <SocialLink
                  href={socialLinks.discord}
                  icon={<DiscordIcon className="h-5 w-5" />}
                  label="Discord"
                />
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#services"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Consultancy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 text-center text-sm">
            © {new Date().getFullYear()} Hematrix Cloud & Cyber Innovations. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* 
  ═══════════════════════════════════════════════════════════
  HELPER COMPONENTS
  ═══════════════════════════════════════════════════════════
*/

// THIS WAS THE MISSING COMPONENT CAUSING THE ERROR
function ValueItem({ title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 flex-shrink-0 p-1 bg-indigo-50 rounded-full">
        <CheckCircle className="h-5 w-5 text-indigo-600" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="relative group py-2">
      <span className="group-hover:text-indigo-600 transition-colors">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block py-2 px-4 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors"
    >
      {children}
    </a>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
      <div className="inline-flex p-3 rounded-full bg-indigo-50 text-indigo-600 mb-3">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-tight">{desc}</p>
    </div>
  );
}

function ServiceCard({ title, icon, color, children }) {
  return (
    <div
      className="group relative rounded-2xl bg-white p-6 
      shadow-md hover:shadow-2xl hover:-translate-y-1 
      transition-all duration-300 border border-slate-100"
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${color} shadow-lg shadow-indigo-500/20 mb-6 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{children}</p>
    </div>
  );
}

function TeamMemberCard({ id, name, role }) {
  return (
    <a
      href={`/team/${id}`}
      className="block group bg-white rounded-2xl p-4 border border-slate-100 
      shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-[4/3] rounded-xl bg-slate-100 mb-4 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
          <span className="text-4xl">👤</span>
        </div>
        <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300"></div>
      </div>

      <div className="text-center">
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {name}
        </h4>
        <p className="text-sm text-slate-500 font-medium mb-3">{role}</p>

        <div className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          View Profile <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </a>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white shadow-inner">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <div>
        <p className="text-sm text-indigo-200">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
  );
}

// Custom Icons
function XIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DiscordIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}
