"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  AlertTriangle,
  Folder,
  LayoutTemplate,
  Settings as SettingsIcon,
  Headphones,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (path) => pathname === path;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans antialiased text-gray-900">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#F6F4FD] border-b border-purple-100 sticky top-0 z-40">
        <div className="w-8 h-8 bg-[#7E56D8] rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm">
          N
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F6F4FD] border-b border-purple-100 p-4 space-y-3 z-30">
          <Link
            href="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-semibold ${
              isActive("/dashboard") || isActive("/")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-500 hover:bg-white"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/warning"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-medium ${
              isActive("/warning")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-500 hover:bg-white"
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Delete/Warning</span>
          </Link>

          <Link
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-medium ${
              isActive("/projects")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-500 hover:bg-white"
            }`}
          >
            <Folder className="w-4 h-4" />
            <span>Projects</span>
          </Link>

          <Link
            href="/templates"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-medium ${
              isActive("/templates")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-500 hover:bg-white"
            }`}
          >
            <LayoutTemplate className="w-4 h-4" />
            <span>Templates</span>
          </Link>

          <Link
            href="/settings"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-medium ${
              isActive("/settings")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-500 hover:bg-white"
            }`}
          >
            <SettingsIcon className="w-4 h-4" />
            <span>Settings</span>
          </Link>

          <Link
            href="/support"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-medium ${
              isActive("/support")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-500 hover:bg-white"
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Support</span>
          </Link>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-20 bg-[#F6F4FD] border-r border-purple-50/50 flex-col items-center py-5 justify-between h-screen sticky top-0 shrink-0 select-none">
        {/* Top Logo & Main Nav */}
        <div className="flex flex-col items-center gap-6 w-full">
          <Link
            href="/dashboard"
            className="w-9 h-9 bg-[#7E56D8] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-sm cursor-pointer hover:opacity-90 transition"
          >
            N
          </Link>

          <nav className="flex flex-col gap-4 items-center w-full px-2">
            <Link
              href="/dashboard"
              className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition w-full ${
                isActive("/dashboard") || isActive("/")
                  ? "text-[#7E56D8] bg-[#EDE8FB]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/warning"
              className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition w-full ${
                isActive("/warning")
                  ? "text-[#7E56D8] bg-[#EDE8FB]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span className="text-center leading-tight">Delete/Warning</span>
            </Link>

            <Link
              href="/projects"
              className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition w-full ${
                isActive("/projects")
                  ? "text-[#7E56D8] bg-[#EDE8FB]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Folder className="w-4 h-4" />
              <span>Projects</span>
            </Link>

            <Link
              href="/templates"
              className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition w-full ${
                isActive("/templates")
                  ? "text-[#7E56D8] bg-[#EDE8FB]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <LayoutTemplate className="w-4 h-4" />
              <span>Templates</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Nav */}
        <div className="flex flex-col gap-4 items-center w-full px-2">
          <Link
            href="/settings"
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition w-full ${
              isActive("/settings")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <SettingsIcon className="w-4 h-4" />
            <span>Settings</span>
          </Link>

          <Link
            href="/support"
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition w-full ${
              isActive("/support")
                ? "text-[#7E56D8] bg-[#EDE8FB]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Support</span>
          </Link>

          <button className="flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium text-gray-400 hover:text-red-500 transition w-full">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 overflow-y-auto bg-white p-4 md:p-8">
        {children ? (
          children
        ) : isActive("/settings") ? (
          <Settings />
        ) : (
          <Dashboard />
        )}
      </main>
    </div>
  );
}