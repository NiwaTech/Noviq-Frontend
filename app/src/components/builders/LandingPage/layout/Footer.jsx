import Link from "next/link";
import { Sparkles, AtSign, Globe, Share2, Hash } from "lucide-react";
import Logo from "@/components/ui/logo";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Templates", href: "/#templates" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "What's New", href: "/#top" },
  { label: "Privacy", href: "/privacy" },
];

const socials = [
  { icon: AtSign, label: "Twitter" },
  { icon: Share2, label: "LinkedIn" },
  { icon: Hash, label: "Facebook" },
  { icon: Globe, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#130138] text-white">
      <div className="container mx-auto flex flex-col items-center gap-8 py-14">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-extrabold tracking-tight">Noviq</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40 pl-8">
            &copy; {new Date().getFullYear()} NoviqApp. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#top"
                aria-label={label}
                className="text-white/50 transition-colors hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}