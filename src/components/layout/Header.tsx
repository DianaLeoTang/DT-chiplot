"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-6">
          <div className="h-10 w-10 mr-2 relative">
            <svg viewBox="0 0 100 100" className="fill-[#60c1a7]">
              <path d="M50,5C25.1,5,5,25.1,5,50s20.1,45,45,45s45-20.1,45-45S74.9,5,50,5z M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35
                s35,15.7,35,35S69.3,85,50,85z"/>
              <path d="M65,35c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S73.3,35,65,35z M65,55c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
                S67.8,55,65,55z"/>
              <path d="M35,35c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S43.3,35,35,35z M35,55c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
                S37.8,55,35,55z"/>
            </svg>
          </div>
          <span className="text-[#345272] text-2xl font-medium">ChiPlot</span>
        </Link>

        {/* Navigation Items */}
        <nav className="flex-1">
          <ul className="flex space-x-6">
            <li>
              <Link href="#" className="text-gray-700 hover:text-[#60c1a7]">
                功能更新
              </Link>
            </li>
            <li className="relative">
              <Link href="#" className="text-gray-700 hover:text-[#60c1a7]">
                ChiBioTools
                <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs px-1 rounded-full">
                  NEW
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-[#60c1a7]">
                SCI文献下载
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-[#60c1a7]">
                资源分享
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
