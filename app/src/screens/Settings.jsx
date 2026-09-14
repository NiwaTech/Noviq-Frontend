"use client";

import React, { useState } from "react";
import {
  Search,
  Copy,
  Edit2,
  Check,
  Video,
  CheckCircle2,
  AlertCircle,
  Download,
  PlaySquare,
  Pause,
  Trash2,
  Laptop,
  Smartphone,
  ChevronDown,
  Plus,
  MoreHorizontal,
  ArrowLeft,
  X,
} from "lucide-react";

export default function Settings() {
  const [activeSubTab, setActiveSubTab] = useState("my_profile");
  const [copied, setCopied] = useState(false);

  // Account Action Modal State: null | 'deactivate' | 'delete'
  const [accountActionModal, setAccountActionModal] = useState(null);

  // Profile Data State
  const [profileData, setProfileData] = useState({
    firstName: "David",
    lastName: "Joshua",
    email: "davesax237@gmail.com",
    username: "Dave_the_grapher",
    bio: "Video Editor & Content Creator",
    phone: "+234 90 5723 9011",
    location: "Leeds, United Kingdom",
    role: "Video Editor",
  });

  // Edit Profile Modal State: null | 'header' | 'personal'
  const [editModalType, setEditModalType] = useState(null);
  const [tempProfileData, setTempProfileData] = useState(profileData);

  const handleOpenEditModal = (type) => {
    setTempProfileData(profileData);
    setEditModalType(type);
  };

  const handleCloseEditModal = () => {
    setEditModalType(null);
  };

  const handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    setTempProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfileData(tempProfileData);
    handleCloseEditModal();
  };

  // Billing view toggle
  const [showPlans, setShowPlans] = useState(false);

  // Notification Filter State
  const [notifFilter, setNotifFilter] = useState("all");

  // Toggle Switches State
  const [publicProfile, setPublicProfile] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [contentPrivacy, setContentPrivacy] = useState(true);

  const handleCopyAccountId = () => {
    navigator.clipboard.writeText("ascj23nf%ft:paul");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const invoices = [
    { date: "2026-10-4", id: "INV-20022", total: "$3,000" },
    { date: "2026-10-4", id: "INV-20023", total: "$670" },
    { date: "2026-10-4", id: "INV-20024", total: "$1,150" },
  ];

  const notificationsList = [
    {
      id: 1,
      type: "ready",
      title: "Your AI video is ready!",
      desc: 'Your video "Summer Campaign" has finished generating and is ready to review.',
      action: "View video",
      status: "unread",
      isNew: true,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
      btnBorder: "border-emerald-300 text-emerald-600 hover:bg-emerald-100",
      icon: Video,
    },
    {
      id: 2,
      type: "exported",
      title: "Export completed successfully",
      desc: 'Your 4K video "Product Launch" has been exported successfully.',
      action: "View export",
      status: "unread",
      isNew: true,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
      btnBorder: "border-emerald-300 text-emerald-600 hover:bg-emerald-100",
      icon: CheckCircle2,
    },
    {
      id: 3,
      type: "captions",
      title: "AI captions are ready",
      desc: "Auto-generated captions have been added to your latest video.",
      action: "Review caption",
      status: "unread",
      isNew: false,
      bgColor: "bg-purple-50",
      iconColor: "text-[#6E36E4]",
      btnBorder: "border-purple-300 text-[#6E36E4] hover:bg-purple-100",
      icon: CheckCircle2,
    },
    {
      id: 4,
      type: "progress",
      title: "Your video is being generated",
      desc: "AI is creating your video from the script you provided.",
      action: "In progress",
      status: "unread",
      isNew: false,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      btnBorder: "border-blue-300 text-blue-600 hover:bg-blue-100",
      icon: Download,
    },
    {
      id: 5,
      type: "failed",
      title: "Export failed",
      desc: 'We couldn\'t export "Travel Vlog". Check your project settings and try again.',
      action: "Retry export",
      status: "read",
      isNew: false,
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
      btnBorder: "border-red-300 text-red-600 hover:bg-red-100",
      icon: AlertCircle,
    },
    {
      id: 6,
      type: "templates",
      title: "New cinematic templates available",
      desc: "A new collection of cinematic templates is now ready for your next project.",
      action: "Explore templates",
      status: "read",
      isNew: false,
      bgColor: "bg-purple-50",
      iconColor: "text-[#6E36E4]",
      btnBorder: "border-purple-300 text-[#6E36E4] hover:bg-purple-100",
      icon: PlaySquare,
    },
  ];

  const filteredNotifications = notificationsList.filter((item) => {
    if (notifFilter === "new") return item.isNew;
    if (notifFilter === "unread") return item.status === "unread";
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 text-gray-800">
      {/* Top Search Header */}
      <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-2.5 max-w-sm shadow-xs">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search templates, projects..."
          className="w-full text-xs bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
        Settings
      </h1>

      {/* MAIN SETTINGS CONTAINER */}
      <div className="bg-white border border-gray-100 rounded-2xl flex flex-col md:flex-row min-h-[620px] shadow-xs overflow-hidden">
        {/* LEFT SUB-SIDEBAR */}
        <div className="w-full md:w-64 border-r border-gray-100 p-4 space-y-1.5 shrink-0 bg-white">
          {[
            { id: "my_profile", label: "My Profile" },
            { id: "account_settings", label: "Account Settings" },
            { id: "preferences", label: "Preferences" },
            { id: "notifications", label: "Notifications" },
            { id: "security", label: "Security" },
            { id: "billing", label: "Billing/Subscription" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSubTab(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeSubTab === item.id
                  ? "bg-[#F3EFFE] text-[#6E36E4] font-semibold"
                  : "text-gray-600 hover:bg-[#F8F6FE] hover:text-[#6E36E4] hover:pl-5"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => {
              setActiveSubTab("account_settings");
              setAccountActionModal("delete");
            }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium text-rose-500 hover:bg-rose-50 hover:text-rose-600 hover:pl-5 transition-all duration-200 cursor-pointer mt-4"
          >
            Delete Account
          </button>
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div className="flex-1 p-6 md:p-8 relative">
          {/* TAB 1: MY PROFILE */}
          {activeSubTab === "my_profile" && (
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-sm font-semibold text-gray-900">
                My Profile
              </h2>

              {/* Top Profile Header Card */}
              <div className="border border-gray-100 rounded-2xl p-5 flex items-center justify-between bg-white shadow-2xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#F3EFFE] border border-purple-100 flex items-center justify-center text-[#6E36E4] text-lg font-bold">
                    {profileData.firstName?.[0]}
                    {profileData.lastName?.[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">
                      {profileData.firstName} {profileData.lastName}
                    </h3>
                    <p className="text-xs text-gray-500">{profileData.role}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {profileData.location}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenEditModal("header")}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#6E36E4] bg-[#F3EFFE] hover:bg-purple-100 transition cursor-pointer"
                >
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
              </div>

              {/* Lower Personal Information Card */}
              <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-white shadow-2xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-gray-900">
                    Personal Information
                  </h3>
                  <button
                    onClick={() => handleOpenEditModal("personal")}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#6E36E4] bg-[#F3EFFE] hover:bg-purple-100 transition cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs">
                  <div>
                    <span className="text-gray-400 block mb-1">First Name</span>
                    <span className="font-semibold text-gray-800">
                      {profileData.firstName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Last Name</span>
                    <span className="font-semibold text-gray-800">
                      {profileData.lastName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">
                      Email Address
                    </span>
                    <span className="font-semibold text-gray-800">
                      {profileData.email}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Username</span>
                    <span className="font-semibold text-gray-800">
                      {profileData.username}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Bio</span>
                    <span className="font-semibold text-gray-800">
                      {profileData.bio}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Phone</span>
                    <span className="font-semibold text-gray-800">
                      {profileData.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Connected Accounts */}
              <div className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-white shadow-2xs">
                <h3 className="text-xs font-semibold text-gray-900">
                  Connected Accounts
                </h3>
                <p className="text-[11px] text-gray-500">
                  Connect your favorite platforms and cloud services to
                  streamline your workflow
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm">
                    𝕏
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs">
                    🎵
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#00005B] text-[#9999FF] flex items-center justify-center font-bold text-xs">
                    Ae
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ACCOUNT SETTINGS */}
          {activeSubTab === "account_settings" && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Account Settings
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Manage your basic account details
                </p>
              </div>

              <div className="border border-gray-100 rounded-2xl p-5 space-y-3 text-xs bg-white">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Account ID</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-gray-700">
                      ascj23nf%ft:paul
                    </span>
                    <button
                      onClick={handleCopyAccountId}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Account Type</span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F3EFFE] text-[#6E36E4]">
                    Creator
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Joined since:</span>
                  <span className="text-gray-700 font-medium">Feb 5, 2026</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-500">Status</span>
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-medium border border-emerald-300 text-emerald-600 bg-emerald-50">
                    Active
                  </span>
                </div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-5 space-y-3 text-xs bg-white">
                <h3 className="font-semibold text-gray-900">Login & Password</h3>
                <p className="text-gray-500 text-[11px]">
                  Manage your password and login preferences
                </p>

                <div className="pt-2 space-y-3">
                  <div className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500">Password</span>
                    <span className="tracking-widest text-gray-700">
                      ••••••••
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-gray-500">Confirm password</span>
                    <span className="tracking-widest text-gray-700">
                      ••••••••
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-5 space-y-4 text-xs bg-white">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Account Deactivation
                  </h3>
                  <p className="text-gray-500 text-[11px]">
                    Temporarily disable or permanently delete your account
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-orange-50/50 border border-orange-100/60">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                        <Pause className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Deactivate Account
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Temporarily disable and hide your projects. You can
                          activate anytime
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setAccountActionModal("deactivate")}
                      className="px-4 py-1.5 rounded-lg border border-orange-200 text-orange-600 hover:bg-orange-100 transition font-medium cursor-pointer"
                    >
                      Deactivate
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-rose-50/50 border border-rose-100/60">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                        <Trash2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Delete Account
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Permanently delete your account and all data including
                          projects, media and exports.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setAccountActionModal("delete")}
                      className="px-4 py-1.5 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-100 transition font-medium cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PREFERENCES */}
          {activeSubTab === "preferences" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Preferences
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Customize according to your preferences
                </p>
              </div>

              <div className="space-y-5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Select Theme</span>
                  <div className="relative w-64">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-purple-400 pr-8">
                      <option>Light Mode</option>
                      <option>Dark Mode</option>
                      <option>System Default</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Timezone</span>
                  <div className="relative w-64">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-purple-400 pr-8">
                      <option>(UTC - 06:00) Pacific Time...</option>
                      <option>(UTC + 01:00) West Central Africa</option>
                      <option>(UTC + 00:00) London, Greenwich</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Language</span>
                  <div className="relative w-64">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-purple-400 pr-8">
                      <option>English(United Kingdom)</option>
                      <option>English(United States)</option>
                      <option>French</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Nationality</span>
                  <div className="relative w-64">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-purple-400 pr-8">
                      <option>United Kingdom</option>
                      <option>Nigeria</option>
                      <option>United States</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Public Profile
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Your profile will be visible to anyone on the network
                    </p>
                  </div>
                  <button
                    onClick={() => setPublicProfile(!publicProfile)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                      publicProfile ? "bg-[#6E36E4]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                        publicProfile ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: NOTIFICATIONS */}
          {activeSubTab === "notifications" && (
            <div className="space-y-5 max-w-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    Notification
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    You&apos;ve 6 unread notifications
                  </p>
                </div>
                <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#F3EFFE] text-[#6E36E4] hover:bg-purple-100 transition cursor-pointer">
                  Mark all as read
                </button>
              </div>

              <div className="flex items-center gap-6 text-xs border-b border-gray-100 pb-2">
                {["all", "new", "unread"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setNotifFilter(filter)}
                    className={`capitalize font-medium pb-2 -mb-2 transition cursor-pointer ${
                      notifFilter === filter
                        ? "text-[#6E36E4] border-b-2 border-[#6E36E4]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {filter === "all" ? "All" : filter}
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                {filteredNotifications.map((notif) => {
                  const Icon = notif.icon;
                  return (
                    <div
                      key={notif.id}
                      className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white shadow-2xs hover:border-gray-200 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-xl ${notif.bgColor} ${notif.iconColor}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-900">
                            {notif.title}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {notif.desc}
                          </p>
                        </div>
                      </div>
                      <button
                        className={`text-xs px-3.5 py-1.5 rounded-xl font-medium border ${notif.btnBorder} transition shrink-0 cursor-pointer`}
                      >
                        {notif.action}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: SECURITY */}
          {activeSubTab === "security" && (
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-sm font-semibold text-gray-900">Security</h2>

              <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">
                      Two-factor authentication
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-1 max-w-md">
                      Add an extra layer of security to your account by requiring
                      a verification code alongside your password
                    </p>
                  </div>
                  <button
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                      twoFactor ? "bg-[#6E36E4]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                        twoFactor ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div className="pt-2 border-t border-gray-50 flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="text-orange-500 font-medium">Inactive</span>
                  <span className="text-gray-500">
                    Authenticator app not configured
                  </span>
                </div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-white">
                <div>
                  <h3 className="text-xs font-semibold text-gray-900">
                    Active Sessions
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Devices that are currently signed in to your account
                  </p>
                </div>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <Laptop className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Macbook Pro
                        </p>
                        <p className="text-[11px] text-gray-400">
                          Berlin, Germany
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#6E36E4]">
                      <span className="w-2 h-2 rounded-full bg-[#6E36E4]" />
                      <span className="font-medium">Active now</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-semibold text-gray-900">Iphone 16</p>
                        <p className="text-[11px] text-gray-400">
                          Berlin, Germany
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="w-2 h-2 rounded-full bg-gray-300" />
                      <span>16 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-white">
                <div>
                  <h3 className="text-xs font-semibold text-gray-900">
                    AI & Video security
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Keep your projects and media safe.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <div>
                    <p className="text-xs font-medium text-gray-900">
                      Content privacy
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Keep your videos and media private by default
                    </p>
                  </div>
                  <button
                    onClick={() => setContentPrivacy(!contentPrivacy)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                      contentPrivacy ? "bg-[#6E36E4]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                        contentPrivacy ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: BILLING / SUBSCRIPTION */}
          {activeSubTab === "billing" && (
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-gray-900">
                  {showPlans ? "Subscription Plans" : "Subscription"}
                </h2>
                {showPlans && (
                  <button
                    onClick={() => setShowPlans(false)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#6E36E4] hover:underline cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Current Plan
                  </button>
                )}
              </div>

              {!showPlans ? (
                <div className="space-y-6">
                  <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-2xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                      <div className="space-y-4 pr-0 md:pr-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold text-gray-900">
                            Your Plan
                          </h3>
                          <span className="text-[11px] text-gray-400">
                            Renews 17 Nov 2026
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-gray-900">
                            Professional
                          </span>
                          <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold bg-[#F3EFFE] text-[#6E36E4]">
                            Current plan
                          </span>
                        </div>

                        <div>
                          <p className="text-lg font-bold text-gray-900">
                            $40.00
                            <span className="text-xs font-normal text-gray-400">
                              /month
                            </span>
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            4 included users
                          </p>
                        </div>

                        <button
                          onClick={() => setShowPlans(true)}
                          className="text-xs font-medium text-[#6E36E4] hover:underline pt-1 block cursor-pointer"
                        >
                          Upgrade
                        </button>
                      </div>

                      <div className="space-y-4 pl-0 md:pl-6 pt-4 md:pt-0">
                        <h3 className="text-xs font-bold text-gray-900">
                          Payment method
                        </h3>

                        <div className="border border-gray-100 rounded-xl p-3 flex items-center justify-between bg-gray-50/50">
                          <div className="flex items-center gap-3">
                            <span className="text-blue-800 font-black text-sm tracking-wider">
                              VISA
                            </span>
                            <span className="text-xs text-gray-600 font-mono">
                              •••• •••• •••• 9271
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-400">
                            Expires 09/28
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <button className="w-full py-2 rounded-xl border border-gray-100 text-xs font-medium text-gray-600 hover:bg-gray-50 transition cursor-pointer">
                            Update
                          </button>
                        </div>

                        <button className="flex items-center gap-1.5 text-xs font-medium text-[#6E36E4] hover:underline pt-1 cursor-pointer">
                          <Plus className="w-3.5 h-3.5" /> Add payment method
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-2xs space-y-4">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900">
                        Plan Benefits
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Everything included in your professional plan
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6 text-xs text-gray-700 pt-2 border-t border-gray-50">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>60 FPS export</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>Unlimited Projects</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>No watermark</span>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>Background removal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>AI video enhancement</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>Custom presets</span>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>Auto captions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>AI voice generation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4]" />
                          <span>Up to 4k video export</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <p className="text-xs text-gray-500 -mt-4">
                    Choose the perfect plan for your creative needs
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="border border-gray-100 rounded-2xl p-5 bg-white space-y-4 shadow-2xs">
                      <div>
                        <h3 className="text-xs font-bold text-gray-900">
                          Creator
                        </h3>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          For content creators and growing channels
                        </p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          $16
                        </span>
                        <span className="text-xs text-gray-400"> / month</span>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          Billed monthly
                        </p>
                      </div>
                      <button className="w-full py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer">
                        Choose Plan
                      </button>

                      <div className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-[11px] text-gray-600 pt-3 border-t border-gray-50">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>60 FPS export</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>Background removal</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>Unlimited Projects</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>AI video enhancement</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>No watermark</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-[#6E36E4] rounded-2xl p-5 bg-white space-y-4 shadow-md relative">
                      <div>
                        <h3 className="text-xs font-bold text-gray-900">
                          Professional
                        </h3>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          For professional creators and freelancers
                        </p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          $40
                        </span>
                        <span className="text-xs text-gray-400"> / month</span>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          Billed monthly
                        </p>
                      </div>
                      <button className="w-full py-2.5 rounded-xl bg-[#6E36E4] text-white text-xs font-semibold shadow-2xs cursor-pointer">
                        Current Plan
                      </button>

                      <div className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-[11px] text-gray-600 pt-3 border-t border-gray-50">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>60 FPS export</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>Background removal</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>Unlimited Projects</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>AI video enhancement</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>No watermark</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-100 rounded-2xl p-5 bg-white space-y-4 shadow-2xs">
                      <div>
                        <h3 className="text-xs font-bold text-gray-900">
                          Studio
                        </h3>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          For teams and production studio
                        </p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          $80
                        </span>
                        <span className="text-xs text-gray-400"> / month</span>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          Billed monthly
                        </p>
                      </div>
                      <button className="w-full py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer">
                        Choose Plan
                      </button>

                      <div className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-[11px] text-gray-600 pt-3 border-t border-gray-50">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>60 FPS export</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>Background removal</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>Unlimited Projects</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>AI video enhancement</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#6E36E4] shrink-0" />
                          <span>No watermark</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-2xs space-y-4">
                <h3 className="text-xs font-bold text-gray-900">Invoice</h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-normal">
                        <th className="pb-3 font-normal">Invoice Date</th>
                        <th className="pb-3 font-normal">Invoice ID</th>
                        <th className="pb-3 font-normal">Total</th>
                        <th className="pb-3 text-right font-normal"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-gray-700">
                      {invoices.map((inv) => (
                        <tr
                          key={inv.id}
                          className="hover:bg-gray-50/50 transition"
                        >
                          <td className="py-3 text-gray-600">{inv.date}</td>
                          <td className="py-3 font-mono text-gray-800">
                            {inv.id}
                          </td>
                          <td className="py-3 font-medium text-gray-900">
                            {inv.total}
                          </td>
                          <td className="py-3 text-right">
                            <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                              <MoreHorizontal className="w-4 h-4 ml-auto" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* OVERLAY MODAL 1: EDIT HEADER BLOCK ONLY */}
          {editModalType === "header" && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 max-w-md w-full space-y-5 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="text-sm font-bold text-gray-900">
                    Edit Profile Header
                  </h3>
                  <button
                    onClick={handleCloseEditModal}
                    className="text-gray-400 hover:text-gray-600 transition p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={tempProfileData.firstName}
                        onChange={handleProfileInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={tempProfileData.lastName}
                        onChange={handleProfileInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 font-medium mb-1">
                      Role / Job Title
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={tempProfileData.role}
                      onChange={handleProfileInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 font-medium mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={tempProfileData.location}
                      onChange={handleProfileInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handleCloseEditModal}
                      className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#6E36E4] text-white text-xs font-semibold hover:bg-purple-700 transition shadow-2xs cursor-pointer"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* OVERLAY MODAL 2: EDIT PERSONAL INFORMATION BLOCK ONLY */}
          {editModalType === "personal" && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 max-w-lg w-full space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="text-sm font-bold text-gray-900">
                    Edit Personal Information
                  </h3>
                  <button
                    onClick={handleCloseEditModal}
                    className="text-gray-400 hover:text-gray-600 transition p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={tempProfileData.firstName}
                        onChange={handleProfileInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={tempProfileData.lastName}
                        onChange={handleProfileInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={tempProfileData.email}
                        onChange={handleProfileInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={tempProfileData.username}
                        onChange={handleProfileInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 font-medium mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={tempProfileData.phone}
                      onChange={handleProfileInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 font-medium mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      rows="3"
                      value={tempProfileData.bio}
                      onChange={handleProfileInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-purple-500 focus:bg-white resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handleCloseEditModal}
                      className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#6E36E4] text-white text-xs font-semibold hover:bg-purple-700 transition shadow-2xs cursor-pointer"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* OVERLAY MODAL FOR DEACTIVATION / DELETION */}
          {accountActionModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full text-center space-y-6 shadow-xl">
                <h3 className="text-base font-semibold text-gray-900">
                  {accountActionModal === "deactivate"
                    ? "Are you sure you want to disable your account?"
                    : "Are you sure you want to delete your account?"}
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setAccountActionModal(null)}
                    className="px-6 py-2 rounded-xl border border-emerald-400 text-emerald-600 bg-emerald-50 text-xs font-semibold hover:bg-emerald-100 transition cursor-pointer"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setAccountActionModal(null)}
                    className="px-6 py-2 rounded-xl border border-rose-300 text-rose-600 bg-rose-50 text-xs font-semibold hover:bg-rose-100 transition cursor-pointer"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}