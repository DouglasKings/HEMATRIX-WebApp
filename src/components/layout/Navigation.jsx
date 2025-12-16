/* 
  ═══════════════════════════════════════════════════════════════════
  NAVIGATION COMPONENTS
  Header, navigation links, and mobile menu components
  ═══════════════════════════════════════════════════════════════════
*/

import React from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logoImg from "/assets/images/logo.png";

/* ═══════════════════════════════════════════════════════════
   HEADER COMPONENT - Main site header
   ═══════════════════════════════════════════════════════════ */
export function Header({ scrolled, mobileMenuOpen, setMobileMenuOpen, scrollToTop }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl ring-1 ring-slate-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
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
              HEMATRIKAN
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium mt-0.5">
              Cloud & Cyber Innovations
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
  );
}

/* ═══════════════════════════════════════════════════════════
   NAV LINK - Desktop navigation links
   ═══════════════════════════════════════════════════════════ */
export function NavLink({ href, children }) {
  return (
    <a href={href} className="relative group py-2">
      <span className="group-hover:text-indigo-600 transition-colors">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════
   MOBILE LINK - Mobile menu navigation links
   ═══════════════════════════════════════════════════════════ */
export function MobileLink({ href, children, onClick }) {
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
