
// Added React import to resolve React namespace error for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SolutionCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Advantage {
  title: string;
  icon: React.ReactNode;
}

export interface Application {
  title: string;
  image: string;
}

export interface Resource {
  title: string;
  category: string;
  image: string;
}
