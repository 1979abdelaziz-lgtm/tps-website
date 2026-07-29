import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Database,
  Droplets,
  Factory,
  Flame,
  HeartPulse,
  Hotel,
  TowerControl,
} from "lucide-react";

export type Market = {
  icon: LucideIcon;
  title: string;
  challenge: string;
  description: string;
  image: string;
  imagePosition: string;
  imageClassName?: string;
};

export const markets: Market[] = [
  {
    icon: Factory,
    title: "Manufacturing",
    challenge: "Maximum Uptime",
    description:
      "Reliable, efficient energy systems that keep production running, reduce avoidable losses, and support smarter operations.",
    image: "/images/manufacturing.jpg",
    imagePosition: "center 48%",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    challenge: "Harsh Environments",
    description:
      "Robust power, electrical, and automation solutions engineered for demanding operating conditions and critical processes.",
    image: "/images/oil-gas.jpg",
    imagePosition: "center 52%",
  },
  {
    icon: Droplets,
    title: "Water & Wastewater",
    challenge: "Process Continuity",
    description:
      "Efficient, resilient systems that support reliable pumping, treatment, control, and continuous water operations.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85",
    imagePosition: "center",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    challenge: "Critical Reliability",
    description:
      "Dependable power solutions designed to protect essential medical services, sensitive equipment, and patient care.",
    image: "/images/healthcare.jpg",
    imagePosition: "center 54%",
  },
  {
    icon: Database,
    title: "Data Centres",
    challenge: "24/7 Availability",
    description:
      "High-availability power architecture that supports uptime, resilience, scalability, and efficient digital infrastructure.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90",
    imagePosition: "center",
    imageClassName: "brightness-[1.28] saturate-[0.9]",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    challenge: "Operational Efficiency",
    description:
      "Integrated energy and control systems that improve comfort, reduce consumption, and strengthen building performance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    imagePosition: "center",
  },
  {
    icon: Hotel,
    title: "Tourism, Hotels & Resorts",
    challenge: "Guest Comfort & Efficiency",
    description:
      "Reliable power, intelligent controls, and energy-management solutions that improve guest comfort, operational efficiency, and resort resilience.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
    imagePosition: "center",
  },
  {
    icon: TowerControl,
    title: "Utilities & Infrastructure",
    challenge: "System Resilience",
    description:
      "Scalable engineering solutions that strengthen essential networks, public infrastructure, and power communities.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    imagePosition: "center",
  },
];
