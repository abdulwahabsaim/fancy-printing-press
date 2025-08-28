// FILE: lib/icons.tsx
"use client"; // This file will be used on the client, so we mark it as such

import {
  CreditCard,
  Heart,
  Newspaper,
  Presentation,
  BookOpen,
  Stamp,
  FileText,
  Box,
  LucideIcon,
  HelpCircle, // A default icon
} from "lucide-react";

// This is our icon mapping.
// We map a simple string name to the actual icon component.
export const iconMap: { [key: string]: LucideIcon } = {
  CreditCard,
  Heart,
  Newspaper,
  Presentation,
  BookOpen,
  Stamp,
  FileText,
  Box,
};

// This is a helper component that will render the correct icon based on a name.
type IconProps = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className }: IconProps) => {
  const LucideIcon = iconMap[name] || HelpCircle; // Fallback to a default icon if not found
  return <LucideIcon className={className} />;
};