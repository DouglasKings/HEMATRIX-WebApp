/* 
  ═══════════════════════════════════════════════════════════════════
  UI COMPONENTS
  Reusable UI components used throughout the website
  ═══════════════════════════════════════════════════════════════════
*/

import React from "react";
import { CheckCircle } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   SERVICE CARD - Used in Services Section
   ═══════════════════════════════════════════════════════════ */
export function ServiceCard({ title, icon: Icon, color, children }) {
  return (
    <div className="group relative rounded-2xl bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${color} shadow-lg shadow-indigo-500/20 mb-6 group-hover:scale-110 transition-transform`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{children}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   VALUE CARD - Used in About Section
   ═══════════════════════════════════════════════════════════ */
export function ValueCard({ icon, title, desc }) {
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

/* ═══════════════════════════════════════════════════════════
   CONTACT ITEM - Used in Contact Section
   ═══════════════════════════════════════════════════════════ */
export function ContactItem({ icon, label, value }) {
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

/* ═══════════════════════════════════════════════════════════
   SOCIAL LINK - Used in Footer and Contact Section
   ═══════════════════════════════════════════════════════════ */
export function SocialLink({ href, icon, label }) {
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

/* ═══════════════════════════════════════════════════════════
   VALUE ITEM - Used for listing values/features
   ═══════════════════════════════════════════════════════════ */
export function ValueItem({ title, desc }) {
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

/* ═══════════════════════════════════════════════════════════
   X (TWITTER) ICON - Custom SVG Icon
   ═══════════════════════════════════════════════════════════ */
export function XIcon({ className }) {
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
