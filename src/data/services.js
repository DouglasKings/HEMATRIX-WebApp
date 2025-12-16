/* 
  ═══════════════════════════════════════════════════════════════════
  SERVICES DATA
  All service offerings for HEMATRIKAN
  ═══════════════════════════════════════════════════════════════════
*/

import { Cloud, Lock, Database, Server, Activity, CheckCircle } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Cloud Migration",
    icon: Cloud,
    color: "bg-blue-500",
    description:
      "Seamless migration to Azure, AWS, and Google Cloud with cost optimization.",
  },
  {
    id: 2,
    title: "Cybersecurity",
    icon: Lock,
    color: "bg-indigo-600",
    description:
      "Advanced penetration testing, incident response, and threat monitoring.",
  },
  {
    id: 3,
    title: "Info Systems",
    icon: Database,
    color: "bg-cyan-500",
    description:
      "Custom secure application development, BI, and automation.",
  },
  {
    id: 4,
    title: "Disaster Recovery",
    icon: Server,
    color: "bg-slate-700",
    description:
      "Automated backup solutions and resilient architectures.",
  },
  {
    id: 5,
    title: "Training",
    icon: Activity,
    color: "bg-teal-500",
    description:
      "Capacity building and security awareness workshops for teams.",
  },
  {
    id: 6,
    title: "Compliance",
    icon: CheckCircle,
    color: "bg-violet-500",
    description:
      "Strategic guidance on IT governance and data protection.",
  },
];
