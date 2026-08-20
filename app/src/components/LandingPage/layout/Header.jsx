"use client"
import Logo from "@/components/ui/logo";
import { ChevronDown, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Home", href: "#home", active: true },
  { label: "Features", href: "#features", caret: true },
  { label: "How it works", href: "#how-it-works" },
  { label: "Templates", href: "#templates", caret: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
          <span className="text-[17px] font-semibold tracking-tight text-foreground">Noviq</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${item.active
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
              {item.caret ? <ChevronDown className="size-3.5 opacity-70" /> : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden items-center gap-1.5 rounded-full bg-[#855BDE] px-4 py-2 text-[13px] font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Start Editing
            <ArrowUpRight className="size-3.5" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-[#855BDE] px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}