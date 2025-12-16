/* 
  ═══════════════════════════════════════════════════════════════════
  FOOTER COMPONENT
  Site footer with company info and social links
  ═══════════════════════════════════════════════════════════════════
*/

import React from "react";
import { Linkedin, Instagram, Youtube, Github } from "lucide-react";
import { socialLinks } from "../../data/socialLinks";
import { SocialLink, XIcon } from "../ui";
import logoImg from "/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-4 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImg}
                alt="Hematrikan"
                className="h-8 w-8 object-contain brightness-0 invert"
              />
              <span className="text-white font-bold text-lg tracking-tight">
                HEMATRIKAN INNOVATION
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Building trusted, high-performance, secure digital ecosystems for
              Africa and beyond.
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
            </div>
          </div>

          {/* Company Links */}
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

          {/* Services Links */}
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

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Hematrikan Cloud & Cyber Innovations. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
