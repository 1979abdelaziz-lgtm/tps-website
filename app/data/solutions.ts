import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Cpu,
  Factory,
  Gauge,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

export type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
  image: string;
  imagePosition: string;
};

export const solutions: Solution[] = [
  {
    icon: Zap,
    title: "Power Generation",
    description:
      "Engineering support for gas generators, diesel generators, hybrid plants, commissioning, troubleshooting, and reliable power delivery.",
    capabilities: [
      "Gas and diesel generation",
      "Hybrid power plants",
      "Commissioning and troubleshooting",
    ],
    image: "/images/solutions/power-generation.png",
    imagePosition: "center",
  },
  {
    icon: Factory,
    title: "CHP & CCHP",
    description:
      "Combined heat and power solutions designed to increase fuel utilisation and support demanding industrial energy needs.",
    capabilities: ["Cogeneration", "Trigeneration", "Waste heat recovery"],
    image: "/images/solutions/chp-cchp.jpg",
    imagePosition: "center",
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description:
      "Practical solar solutions for commercial, industrial, rooftop, and hybrid applications, engineered around each site.",
    capabilities: [
      "Commercial and industrial solar",
      "Rooftop systems",
      "Solar hybrid integration",
    ],
    image: "/images/solutions/solar-energy.jpg",
    imagePosition: "center",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage Systems (BESS)",
    description:
      "BESS integration for backup power, peak management, renewable energy support, and improved system resilience.",
    capabilities: ["Backup power", "Peak shaving", "Renewable energy integration"],
    image: "/images/solutions/bess.png",
    imagePosition: "center",
  },
  {
    icon: Zap,
    title: "Electrical Power Systems",
    description:
      "LV and MV engineering covering distribution, protection, control interfaces, and power-quality requirements.",
    capabilities: [
      "LV and MV distribution",
      "Protection and coordination",
      "Power quality",
    ],
    image: "/images/solutions/electrical-power-systems.png",
    imagePosition: "center",
  },
  {
    icon: Cpu,
    title: "Industrial Automation",
    description:
      "Industrial automation solutions that connect equipment, operators, and data through dependable control architecture.",
    capabilities: ["PLC systems", "SCADA and HMI", "Industrial communication"],
    image: "/images/solutions/industrial-automation.jpg",
    imagePosition: "center",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    description:
      "Structured technical support focused on availability, safe operation, preventive care, and rapid fault response.",
    capabilities: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Technical support",
    ],
    image: "/images/solutions/operation-maintenance.jpg",
    imagePosition: "center",
  },
  {
    icon: Gauge,
    title: "Energy Management",
    description:
      "Monitoring and optimisation tools that improve visibility, support decisions, and reduce avoidable energy losses.",
    capabilities: ["Energy monitoring", "Smart metering", "Performance optimisation"],
    image: "/images/solutions/energy-management.jpg",
    imagePosition: "center",
  },
];
