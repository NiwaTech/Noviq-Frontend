import React from 'react';
import DashboardScreen from '../Dashboard';
import SettingsScreen from '../Settings';

export default function Container({ activeScreen }) {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      {activeScreen === 'settings' ? <SettingsScreen /> : <DashboardScreen />}
    </main>
  );
}