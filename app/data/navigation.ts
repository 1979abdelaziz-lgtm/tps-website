import { markets } from "./markets";
import { solutions } from "./solutions";

export type NavLink = {
  label: string;
  href: string;
};

export type MainNavItem = {
  title: string;
  href: string;
};

export const mainNavItems: MainNavItem[] = [
  { title: "Home", href: "/" },
  { title: "Solutions", href: "/solutions" },
  { title: "Markets", href: "/markets" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const companyLinks: NavLink[] = [
  { label: "About TPS", href: "/about" },
  { label: "Our Values", href: "/about#values" },
  { label: "Projects", href: "/projects" },
];

export const footerSolutionLinks: NavLink[] = solutions.map((solution) => ({
  label: solution.title,
  href: "/solutions",
}));

export const footerMarketLinks: NavLink[] = markets.map((market) => ({
  label: market.title,
  href: "/markets",
}));

export type ExternalLink = {
  label: string;
  href: string | null;
};

export const socialLinks: ExternalLink[] = [
  { label: "LinkedIn", href: null },
  { label: "Facebook", href: null },
  { label: "YouTube", href: null },
  { label: "Email TPS", href: "mailto:info@tetrapowersolutions.com" },
];

export const legalLinks: ExternalLink[] = [
  { label: "Privacy", href: null },
  { label: "Terms", href: null },
];

export const contactActionLinks = {
  projectEnquiry: "/contact",
  technicalDiscussion: "/contact",
  siteRequirements: "/contact",
} as const;
