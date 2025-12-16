/* 
  ═══════════════════════════════════════════════════════════════════
  PROFILE VIEW COMPONENT
  Full-page detailed profile for team members
  Supports both standard profiles and enhanced profiles (like Kenneth's)
  ═══════════════════════════════════════════════════════════════════
*/

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
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-60 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-slate-100 flex items-center justify-center shadow-inner flex-shrink-0 border-4 border-white ring-1 ring-slate-100 overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
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

              {/* NEW SLOGAN SECTION - Added Here */}
              {member.finalSlogan && (
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  <span className="text-xs font-bold tracking-widest text-white uppercase">
                    {member.finalSlogan}
                  </span>
                </div>
              )}

              {/* Contact Information */}
              {!isPlaceholder && member.contact && (
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Mail className="h-4 w-4 text-slate-400" />
                    {member.contact.email}
                  </div>
                  {member.contact.phone && (
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <Phone className="h-4 w-4 text-slate-400" />
                      {member.contact.phone}
                    </div>
                  )}
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    {member.contact.location}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {!isPlaceholder && member.contact && (
                <div className="flex flex-wrap gap-3">
                  {member.contact.portfolio && (
                    <a
                      href={member.contact.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/20"
                    >
                      <Globe className="h-4 w-4" /> View Portfolio
                    </a>
                  )}
                  {member.contact.linkedin && (
                    <a
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 transition-colors shadow-sm"
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
          {/* Main Column (Left - 2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Bio */}
            <SectionContainer title="Professional Profile" icon={<User />}>
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                {member.bio}
              </p>
            </SectionContainer>

            {/* Leadership Philosophy - Only for Kenneth or members with this field */}
            {!isPlaceholder && member.philosophy && (
              <SectionContainer
                title="Leadership Philosophy"
                icon={<Lightbulb />}
              >
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                  <blockquote className="text-slate-700 italic text-lg font-medium">
                    "{member.philosophy}"
                  </blockquote>
                </div>
              </SectionContainer>
            )}

            {/* Core Expertise - Only for Kenneth or members with this field */}
            {!isPlaceholder && member.expertise && (
              <SectionContainer title="Core Areas of Expertise" icon={<Cpu />}>
                <ul className="space-y-3">
                  {member.expertise.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionContainer>
            )}

            {/* Work Experience */}
            {!isPlaceholder && member.experience && (
              <SectionContainer title="Work History" icon={<Briefcase />}>
                <div className="space-y-8 border-l-2 border-indigo-100 ml-3 pl-8 relative">
                  {member.experience.map((job, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 shadow-sm"></span>

                      <h3 className="font-bold text-slate-900 text-lg">
                        {job.role}
                      </h3>
                      <div className="text-indigo-600 font-medium text-sm mb-3 flex items-center gap-2 flex-wrap">
                        <span>{job.company}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-slate-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {job.period}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {job.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionContainer>
            )}

            {/* Achievements */}
            {!isPlaceholder && member.awards && (
              <SectionContainer title="Key Achievements" icon={<Award />}>
                <div className="grid gap-3">
                  {member.awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-yellow-50/60 rounded-xl border border-yellow-100"
                    >
                      <div className="mt-0.5 p-1 bg-yellow-100 rounded-full">
                        <Award className="h-4 w-4 text-yellow-700" />
                      </div>
                      <div className="font-medium text-slate-800 text-sm">
                        {award}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionContainer>
            )}

            {/* Placeholder State for incomplete profiles */}
            {isPlaceholder && (
              <div className="p-12 text-center text-slate-400 bg-white rounded-xl border border-dashed border-slate-300">
                <Briefcase className="h-10 w-10 mx-auto mb-3 opacity-20" />
                <p>Detailed career history is currently being updated.</p>
              </div>
            )}
          </div>

          {/* Sidebar (Right - 1/3 width) */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <SectionContainer title="Technical Expertise" icon={<Cpu />}>
              {!isPlaceholder && member.skills ? (
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-md hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-500 italic">
                  Skills info coming soon...
                </div>
              )}
            </SectionContainer>

            {/* Education */}
            {!isPlaceholder && member.education && (
              <SectionContainer title="Education" icon={<GraduationCap />}>
                <div className="space-y-6">
                  {member.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="pb-4 border-b border-slate-50 last:border-0 last:pb-0"
                    >
                      <div className="font-bold text-slate-900 text-sm leading-tight mb-1">
                        {edu.school}
                      </div>
                      <div className="text-indigo-600 text-xs font-semibold mb-1">
                        {edu.degree}
                      </div>
                      <div className="text-slate-400 text-xs">{edu.year}</div>
                    </div>
                  ))}
                </div>
              </SectionContainer>
            )}

            {/* Languages */}
            {!isPlaceholder && member.languages && (
              <SectionContainer title="Languages" icon={<Globe />}>
                <ul className="space-y-3">
                  {member.languages.map((lang, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-200"></div>
                      {lang}
                    </li>
                  ))}
                </ul>
              </SectionContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
