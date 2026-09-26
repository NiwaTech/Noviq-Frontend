"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Bell,
  Wand2,
  Paperclip,
  Link as LinkIcon,
  Mic,
  Send,
  Upload,
  RotateCcw,
  FileText,
  LayoutTemplate,
  Clapperboard,
  Award,
  User,
  Crown,
  Settings as SettingsIcon,
  HelpCircle,
  LogOut,
} from "lucide-react";

const RECENT_PROJECTS = [
  {
    id: 1,
    title: "Bali Trip - Cinematic Cut",
    progress: 72,
    edited: "Edited 2h ago",
    tag: "HD - 0:34",
  },
  {
    id: 2,
    title: "Podcast Highlight Reel",
    progress: 48,
    edited: "Edited yesterday",
    tag: "2K - 0:15",
  },
  {
    id: 3,
    title: "Product Launch Teaser",
    progress: 88,
    edited: "Edited 3d ago",
    tag: "4K - 1:09",
  },
];

export default function Dashboard({ setActiveTab }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [promptText, setPromptText] = useState("");

  return (
    <div className="min-h-full bg-white px-4 py-5 md:px-8 md:py-6 space-y-6 max-w-6xl mx-auto font-sans antialiased">
      {/* Top Header Bar */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
            Good morning, David
          </h1>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Tuesday, Aug 4 · Studio synced 2m ago
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          {/* Search Bar */}
          <div className="relative flex-1 sm:w-60">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-3.5 h-3.5" />
            <input
              type="text"
              placeholder="Search templates, projects..."
              className="w-full bg-[#FAFAFC] border border-gray-100 rounded-full py-1.5 pl-9 pr-3 text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7E56D8]"
            />
          </div>

          {/* Bell Icon */}
          <button className="w-8 h-8 rounded-xl bg-[#F6F4FD] flex items-center justify-center text-[#7E56D8] hover:bg-purple-100 transition shrink-0">
            <Bell className="w-3.5 h-3.5 fill-current" />
          </button>

          {/* Credits Button */}
          <button className="flex items-center gap-1.5 bg-[#7E56D8] text-white text-xs font-bold px-3 py-1.5 rounded-xl hover:opacity-90 transition shadow-sm shrink-0">
            <Wand2 className="w-3 h-3" />
            <span>400 Credits</span>
          </button>

          {/* Profile Dropdown Container */}
          <div className="relative shrink-0">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500 focus:outline-none cursor-pointer p-0.5 bg-white"
            >
              <Image
                src="https://i.pravatar.cc/100?img=12"
                alt="David"
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full"
                unoptimized
              />
            </button>

            {/* Profile Dropdown Modal */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 text-xs">
                <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-100">
                  <Image
                    src="https://i.pravatar.cc/100?img=12"
                    alt="David"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                    unoptimized
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-xs">David Okon</p>
                    <p className="text-[10px] text-gray-400">davidokon@noviq.com</p>
                  </div>
                </div>

                <div className="p-1 space-y-0.5">
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-gray-600 hover:bg-purple-50 hover:text-[#7E56D8] rounded-xl transition">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span>Account</span>
                  </button>

                  <button className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-purple-50 hover:text-[#7E56D8] rounded-xl transition">
                    <div className="flex items-center gap-2.5">
                      <Crown className="w-3.5 h-3.5 text-gray-400" />
                      <span>Upgrade to Pro</span>
                    </div>
                    <span className="bg-amber-50 text-amber-700 font-bold text-[9px] px-1.5 py-0.5 rounded-md border border-amber-200/50">
                      20% off
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab?.("settings");
                      setIsProfileOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-gray-600 hover:bg-purple-50 hover:text-[#7E56D8] rounded-xl transition"
                  >
                    <SettingsIcon className="w-3.5 h-3.5 text-gray-400" />
                    <span>Preferences</span>
                  </button>

                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-gray-600 hover:bg-purple-50 hover:text-[#7E56D8] rounded-xl transition">
                    <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                    <span>Help & shortcut</span>
                  </button>
                </div>

                <div className="px-1 pt-1 border-t border-gray-100">
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-red-500 bg-red-50/60 hover:bg-red-100/80 rounded-xl transition font-medium">
                    <LogOut className="w-3.5 h-3.5 text-red-500" />
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center max-w-xl mx-auto py-1 relative">
        {/* Floating Accents */}
        <div className="hidden sm:flex absolute -left-10 top-10 w-7 h-7 rounded-lg bg-amber-400 text-white items-center justify-center text-xs shadow-sm transform -rotate-12">
          📢
        </div>
        <div className="hidden sm:flex absolute -right-6 top-2 w-7 h-7 rounded-lg bg-emerald-500 text-white items-center justify-center text-xs shadow-sm transform rotate-12">
          💸
        </div>
        <div className="hidden sm:flex absolute -right-10 bottom-12 w-7 h-7 rounded-lg bg-rose-600 text-white items-center justify-center text-xs shadow-sm transform -rotate-6">
          📹
        </div>

        <div className="inline-flex items-center gap-1 bg-[#EDE8FB] text-[#7E56D8] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2">
          <span>• Noviq Studio · AI editing engine online</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-4">
          What are you creating today?
        </h2>

        {/* Prompt Card */}
        <div className="w-full bg-white rounded-2xl p-3 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative mb-3 text-left">
          <textarea
            rows={2}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Ask anything..."
            className="w-full text-xs text-gray-800 placeholder-gray-400 focus:outline-none resize-none"
          />
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 border border-gray-200/50 px-2 py-0.5 rounded-full hover:bg-gray-100 transition">
                <Paperclip className="w-2.5 h-2.5 text-gray-400" />
                <span>Attach</span>
              </button>
              <button className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 border border-gray-200/50 px-2 py-0.5 rounded-full hover:bg-gray-100 transition">
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" />
                <span>Add link</span>
              </button>
              <button className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 border border-gray-200/50 px-2 py-0.5 rounded-full hover:bg-gray-100 transition">
                <Mic className="w-2.5 h-2.5 text-gray-400" />
                <span>Voice input</span>
              </button>
            </div>
            <button className="w-7 h-7 rounded-full bg-[#7E56D8] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm">
              <Send className="w-3 h-3 fill-current" />
            </button>
          </div>
        </div>

        {/* Quick Action Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button className="flex items-center gap-1.5 bg-amber-50/50 text-amber-900 border border-amber-200/50 text-[10px] px-3 py-1 rounded-full hover:bg-amber-100/50 transition font-medium">
            <Upload className="w-3 h-3 text-amber-600" />
            <span>Upload video</span>
          </button>
          <button className="flex items-center gap-1.5 bg-rose-50/50 text-rose-900 border border-rose-200/50 text-[10px] px-3 py-1 rounded-full hover:bg-rose-100/50 transition font-medium">
            <RotateCcw className="w-3 h-3 text-rose-500" />
            <span>Paste inspiration link</span>
          </button>
          <button className="flex items-center gap-1.5 bg-emerald-50/50 text-emerald-900 border border-emerald-200/50 text-[10px] px-3 py-1 rounded-full hover:bg-emerald-100/50 transition font-medium">
            <FileText className="w-3 h-3 text-emerald-600" />
            <span>Generate a script</span>
          </button>
          <button className="flex items-center gap-1.5 bg-purple-50/50 text-purple-900 border border-purple-200/50 text-[10px] px-3 py-1 rounded-full hover:bg-purple-100/50 transition font-medium">
            <LayoutTemplate className="w-3 h-3 text-[#7E56D8]" />
            <span>Browse templates</span>
          </button>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-gray-900">Recent Projects</h3>
          <button className="text-[11px] text-gray-400 hover:text-gray-700 font-medium">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {RECENT_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#F9F8FD] rounded-2xl p-4 border border-purple-50/40 flex flex-col justify-between h-36 hover:shadow-sm transition"
            >
              <div>
                <Clapperboard className="w-4 h-4 text-gray-800 mb-6" />
                <div className="flex items-center justify-between text-[9px] text-gray-400 font-semibold mb-1">
                  <div className="w-full bg-gray-200/70 h-1 rounded-full overflow-hidden mr-3">
                    <div
                      className="bg-gray-900 h-full rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span>{project.progress}%</span>
                </div>
                <h4 className="font-bold text-xs text-gray-900">{project.title}</h4>
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                <span>{project.edited}</span>
                <span className="bg-[#EDE8FB] text-[#7E56D8] font-bold px-2 py-0.5 rounded-md text-[9px]">
                  {project.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse Templates Section */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-gray-900">Browse Templates</h3>
          <button className="text-[11px] text-gray-400 hover:text-gray-700 font-medium">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="bg-[#F9F8FD] rounded-2xl p-4 border border-purple-50/40 flex items-start justify-between h-24">
            <span className="bg-[#EDE8FB] text-[#7E56D8] text-[10px] font-bold px-2 py-0.5 rounded-full">
              9:16
            </span>
            <Award className="w-4 h-4 text-[#7E56D8]" />
          </div>

          <div className="bg-[#F9F8FD] rounded-2xl p-4 border border-purple-50/40 flex items-start justify-between h-24">
            <span className="bg-rose-100/70 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
              16:9
            </span>
            <Award className="w-4 h-4 text-rose-600" />
          </div>

          <div className="bg-[#F9F8FD] rounded-2xl p-4 border border-purple-50/40 flex items-start justify-between h-24">
            <span className="bg-amber-100/70 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
              1:1
            </span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
        </div>
      </section>
    </div>
  );
}