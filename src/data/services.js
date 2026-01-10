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
  Search, // Added for Forensics/Discovery
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Cloud Migration",
    icon: Cloud,
    color: "bg-blue-500",
    description:
      "Strategic migration to Azure, AWS, and Google Cloud with enterprise-grade optimization and data integrity assurance.",
  },
  {
    id: 2,
    title: "Cybersecurity & Forensics",
    icon: Lock,
    color: "bg-indigo-600",
    description:
      "Advanced penetration testing combined with digital forensic investigation and incident response to protect and recover digital assets.",
  },
  {
    id: 3,
    title: "Info Systems Consultancy",
    icon: Database,
    color: "bg-cyan-500",
    description:
      "Strategic advisory on information systems architecture, business intelligence (BI), and process automation tailored for African markets.",
  },
  {
    id: 4,
    title: "Digital Forensic Discovery",
    icon: Search,
    color: "bg-red-600",
    description:
      "Expert identification, preservation, and analysis of digital evidence for legal, corporate, and private investigations.",
  },
  {
    id: 5,
    title: "Risk Management Advisory",
    icon: Settings,
    color: "bg-orange-500",
    description:
      "Expert-driven risk assessment and mitigation strategies to enhance organizational resilience against emerging global cyber threats.",
  },
  {
    id: 6,
    title: "Disaster Recovery",
    icon: Server,
    color: "bg-slate-700",
    description:
      "State-of-the-art backup solutions and resilient architectures to safeguard data against unforeseen infrastructure failures.",
  },
  {
    id: 7,
    title: "Training & Capacity Building",
    icon: Activity,
    color: "bg-teal-500",
    description:
      "Corporate workshops and E-Learning implementation (LMS) focused on cybersecurity awareness and modern ICT skills.",
  },
  {
    id: 8,
    title: "ICT Sourcing & Procurement",
    icon: ShoppingBag,
    color: "bg-amber-600",
    description:
      "Strategic procurement of high-performance hardware and software licensing to streamline enterprise workflows.",
  },
  {
    id: 9,
    title: "Governance & Compliance",
    icon: CheckCircle,
    color: "bg-violet-500",
    description:
      "Guidance on data protection regulations (GDPR/DPA) and international technology standards (ISO 27001/ITIL).",
  },
];
