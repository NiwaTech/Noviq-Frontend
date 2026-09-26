import React, { useState } from 'react';
import DesktopSideNav from '@/navigation/DesktopSideNav';
import Container from './Container';

export default function DashboardShell() {
  const [activeScreen, setActiveScreen] = useState('dashboard');

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar imported from the navigation folder */}
      <DesktopSideNav 
        active={activeScreen} 
        onSelect={(screen) => setActiveScreen(screen)} 
      />
      
      {/* Main container rendering Dashboard.jsx or Settings.jsx */}
      <Container activeScreen={activeScreen} />
    </div>
  );
}