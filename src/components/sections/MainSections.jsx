/* 
  ═══════════════════════════════════════════════════════════════════
  MAIN WEBSITE SECTIONS
  All major sections: Hero, About, Services, Contact
  ═══════════════════════════════════════════════════════════════════
*/

import React, { useState } from "react";
// 1. IMPORT EMAILJS SDK
import emailjs from "@emailjs/browser";
import {
  Shield,
  Lightbulb,
  Lock,
  Award,
  Heart,
  Target,
  ArrowRight,
  Zap,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Send,
} from "lucide-react";
import { services } from "../../data/services";
import { socialLinks, companySlogan } from "../../data/socialLinks";
import { ServiceCard, ValueCard, ContactItem, SocialLink, XIcon } from "../ui";
import logoImg from "/assets/images/logo.png";

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-50 blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-50 blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
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
              Hematrikan Innovation delivers secure, scalable cloud and
              cybersecurity solutions tailored to African businesses. From cloud
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

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:max-w-md">
              <div className="p-4 rounded-xl bg-white/50 border border-slate-100 shadow-sm hover:shadow-lg hover:scale-105 hover:bg-white transition-all duration-300">
                <div className="text-3xl font-bold text-slate-900">10+</div>
                <div className="text-sm font-medium text-slate-500">
                  Years Experience
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-slate-100 shadow-sm hover:shadow-lg hover:scale-105 hover:bg-white transition-all duration-300">
                <div className="text-3xl font-bold text-slate-900">100+</div>
                <div className="text-sm font-medium text-slate-500">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
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
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT SECTION
   ═══════════════════════════════════════════════════════════ */
export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-white border-y border-slate-100 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
            Company Profile
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {companySlogan}
          </h3>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Hematrikan Cloud & Cyber Innovations is a next-generation technology
            company dedicated to delivering cloud computing, cybersecurity, and
            information systems solutions across Uganda and Africa.
          </p>
        </div>

        {/* Identity and Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Our Identity Card */}
          <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <h4 className="text-2xl font-bold mb-4">Our Identity</h4>
            <p className="text-indigo-200 mb-6">
              The name <strong>HEMATRIKAN</strong> blends elements of the
              founder's identity with the concept of a digital matrix.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="p-1 bg-indigo-500 rounded text-white mt-1">
                  <Zap className="w-4 h-4" />
                </span>
                <div>
                  <strong className="block text-white">Resilience</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 bg-indigo-500 rounded text-white mt-1">
                  <Lock className="w-4 h-4" />
                </span>
                <div>
                  <strong className="block text-white">Security</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 bg-indigo-500 rounded text-white mt-1">
                  <Lightbulb className="w-4 h-4" />
                </span>
                <div>
                  <strong className="block text-white">Innovation</strong>
                </div>
              </li>
            </ul>
          </div>

          {/* Mission & Vision */}
          <div>
            <h4 className="text-2xl font-bold text-slate-900 mb-6">
              Driving Purpose
            </h4>
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-indigo-600 h-6 w-6" />
                  <h5 className="font-bold text-lg">Mission Statement</h5>
                </div>
                <p className="text-slate-600">
                  To deliver secure, innovative, and scalable cloud and
                  cybersecurity solutions that empower organizations to grow
                  confidently.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <ArrowRight className="text-indigo-600 h-6 w-6" />
                  <h5 className="font-bold text-lg">Vision Statement</h5>
                </div>
                <p className="text-slate-600">
                  To become Africa's most trusted partner in cloud innovation
                  and cyber intelligence.
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
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICES SECTION
   ═══════════════════════════════════════════════════════════ */
export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
            Our Expertise
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Digital Solutions
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            We combine local context with global standards to deliver technology
            that prioritizes security, scalability, and measurable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              color={service.color}
            >
              {service.description}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT SECTION (Updated with EmailJS Logic)
   ═══════════════════════════════════════════════════════════ */
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  // 2. Add Status state to control success/error messages
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null); // Reset status on new submit

    // 3. Map your form data to the Template Variables you set up in EmailJS
    const templateParams = {
      from_name: formData.name, // Matches {{from_name}} in your template
      reply_to: formData.email, // Matches {{reply_to}} in your template
      message: formData.message, // Matches {{message}} in your template
    };

    // 4. YOUR EMAILJS KEYS
    const SERVICE_ID = "service_lgmt3rl";
    const TEMPLATE_ID = "template_59qww3q";
    const PUBLIC_KEY = "t8MdzVzvtysGRrk_x";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Clear the success message after 5 seconds to keep the UI clean
        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        console.log("FAILED...", error);
        setIsSubmitting(false);
        setStatus("error");
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-slate-900 overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-indigo-600 blur-3xl opacity-20" />

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Let&apos;s Secure Your Future
                </h2>
                <p className="text-indigo-200 mb-10 text-lg">
                  Ready to discuss a project or need a security consultation?
                </p>

                <div className="space-y-6">
                  <ContactItem
                    icon={<MapPin />}
                    label="Visit Us"
                    value="MUKONO,KAMPALA"
                  />
                  <ContactItem
                    icon={<Mail />}
                    label="Email Us"
                    value="info@hematrikan.com"
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

            {/* Right Column - Contact Form */}
            <div className="bg-white p-10 lg:p-16">
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
                    placeholder="info@hematrikan.com"
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>

                {/* 5. SUCCESS/ERROR MESSAGES */}
                {status === "success" && (
                  <div className="p-4 rounded-lg bg-green-50 text-green-700 text-sm font-medium text-center border border-green-200 animate-in fade-in slide-in-from-bottom-2">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm font-medium text-center border border-red-200 animate-in fade-in slide-in-from-bottom-2">
                    Something went wrong. Please check your internet connection
                    and try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
