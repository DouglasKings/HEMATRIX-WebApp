/* 
  ═══════════════════════════════════════════════════════════════════
  SECTION CONTAINER COMPONENT
  Reusable container for profile view sections with consistent styling
  ═══════════════════════════════════════════════════════════════════
*/

import React from "react";

export default function SectionContainer({ title, icon, children }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wide border-b border-slate-100 pb-3">
        {React.cloneElement(icon, { className: "h-5 w-5 text-indigo-500" })}
        {title}
      </h2>
      {children}
    </div>
  );
}
