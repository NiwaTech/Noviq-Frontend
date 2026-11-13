"use client";
import Logo from "@/components/ui/logo";
import { COLORS } from "@/lib/constants";
import { Settings, Support, Home, Projects, Logout, Star } from "@/components/ui/icons";
import { useNavigate } from "@/lib/hooks/router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FolderClock, Plus, Search } from "lucide-react";

// Templates Icon
const TemplatesIcon = ({ width = 16, height = 16 }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h5l2 2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <path d="M10 10h7a1 1 0 0 1 1 1v2" />
        <line x1="13" y1="14" x2="18" y2="14" />
    </svg>
);

const mainPaths = [
    { label: "Dashboard", value: "dashboard", icon: Home },
    { label: "Noviq AI", value: "aispace", icon: Star },
    { label: "Projects", value: "projects", icon: Projects },
    { label: "Templates", value: "templates", icon: TemplatesIcon },
];

const secondaryPaths = [
    { label: "Settings", value: "settings", icon: Settings },
    { label: "Support", value: "support", icon: Support },
];

const chatHistories = [
    {
        chathistoryname: "Summer Campaign Video",
        time: "1d ago",
        chathistoryid: "chat-summer-campaign",
    },
    {
        chathistoryname: "Social media content ideas",
        time: "2hr ago",
        chathistoryid: "chat-social-media",
    },
    {
        chathistoryname: "Product launch campaign",
        time: "4hr ago",
        chathistoryid: "chat-product-launch",
    },
    {
        chathistoryname: "Video storyboard",
        time: "Yesterday",
        chathistoryid: "chat-video-storyboard",
    },
];

export default function DesktopSideNav({ onSelect }) {
    const [active, setActive] = useState("dashboard");
    const navigate = useNavigate();

    const handleClick = (value) => {
        onSelect?.(value);
        setActive(value);
    };

    const renderItem = ({ label, value, icon: Icon }) => {
        const isActive = active === value;

        return (
            <button
                key={value}
                onClick={() => handleClick(value)}
                className={cn(
                    "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors",
                    isActive && "bg-[#e0dfe2]"
                )}
            >
                <div className="flex items-center justify-center h-5 w-5 shrink-0 text-[#5c5875]">
                    <Icon width={16} height={16} />
                </div>
                <span className="text-[12px] font-medium text-[#5c5875]">
                    {label}
                </span>
            </button>
        );
    };

    return (
        <nav
            className="flex flex-col h-screen w-64 pt-5 pb-6 px-4 border-r overflow-y-auto"
            style={{ borderColor: "#EEEEF2", backgroundColor: COLORS.primaryLight }}
        >
            <div className="pb-6 px-1">
                <Logo size={22} color="#fff" />
            </div>

            {/* Main nav */}
            <div className="flex flex-col gap-1 w-full">
                {mainPaths.map(renderItem)}
            </div>

            {/* New Chat Button */}
            <div className="w-full my-4">
                <button
                    onClick={() => navigate.to("new-chat", { relative: true })}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl text-white text-[12px] font-medium bg-[#7c5cfc] transition-opacity hover:opacity-90 shadow-sm"
                >
                    <Plus size={16} />
                    <span>New chat</span>
                </button>
            </div>

            {/* Search Input */}
            <div className="w-full mb-4">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white/60 shadow-2xs" style={{ borderColor: "#EEEEF2" }}>
                    <Search size={14} className="text-[#8A8A94] shrink-0" />
                    <input
                        type="text"
                        placeholder="Search conversation..."
                        className="w-full bg-transparent text-[11px] text-[#5c5875] placeholder-[#8A8A94] focus:outline-none"
                    />
                </div>
            </div>

            {/* Recent Section */}
            <div className="w-full mb-3">
                <div className="text-[10px] font-semibold text-[#8A8A94] px-1 mb-2 uppercase tracking-wider">
                    Recent
                </div>
                <div className="flex flex-col gap-1">
                    {chatHistories.map((chat) => (
                        <button
                            key={chat.chathistoryid}
                            onClick={() => navigate.to(chat.chathistoryid, { relative: true })}
                            className="flex items-start gap-2.5 w-full p-2 rounded-lg text-left transition-colors hover:bg-[#e0dfe2]"
                            title={chat.chathistoryname}
                        >
                            <span className="shrink-0 mt-0.5 text-[#5c5875]">
                                <FolderClock size={16} strokeWidth={2} />
                            </span>
                            <div className="overflow-hidden">
                                <p className="text-[11px] text-[#5c5875] font-medium truncate leading-snug">{chat.chathistoryname}</p>
                                <p className="text-[9px] text-[#8A8A94] leading-none mt-0.5">{chat.time}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Spacer pushes secondary nav to bottom */}
            <div className="flex-1" />

            {/* Secondary nav */}
            <div className="flex flex-col gap-1 w-full pt-3 border-t" style={{ borderColor: "#EEEEF2" }}>
                {secondaryPaths.map(renderItem)}

                {/* Divider Line between Support and Logout */}
                <div className="my-1.5 border-t w-full opacity-60" style={{ borderColor: "#EEEEF2" }} />

                {/* Logout */}
                <button
                    onClick={() => navigate.to("logout")}
                    className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors hover:bg-[#e0dfe2]"
                >
                    <div className="flex items-center justify-center h-5 w-5 shrink-0 text-[#8A8A94]">
                        <Logout width={16} height={16} color="#8A8A94" />
                    </div>
                    <span className="text-[12px] font-medium text-[#8A8A94]">
                        Logout
                    </span>
                </button>
            </div>
        </nav>
    );
}
