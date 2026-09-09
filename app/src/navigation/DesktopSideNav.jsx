'use client'
import Logo from "@/components/ui/logo";
import { COLORS } from "@/lib/constants";
import { Settings, Support, Home, Projects, Logout, Star } from "@/components/ui/icons";
import { useNavigate } from "@/lib/hooks/router";
import { useState } from "react";
import { cn } from "@/lib/utils";

const mainPaths = [
    { label: "Dashboard", value: "dashboard", icon: Home },
    { label: "Noviq Ai", value: "aispace", icon: Star },
    { label: "Projects", value: "projects", icon: Projects },
];

const secondaryPaths = [
    { label: "Settings", value: "settings", icon: Settings },
    { label: "Support", value: "support", icon: Support },
];

export default function DesktopSideNav({ onSelect }) {
    const [active, setActive] = useState("dashboard")
    const navigate = useNavigate();

    const handleClick = (value) => {
        onSelect(value);
        setActive(value)
    }

    const renderItem = ({ label, value, icon: Icon }) => {

        return (
            <button
                key={value}
                onClick={() => handleClick(value)}
                className="flex flex-col items-center  w-full"
            >
                <div
                    className={cn(
                        "flex items-center justify-center h-10 w-10 rounded-xl transition-colors",
                        active === value && "bg-[#e0dfe2]"
                    )}
                >
                    <Icon
                        width={13}
                        height={13}
                    />
                </div>
                <span
                    className="text-[8px] leading-none"
                    style={{ color: "#8A8A94" }}
                >
                    {label}
                </span>
            </button>
        );
    };

    return (
        <nav
            className="flex flex-col items-center h-screen w-24 pt-4 pb-8 border-r"
            style={{ borderColor: "#EEEEF2", backgroundColor: COLORS.primaryLight }}
        >
            <div className="pb-4">
                <Logo size={18} color="#fff" />
            </div>

            {/* Main nav */}
            <div className="flex flex-col items-center gap-2 w-full px-2">
                {mainPaths.map(renderItem)}
            </div>

            {/* Spacer pushes secondary nav to the bottom */}
            <div className="flex-1" />

            {/* Secondary nav */}
            <div className="flex flex-col items-center  w-full px-2">
                {secondaryPaths.map(renderItem)}

                {/* Logout kept visually separate — destructive/exit action, not a page destination */}
                <button
                    onClick={() => navigate.to("logout")}
                    className="flex flex-col items-center gap-1.5 w-full py-1 mt-1"
                >
                    <div className="flex items-center justify-center  rounded-xl">
                        <Logout width={13} height={13} color="#8A8A94"  />
                    </div>
                    <span className="text-[8px] font-medium leading-none" style={{ color: "#8A8A94" }}>
                        Logout
                    </span>
                </button>
            </div>
        </nav>
    );
}