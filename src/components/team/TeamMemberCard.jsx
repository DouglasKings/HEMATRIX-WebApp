// src/components/team/TeamMemberCard.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

export default function TeamMemberCard({ member, onClick }) {
  return (
    <div
      onClick={onClick}
      className="block group bg-white rounded-2xl p-4 border border-slate-100 
      shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
    >
      <div className="aspect-[4/3] rounded-xl bg-slate-100 mb-4 overflow-hidden relative">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            // DYNAMIC FIX FOR HAROLD
            style={{
              objectPosition: member.imagePosition || "top",
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
            <span className="text-4xl">👤</span>
          </div>
        )}
        <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300"></div>
      </div>

      <div className="text-center">
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {member.name}
        </h4>
        <p className="text-sm text-slate-500 font-medium mb-3">{member.role}</p>
        <div className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          View Profile <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
