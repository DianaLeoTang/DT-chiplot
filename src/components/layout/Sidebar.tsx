"use client";

import type React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type SidebarItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
  {
    id: 'phylogenetic-tree',
    name: 'Phylogenetic Tree',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-2-2-7 7-3-3" />
      </svg>
    ),
  },
  {
    id: 'bioplot',
    name: 'BioPlot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 9V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" />
        <circle cx="16" cy="19" r="2" />
        <path d="M18 17a7.5 7.5 0 1 0-3 6" />
      </svg>
    ),
  },
  {
    id: 'network-plot',
    name: 'Network plot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="15" cy="18" r="2" />
        <path d="M8 17l-3.5.7" />
        <path d="M10 17l4 1" />
        <path d="M9 8v8" />
      </svg>
    ),
  },
  {
    id: 'map-plot',
    name: 'Map plot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6" />
        <circle cx="16" cy="15" r="5" />
        <path d="M18 13v4h-4" />
      </svg>
    ),
  },
  {
    id: 'scatter-plot',
    name: 'Scatter plot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <circle cx="9" cy="9" r="1" />
        <circle cx="15" cy="15" r="1" />
        <circle cx="14" cy="8" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="14" cy="16" r="1" />
        <circle cx="8" cy="9" r="1" />
      </svg>
    ),
  },
  {
    id: 'line-plot',
    name: 'Line plot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
      </svg>
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#94a899] w-60 h-full py-6 px-4 flex flex-col space-y-4 text-white">
      {sidebarItems.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          className="flex items-center space-x-3 py-2 px-3 rounded hover:bg-[#60c1a7] transition-colors"
        >
          <span className="flex-shrink-0">{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
