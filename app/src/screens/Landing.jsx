"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Wand2,
  Clapperboard,
  MessageSquareText,
  Layers,
  Mic,
  LayoutTemplate,
  Award,
  Check,
  CirclePlay
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Wand2,
    color: "bg-rose-50 text-rose-500",
    title: "AI Style Match",
    description:
      "Paste a video link, upload your clips, and let Noviq mirror the pacing, transitions, and storytelling style across your new footage.",
  },
  {
    icon: Clapperboard,
    color: "bg-blue-50 text-blue-500",
    title: "Smart Video Editing",
    description:
      "AI automatically finds the best moments, trims unnecessary clips, and delivers a polished edit in minutes.",
  },
  {
    icon: MessageSquareText,
    color: "bg-violet-50 text-violet-600",
    title: "Prompt-Based Editing",
    description:
      "Describe the video you want, and Noviq transforms your footage into a professional edit, no technical skills required.",
  },
  {
    icon: Layers,
    color: "bg-emerald-50 text-emerald-500",
    title: "AI Storyboarding",
    description:
      "Noviq organizes your footage into a clear, engaging story before editing begins to help you plan every scene.",
  },
  {
    icon: Mic,
    color: "bg-amber-50 text-amber-500",
    title: "AI Voice Studio",
    description:
      "Generate natural voiceovers, remove background noise, and enhance your audio with AI.",
  },
  {
    icon: LayoutTemplate,
    color: "bg-indigo-50 text-indigo-500",
    title: "Smart Templates",
    description:
      "Choose a template, upload your clips, and let Noviq turn it into a polished video in just a few clicks.",
  },
];

const steps = [
  {
    number: "01",
    color: "bg-fuchsia-50",
    accent: "text-fuchsia-900",
    title: "Tell Noviq Your Vision",
    description:
      "Upload your footage, paste an inspiration link, or simply describe the video you want to create.",
  },
  {
    number: "02",
    color: "bg-violet-50",
    accent: "text-violet-900",
    title: "Let AI Do the Heavy Lifting",
    description:
      "Noviq analyzes your content and automatically creates a polished first draft with smart cuts, transitions, and storytelling.",
  },
  {
    number: "03",
    color: "bg-indigo-50",
    accent: "text-[#012A76]",
    title: "Refine & Publish",
    description:
      "Make any final adjustments in the editor, then export a platform-ready video for TikTok, Instagram, YouTube, and more.",
  },
];

const templates = [
  {
    title: "Product Spotlight",
    tag: "Trending",
    ratio: "9:16",
    images: ["/Humanoid.png", "/Humanoid.png", "/Humanoid.png", "/Humanoid.png"]
  },
  {
    title: "Fast Travel Montage",
    tag: "New",
    ratio: "16:9",
    images: ["/Humanoid.png", "/Humanoid.png", "/Humanoid.png", "/Humanoid.png"]
  },
  {
    title: "Founder Story",
    tag: "Popular",
    ratio: "9:16",
    images: ["/Humanoid.png", "/Humanoid.png", "/Humanoid.png", "/Humanoid.png"]
  },
];

const plans = [
  {
    name: "Free Plan",
    price: 0,
    description: "Start for free and upgrade when you're ready.",
    cta: "Start Free Trial",
    highlighted: false,
    features: [
      "Daily AI credits",
      "Up to 3 active projects",
      "AI-powered video editing",
      "Standard exports (1080p)",
      "Auto captions",
    ],
  },
  {
    name: "For Creators",
    price: 12,
    description: "For creators who publish every week.",
    cta: "Start Creator Plan",
    highlighted: true,
    badge: "Best selling",
    features: [
      "Increased AI credits",
      "Unlimited projects",
      "AI Style Match",
      "AI Script & Hook Generator",
      "4K exports",
    ],
  },
  {
    name: "Studio Plan",
    price: 39,
    description: "For teams managing client projects.",
    cta: "Contact Support",
    highlighted: false,
    features: [
      "Unlimited AI credits",
      "Team collaboration",
      "Shared workspaces",
      "Advanced AI editing tools",
      "Voice cloning (Coming Soon)",
    ],
  },
];

const faqs = [
  {
    question: "Do I need video editing experience?",
    answer:
      "Not at all. Noviq is designed for everyone, from beginners to professional editors. Simply upload your footage or describe what you want, and AI takes care of the heavy lifting.",
  },
  {
    question: "Can I edit the AI-generated video?",
    answer:
      "Yes. Every AI-generated draft opens in a full editor where you can trim, reorder, restyle, and fine-tune every detail before publishing.",
  },
  {
    question: "Can I recreate the style of another video?",
    answer:
      "Yes. Paste a link to a video you love and Noviq's AI Style Match will mirror its pacing, transitions, and tone using your own footage.",
  },
  {
    question: "Which platforms can I export for?",
    answer:
      "Noviq exports platform-ready videos optimized for TikTok, Instagram Reels, YouTube Shorts, and traditional landscape formats.",
  },
  {
    question: "What types of videos can I create?",
    answer:
      "From product spotlights and travel montages to founder stories and social ads, Noviq's templates and prompt-based editing handle almost any format.",
  },
];

export default function Index() {
  const [yearly, setYearly] = useState(false);

  return (
    <div id="top" className="flex-1">
      <div className="container mx-auto">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-16">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#7E56D8] shadow-sm">
              &quot;Edit Videos at the Speed of Thought&quot;
            </span>

            <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-dark md:text-4xl">
              Your AI Video Editor That Actually Understands Creativity
            </h1>

            <p className="mt-6 max-w-xl text-base text-slate-500 sm:text-lg">
              Transform raw footage, inspiration links, or simple prompts into
              professionally edited videos in minutes. Let AI handle the
              repetitive work.
            </p>

            <div className="mt-8 flex flex-row items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#7E56D8] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#6b45c3]"
              >
                Start Creating Free
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:border-[#7E56D8] hover:text-[#7E56D8]"
              >
                <CirclePlay className="h-4 w-4" />
                Watch Demo
              </a>
            </div>

            {/* App mockup */}
            <div className="mt-12 bg-transparent">
              <Image
                src="/LandingPagemockup.png"
                alt="Noviq Interface Mockup"
                width={1280}
                height={920}
                className="mx-auto w-full max-w-5xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-[#fcfcff] py-16 sm:py-20">
          <div className="container">
            <header className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7E56D8]">
                Our Core Features
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-2xl">
                Everything You Need to Start Creating
              </h2>
              <p className="mt-4 text-slate-500">
                From AI-powered editing to voice generation and smart exports,
                Noviq automates the tedious parts of video production so you
                can focus on telling great stories.
              </p>
            </header>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl bg-white p-5 shadow-[0_8px_30px_rgba(85,55,140,0.04)] transition-shadow hover:shadow-md"
                >
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl",
                      feature.color,
                    )}
                  >
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-white py-16 sm:py-20">
          <div className="container">
            <header className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7E56D8]">
                How It Works
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-2xl">
                Create Stunning Videos in Just Three Simple Steps
              </h2>
              <p className="mt-4 text-slate-500">
                From raw footage to a polished final video, Noviq handles the
                heavy lifting while you stay in control.
              </p>
            </header>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className={cn("rounded-xl p-5 sm:p-6", step.color)}
                >
                  <span className={cn("text-3xl font-bold", step.accent)}>
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-bold text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="bg-[#fcfcff] py-16 sm:py-20">
          <div className="container">
            <header className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7E56D8]">
                Smart Templates
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-2xl">
                Start with Ready-Made Designs
              </h2>
              <p className="mt-4 text-slate-500">
                Prompt-ready starting points with pacing, captions and grade
                already dialed in.
              </p>
            </header>

            <div className="mt-20 grid gap-6 px-10 sm:grid-cols-3">
              {templates.map((template) => (
                <article key={template.title} className="relative pt-6">
                  <div className="absolute inset-x-0 top-0 z-0 mx-auto h-24 w-[80%] rounded-t-2xl bg-[#EDE8FB]" />
                  <div className="absolute inset-x-0 top-3 z-10 mx-auto h-24 w-[90%] rounded-t-2xl bg-[#F4F1FC]" />

                  {/* Front card */}
                  <div className="relative z-20 overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_-8px_rgba(16,24,40,0.10)]">
                    <div className="relative h-40 bg-[#F7F5FD] p-4">
                      <span className="rounded-full bg-[#EDE8FB] px-3 py-1 text-xs font-semibold text-[#7E56D8]">
                        {template.ratio}
                      </span>
                      <span className="absolute right-4 top-4 text-[#7E56D8]">
                        <Award className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-brand-dark">{template.title}</h3>
                      <p className="text-sm text-gray-500">{template.tag}</p>
                      <div className="mt-3 flex -space-x-2">
                        {template.images.map((image, i) => (
                          <Image
                            key={`${template.title}-${i}`}
                            src={image}
                            alt="Template thumbnail"
                            width={24}
                            height={24}
                            className="h-6 w-6 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#templates"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7E56D8] hover:underline"
              >
                View all
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-white py-16 sm:py-20">
          <div className="container">
            <header className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7E56D8]">
                Pricing
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-2xl">
                Simple Plans That Scale With Your Creativity
              </h2>
              <p className="mt-4 text-slate-500">
                Start for free and upgrade when you&apos;re ready. Whether you&apos;re
                creating your first video or managing client projects, there&apos;s
                a plan for you.
              </p>
            </header>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span
                className={cn(
                  "text-sm font-bold",
                  !yearly ? "text-brand-dark" : "text-slate-400",
                )}
              >
                Monthly
              </span>
              <Switch checked={yearly} onCheckedChange={setYearly} />
              <span
                className={cn(
                  "flex items-center gap-2 text-sm font-bold",
                  yearly ? "text-brand-dark" : "text-slate-400",
                )}
              >
                Yearly
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-600">
                  SAVE 20%
                </span>
              </span>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => {
                const price = yearly
                  ? Math.round(plan.price * 0.8)
                  : plan.price;
                return (
                  <article
                    key={plan.name}
                    className={cn(
                      "relative rounded-2xl border p-8",
                      "border-slate-200 bg-white shadow-[0_8px_30px_rgba(85,55,140,0.04)]",
                    )}
                  >
                    {plan.badge && (
                      <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow">
                        {plan.badge}
                      </span>
                    )}
                    <p
                      className={cn(
                        "text-xs font-semibold uppercase tracking-widest",
                        "text-[#7E56D8]",
                      )}
                    >
                      {plan.name}
                    </p>
                    <div className="mt-4 flex items-end gap-1">
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="pb-1 text-sm text-slate-400">
                        /month
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      {yearly ? "Billed yearly" : "Billed monthly"}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <Check size={14} className="mt-1 text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#pricing"
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7E56D8] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6b45c3]"
                    >
                      {plan.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container">
            <header className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7E56D8]">
                FAQs
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-2xl">
                Everything You Need to Know
              </h2>
            </header>

            <div className="mx-auto mt-10 max-w-2xl">
              <Accordion type="single" collapsible defaultValue="item-0">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${i}`}
                    className="mb-2 rounded-xl border border-slate-200 bg-white px-5 last:mb-0"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-brand-dark hover:no-underline [&>svg]:text-[#7E56D8]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-slate-500">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="w-full bg-white py-12 sm:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="max-w-xl text-2xl font-bold text-brand-dark sm:text-3xl">
                Your Next Video Shouldn&apos;t Take All Day
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-500">
                Create better videos faster with an AI creative partner that
                helps you edit, not replace your creativity.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#7E56D8] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#6b45c3]"
              >
                Start editing free
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#7E56D8] bg-white px-5 py-2.5 text-xs font-semibold text-[#7E56D8] transition-colors hover:bg-slate-50"
              >
                Book a Demo Now
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}