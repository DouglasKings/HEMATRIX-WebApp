// src/components/team/ProfileView.jsx
import React from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  User,
  Briefcase,
  Award,
  Cpu,
  GraduationCap,
  Calendar,
  Lightbulb,
} from "lucide-react";
import SectionContainer from "./SectionContainer";

export default function ProfileView({ member, onBack }) {
  // Now being used to conditionally render sections below
  const isPlaceholder = member.placeholder;

  return (
    <div className="min-h-screen bg-slate-50 font-sans animate-in fade-in duration-500">
      {/* Navigation Bar */}
      <div className="bg-slate-900 text-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </button>
          <div className="text-sm font-bold tracking-widest text-slate-400">
            HEMATRIKAN EXPERTS
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header / Hero Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-60 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            {/* Profile Image - HAROLD FIX INCLUDED */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-slate-100 flex items-center justify-center shadow-inner flex-shrink-0 border-4 border-white ring-1 ring-slate-100 overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: member.imagePosition || "top",
                  }}
                />
              ) : (
                <span className="text-6xl" role="img" aria-label="user">
                  👨🏿‍💻
                </span>
              )}
            </div>

            {/* Profile Header Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-indigo-600 font-medium mb-4">
                {member.role}
              </p>

              {/* Contact Info: Only show if NOT a placeholder */}
              {!isPlaceholder && member.contact && (
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Mail className="h-4 w-4 text-slate-400" />
                    {member.contact.email}
                  </div>
                  {member.contact.location && (
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      {member.contact.location}
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons: Only show if NOT a placeholder */}
              {!isPlaceholder && member.contact && (
                <div className="flex flex-wrap gap-3">
                  {member.contact.linkedin && (
                    <a
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/20"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn Profile
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <SectionContainer title="Professional Profile" icon={<User />}>
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                {member.bio}
              </p>
            </SectionContainer>

            {/* Work History: Only show if NOT a placeholder */}
            {!isPlaceholder && member.experience ? (
              <SectionContainer title="Work History" icon={<Briefcase />}>
                <div className="space-y-8 border-l-2 border-indigo-100 ml-3 pl-8 relative">
                  {member.experience.map((job, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 shadow-sm"></span>
                      <h3 className="font-bold text-slate-900 text-lg">
                        {job.role}
                      </h3>
                      <div className="text-indigo-600 font-medium text-sm mb-3">
                        {job.company} • {job.period}
                      </div>
                      <p className="text-slate-600 text-sm">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </SectionContainer>
            ) : (
              // Use isPlaceholder to show a fallback state
              isPlaceholder && (
                <div className="p-12 text-center text-slate-400 bg-white rounded-xl border border-dashed border-slate-300">
                  <Briefcase className="h-10 w-10 mx-auto mb-3 opacity-20" />
                  <p>Detailed career history is currently being updated.</p>
                </div>
              )
            )}
          </div>

          <div className="space-y-8">
            <SectionContainer title="Technical Expertise" icon={<Cpu />}>
              <div className="flex flex-wrap gap-2">
                {member.skills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-md"
                  >
                    {skill}
                  </span>
                ))}
                {(!member.skills || member.skills.length === 0) && (
                  <span className="text-sm text-slate-400 italic">
                    Updating skills...
                  </span>
                )}
              </div>
            </SectionContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
