/* 
  ═══════════════════════════════════════════════════════════════════
  TEAM SECTION COMPONENT
  Displays all team members in a grid layout
  ═══════════════════════════════════════════════════════════════════
*/

import React from "react";
import { teamMembers } from "../../data/teamMembers";
import TeamMemberCard from "../team/TeamMemberCard";

export default function TeamSection({ onMemberClick }) {
  return (
    <section
      id="team"
      className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
            The Team
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Experts
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Led by industry veterans committed to transforming Africa's digital
            landscape.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onClick={() => onMemberClick(member)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
