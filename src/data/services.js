/* 
  ═══════════════════════════════════════════════════════════════════
  SERVICES DATA
  All service offerings for HEMATRIKAN
  ═══════════════════════════════════════════════════════════════════
*/

import {
  Cloud,
  Lock,
  Database,
  Server,
  Activity,
  CheckCircle,
  Network,
  Settings,
  ShoppingBag,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Cloud Migration",
    icon: Cloud,
    color: "bg-blue-500",
    description:
      "Seamless migration to Azure, AWS, and Google Cloud with strategic cost optimization and zero data loss.",
  },
  {
    id: 2,
    title: "Cybersecurity",
    icon: Lock,
    color: "bg-indigo-600",
    description:
      "Advanced penetration testing, real-time threat monitoring, and rapid incident response to protect your digital assets.",
  },
  {
    id: 3,
    title: "Info Systems",
    icon: Database,
    color: "bg-cyan-500",
    description:
      "Custom secure application development, business intelligence (BI), and process automation for efficiency.",
  },
  {
    id: 4,
    title: "Network Infrastructure",
    icon: Network,
    color: "bg-emerald-600",
    description:
      "Expert setup of secure LAN/WAN, structured cabling, and resilient server environments for reliable connectivity.",
  },
  {
    id: 5,
    title: "Managed IT Support",
    icon: Settings,
    color: "bg-orange-500",
    description:
      "Proactive 24/7 system monitoring, troubleshooting, and preventive maintenance to ensure business continuity.",
  },
  {
    id: 6,
    title: "Disaster Recovery",
    icon: Server,
    color: "bg-slate-700",
    description:
      "State-of-the-art backup solutions and resilient architectures to safeguard data against any unforeseen failures.",
  },
  {
    id: 7,
    title: "Training & E-Learning",
    icon: Activity,
    color: "bg-teal-500",
    description:
      "Capacity building, LMS implementation, and security awareness workshops to empower your digital workforce.",
  },
  {
    id: 8,
    title: "ICT Advisory & Procurement",
    icon: ShoppingBag,
    color: "bg-amber-600",
    description:
      "Strategic sourcing of hardware, software licensing, and tech consultancy to eliminate workflow pain points.",
  },
  {
    id: 9,
    title: "Compliance & Governance",
    icon: CheckCircle,
    color: "bg-violet-500",
    description:
      "Strategic guidance on IT governance, data protection regulations, and international tech standards (ISO/ITIL).",
  },
];
