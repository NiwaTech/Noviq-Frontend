"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Paperclip,
  Link2,
  Mic,
  Send,
  Scissors,
  MoreHorizontal,
} from "lucide-react";
import { Star } from "@/components/ui/icons";
import { COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                 MOCK DATA                                  */
/* -------------------------------------------------------------------------- */

const MOCK_USER = {
  name: "David",
  avatar: "https://i.pravatar.cc/48?img=12",
  credits: 400,
};

const MOCK_STATUS = {
  date: "Tuesday, Aug 4",
  syncedAgo: "2m ago",
};

// e.g. [{ id: "n1", message: "Your export is ready" }]
const MOCK_NOTIFICATIONS = [];

const MOCK_COLLABORATORS = [
  { id: "c1", name: "Ada", avatar: "https://i.pravatar.cc/48?img=12" },
  { id: "c2", name: "Tunde", avatar: "https://i.pravatar.cc/48?img=33" },
  { id: "c3", name: "Mia", avatar: "https://i.pravatar.cc/48?img=47" },
  { id: "c4", name: "Sam", avatar: "https://i.pravatar.cc/48?img=15" },
];

const MOCK_RECENT_PROJECTS = [
  {
    id: "bali-trip",
    title: "Bali Trip - Cinematic Cut",
    updatedAt: "Edited 2h ago",
    progress: 72,
    badge: "HD - 0:34",
  },
  {
    id: "podcast-highlight",
    title: "Podcast Highlight Reel",
    updatedAt: "Edited yesterday",
    progress: 48,
    badge: "2K - 0:15",
  },
  {
    id: "product-launch",
    title: "Product Launch Teaser",
    updatedAt: "Edited 3d ago",
    progress: 88,
    badge: "4K - 1:09",
  },
];

const MOCK_BROWSE_TEMPLATES = [
  {
    id: "product-spotlight",
    title: "Product Spotlight",
    category: "Ads - Trending",
    ratio: "9:16",
    status: "Edited yesterday",
    badgeColor: COLORS.primaryDark,
    ratioBg: COLORS.surfaceAccentLight,
    ratioText: COLORS.primary,
  },
  {
    id: "fast-travel",
    title: "Fast Travel Montage",
    category: "Reels",
    ratio: "16:9",
    status: "Reviewed last week",
    badgeColor: COLORS.danger,
    ratioBg: COLORS.dangerBg,
    ratioText: COLORS.danger,
  },
  {
    id: "founder-story",
    title: "Founder Story",
    category: "Vlogs",
    ratio: "1:1",
    status: "Finalized last month",
    badgeColor: COLORS.warning,
    ratioBg: COLORS.warningBg,
    ratioText: COLORS.primaryDark,
  },
];

const PROJECT_THEMES = [
  { iconColor: COLORS.text, badgeBg: COLORS.surfaceMuted, badgeText: COLORS.text },
  { iconColor: COLORS.primaryDark, badgeBg: COLORS.successBg, badgeText: COLORS.primaryDark },
  { iconColor: COLORS.primary, badgeBg: COLORS.surfaceAccentLight, badgeText: COLORS.primary },
];

function UploadVideoPillIcon({ className, style }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M16.5 10.5V14.5C16.5 15.6046 15.6046 16.5 14.5 16.5H5.5C4.39543 16.5 3.5 15.6046 3.5 14.5V5.5C3.5 4.39543 4.39543 3.5 5.5 3.5H9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 3.5L9.5 10.5M16.5 3.5H12M16.5 3.5V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InspirationLinkPillIcon({ className, style }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M8.2 11.8L11.8 8.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.6 6.4L11.9 5.1C13.3 3.7 15.6 3.7 17 5.1C18.4 6.5 18.4 8.8 17 10.2L15.4 11.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.4 13.6L8.1 14.9C6.7 16.3 4.4 16.3 3 14.9C1.6 13.5 1.6 11.2 3 9.8L4.6 8.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GenerateScriptPillIcon({ className, style }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M10 3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V14.5C3.5 15.6046 4.39543 16.5 5.5 16.5H14.5C15.6046 16.5 16.5 15.6046 16.5 14.5V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.85 2.65C15.4 2.1 16.3 2.1 16.85 2.65C17.4 3.2 17.4 4.1 16.85 4.65L11.2 10.3L8.5 11L9.2 8.3L14.85 2.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectClapperboardIcon({ className, color, cutoutColor }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color }}
    >
      {/* Tilted top clapper flap */}
      <path
        d="M3.2 7.4L18.6 3.1C19.5 2.85 20.4 3.4 20.65 4.3L21.3 6.6L4.6 11.25L3.95 8.95C3.7 8.05 2.3 7.65 3.2 7.4Z"
        fill="currentColor"
      />
      {/* Diagonal stripes on top flap */}
      <path
        d="M7.2 6.3L9.4 9.9M11.6 5.05L13.8 8.65M16 3.8L18.2 7.4"
        stroke={cutoutColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Main clapper body */}
      <rect
        x="4"
        y="10.5"
        width="16"
        height="10.5"
        rx="2.2"
        fill="currentColor"
      />
      {/* Play triangle cutout */}
      <path d="M10.4 13.3L14.6 15.75L10.4 18.2V13.3Z" fill={cutoutColor} />
    </svg>
  );
}

const QUICK_ACTIONS = [
  {
    id: "upload",
    label: "Upload video",
    icon: UploadVideoPillIcon,
    iconColor: COLORS.warning,
  },
  {
    id: "link",
    label: "Paste inspiration link",
    icon: InspirationLinkPillIcon,
    iconColor: COLORS.danger,
  },
  {
    id: "script",
    label: "Generate a script",
    icon: GenerateScriptPillIcon,
    iconColor: COLORS.success,
  },
  {
    id: "templates",
    label: "Browse templates",
    icon: Scissors,
    iconColor: COLORS.primary,
  },
];

export default function WorkspaceDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [prompt, setPrompt] = useState("");
  const [activeAction, setActiveAction] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const filteredProjects = MOCK_RECENT_PROJECTS
    // Theme by original position: 1st = dark, 2nd = dark purple, 3rd and beyond = light.
    // Assigned before filtering so a project keeps its color while searching
    .map((item, index) => ({
      ...item,
      ...PROJECT_THEMES[Math.min(index, PROJECT_THEMES.length - 1)],
    }))
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

  const filteredTemplates = MOCK_BROWSE_TEMPLATES.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setPrompt("");
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ color: COLORS.text }}
    >
      {/* Sticky Top Header */}
      <header
        className="sticky -top-5 z-30 -mt-5"
        style={{ backgroundColor: COLORS.surface }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 py-3 sm:gap-4 sm:py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-xl leading-tight font-bold tracking-tight">
              Good morning, {MOCK_USER.name}
            </h1>
            <p className="mt-0.5 text-[11px]" style={{ color: COLORS.textSubtle }}>
              {MOCK_STATUS.date} · Studio synced {MOCK_STATUS.syncedAgo}
            </p>
          </div>

          <div className="relative flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="flex h-6 w-fit items-center gap-2.5 rounded-xl px-2.5 mr-15 ">
              <Search
                className="h-4 w-4 shrink-0"
                style={{ color: COLORS.textPlaceholder }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates, projects..."
                aria-label="Search templates, projects"
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>

            {/* Notifications Button & Popover */}
            <div className="sm:relative">
              <button
                type="button"
                aria-label="Notifications"
                aria-expanded={notificationsOpen}
                onClick={() => {
                  setNotificationsOpen((prev) => !prev);
                  setProfileMenuOpen(false);
                }}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-opacity hover:opacity-85"
                style={{ backgroundColor: COLORS.surfaceAccentLight }}
              >
                <Bell
                  className="h-4 w-4"
                  style={{ color: COLORS.primary }}
                  fill={COLORS.primary}
                />
              </button>

              {notificationsOpen && (
                <div
                  role="region"
                  aria-label="Notifications panel"
                  className="absolute inset-x-0 top-full z-40 mt-2 rounded-2xl border p-4 shadow-md sm:inset-x-auto sm:right-0 sm:w-72"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.cardBg,
                    color: COLORS.text,
                  }}
                >
                  <div
                    className="flex items-center justify-between border-b pb-2.5"
                    style={{ borderColor: COLORS.border }}
                  >
                    <span className="text-xs font-semibold">Notifications</span>
                    <button
                      type="button"
                      onClick={() => setNotificationsOpen(false)}
                      className="cursor-pointer text-xs hover:underline"
                      style={{ color: COLORS.textSubtle }}
                    >
                      Close
                    </button>
                  </div>
                  {MOCK_NOTIFICATIONS.length === 0 ? (
                    <p
                      className="mt-3 text-xs"
                      style={{ color: COLORS.textMuted }}
                    >
                      No new notifications right now.
                    </p>
                  ) : (
                    <ul className="mt-3 space-y-2">
                      {MOCK_NOTIFICATIONS.map((n) => (
                        <li
                          key={n.id}
                          className="text-xs"
                          style={{ color: COLORS.textMuted }}
                        >
                          {n.message}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Credits Pill */}
            <div
              className="flex h-8 items-center gap-2 rounded-lg px-2 text-xs shadow-sm"
              style={{
                backgroundColor: COLORS.primary,
                color: COLORS.buttonText,
              }}
            >
              <Star width={16} height={16} color={COLORS.buttonText} />
              <span>{MOCK_USER.credits} Credits</span>
            </div>

            {/* Profile Button & Menu */}
            <div className="relative sm:ml-3">
              <button
                type="button"
                aria-label="Profile menu"
                aria-expanded={profileMenuOpen}
                onClick={() => {
                  setProfileMenuOpen((prev) => !prev);
                  setNotificationsOpen(false);
                }}
                className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full transition-opacity hover:opacity-85"
                title={MOCK_USER.name}
              >
                <img
                  src={MOCK_USER.avatar}
                  alt={MOCK_USER.name}
                  className="h-full w-full object-cover"
                />
              </button>

              {profileMenuOpen && (
                <div
                  role="menu"
                  aria-label="Profile options"
                  className="absolute right-0 z-40 mt-2 w-52 rounded-2xl border p-2 shadow-md"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.cardBg,
                    color: COLORS.text,
                  }}
                >
                  <div
                    className="border-b px-3 py-2"
                    style={{ borderColor: COLORS.border }}
                  >
                    <p className="text-xs font-semibold">{MOCK_USER.name}</p>
                    <p
                      className="text-[11px]"
                      style={{ color: COLORS.textSubtle }}
                    >
                      {MOCK_USER.credits} Credits available
                    </p>
                  </div>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => setProfileMenuOpen(false)}
                    className="mt-1 flex w-full cursor-pointer items-center rounded-xl px-3 py-2 text-left text-xs font-medium transition-colors hover:opacity-80"
                    style={{ color: COLORS.text }}
                  >
                    Account &amp; Billing
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => setProfileMenuOpen(false)}
                    className="flex w-full cursor-pointer items-center rounded-xl px-3 py-2 text-left text-xs font-medium transition-colors hover:opacity-80"
                    style={{ color: COLORS.textMuted }}
                  >
                    Close menu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <div className="mx-auto max-w-7xl space-y-10 py-6 sm:space-y-12">
        {/* Hero Prompt Section */}
        <section className="relative mx-auto flex max-w-4xl flex-col items-center text-center md:px-14">
          {/* Top-right floating badge */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-24 hidden h-6 w-6 animate-bounce items-center justify-center rounded-full border shadow-2xs md:flex"
            style={{
              backgroundColor: COLORS.success,
              borderColor: COLORS.containerBg,
              color: COLORS.buttonText,
            }}
          >
            <Scissors className="h-3 w-3" />
          </span>

          {/* Left floating badge */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-24 left-0 hidden h-6 w-6 animate-bounce items-center justify-center rounded-full border shadow-2xs md:flex"
            style={{
              backgroundColor: COLORS.warning,
              borderColor: COLORS.containerBg,
              color: COLORS.text,
              animationDelay: "150ms",
            }}
          >
            <UploadVideoPillIcon className="h-3 w-3" />
          </span>

          {/* Lower-right floating badge */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-20 bottom-24 hidden h-6 w-6 animate-bounce items-center justify-center rounded-full border shadow-2xs md:flex"
            style={{
              backgroundColor: COLORS.danger,
              borderColor: COLORS.containerBg,
              color: COLORS.buttonText,
              animationDelay: "300ms",
            }}
          >
            <Link2 className="h-3 w-3" />
          </span>

          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full text-sm font-medium"
            style={{
              color: COLORS.primary,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: COLORS.primary }}
            />
            <span>Noviq Studio · AI editing engine online</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What are you creating today?
          </h2>

          <form
            onSubmit={handlePromptSubmit}
            className="mt-8 w-full max-w-2xl rounded-3xl border p-4 text-left shadow-xs"
            style={{
              borderColor: COLORS.border,
              backgroundColor: COLORS.cardBg,
            }}
          >
            <textarea
              rows={1}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask anything..."
              className="w-full resize-none bg-transparent text-sm focus:outline-none"
              style={{ color: COLORS.text }}
            />

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors hover:opacity-80"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.textMuted,
                  }}
                >
                  <Paperclip className="h-3 w-3" />
                  <span>Attach</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors hover:opacity-80"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.textMuted,
                  }}
                >
                  <Link2 className="h-3 w-3" />
                  <span>Add link</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors hover:opacity-80"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.textMuted,
                  }}
                >
                  <Mic className="h-3 w-3" />
                  <span>Voice input</span>
                </button>
              </div>

              <button
                type="submit"
                aria-label="Send prompt"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.buttonText,
                }}
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>

          {/* Quick Action Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {QUICK_ACTIONS.map(({ id, label, icon: Icon, iconColor }) => {
              const isSelected = activeAction === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveAction(isSelected ? null : id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all",
                    isSelected && "ring-2"
                  )}
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: isSelected
                      ? COLORS.surfaceAccentLight
                      : COLORS.containerBg,
                    color: isSelected ? COLORS.primary : COLORS.text,
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: iconColor }} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Recent Projects</h3>
            <button
              type="button"
              className="text-sm font-medium hover:underline"
              style={{ color: COLORS.textMuted }}
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-3xl border p-5 shadow-2xs"
                style={{
                  borderColor: COLORS.border,
                  backgroundColor: COLORS.cardBg,
                }}
              >
                <div>
                  <div
                    className="flex h-44 flex-col justify-between rounded-2xl p-4"
                    style={{ backgroundColor: COLORS.surfaceMuted }}
                  >
                    <ProjectClapperboardIcon
                      className="h-6 w-6"
                      color={project.iconColor}
                      cutoutColor={COLORS.surfaceMuted}
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2.5">
                        <div
                          className="h-1.5 flex-1 overflow-hidden rounded-full"
                          style={{ backgroundColor: COLORS.border }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${project.progress}%`,
                              backgroundColor: COLORS.text,
                            }}
                          />
                        </div>
                        <span
                          className="text-xs font-medium"
                          style={{ color: COLORS.textMuted }}
                        >
                          {project.progress}%
                        </span>
                      </div>
                      <p className="text-base font-bold">{project.title}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs" style={{ color: COLORS.textSubtle }}>
                    {project.updatedAt}
                  </span>
                  <span
                    className="shrink-0 rounded-xl px-3 py-1.5 text-xs font-semibold"
                    style={{
                      backgroundColor: project.badgeBg,
                      color: project.badgeText,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Browse Templates */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Browse Templates</h3>
            <button
              type="button"
              className="text-sm font-medium hover:underline"
              style={{ color: COLORS.textMuted }}
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {filteredTemplates.map((tpl) => (
              <article
                key={tpl.id}
                className="flex flex-col justify-between rounded-3xl border p-5 shadow-2xs"
                style={{
                  borderColor: COLORS.border,
                  backgroundColor: COLORS.cardBg,
                }}
              >
                <div>
                  <div
                    className="flex h-44 flex-col justify-between rounded-2xl p-4"
                    style={{ backgroundColor: COLORS.surfaceMuted }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: tpl.ratioBg,
                          color: tpl.ratioText,
                        }}
                      >
                        {tpl.ratio}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 shrink-0"
                        style={{ color: tpl.badgeColor }}
                      >
                        <path
                          fill="currentColor"
                          d="M12 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 3.1 1.18 2.39 2.64.38-1.91 1.86.45 2.63L12 11.08l-2.36 1.24.45-2.63-1.91-1.86 2.64-.38L12 5.1Zm-4.2 10.65 4.2 2.2 4.2-2.2 1.15 5.45-3.45-1.45-1.9 2.4-1.9-2.4-3.45 1.45 1.15-5.45Z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-base font-bold">{tpl.title}</p>
                      <p
                        className="mt-0.5 text-xs"
                        style={{ color: COLORS.textSubtle }}
                      >
                        {tpl.category}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex shrink-0 -space-x-2">
                      {MOCK_COLLABORATORS.map(({ id, name, avatar }) => (
                        <img
                          key={id}
                          src={avatar}
                          alt={name}
                          title={name}
                          className="inline-block h-6 w-6 rounded-full border-2 object-cover"
                          style={{ borderColor: COLORS.containerBg }}
                        />
                      ))}
                    </div>
                    <span className="truncate text-xs" style={{ color: COLORS.textSubtle }}>
                      {tpl.status}
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label={`More options for ${tpl.title}`}
                    className="shrink-0 rounded-lg p-1.5 hover:opacity-75"
                    style={{ color: COLORS.textMuted }}
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}