"use client"
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/logo";

export default function Authcard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative z-20 -mt-24 flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent px-5 py-8 sm:-mt-16 sm:px-8 sm:py-10 lg:z-auto lg:mt-0 lg:rounded-none lg:px-4 lg:py-6">
      <div className="relative w-full max-w-[380px]">
        {/* logo */}
        <div className="mb-6 flex items-center justify-center gap-2 lg:mb-6">
          <Logo />
          <span className="text-xl font-semibold tracking-tight text-[#14103a]">
            Noviq
          </span>
        </div>

        {/* card */}
        <div className="rounded-[28px] bg-white p-7 shadow-[0_18px_60px_-30px_rgba(61,15,168,0.35)] sm:rounded-2xl sm:p-6 lg:rounded-2xl lg:bg-white/70">
          <h1 className="text-center text-xl font-bold tracking-tight text-[#14103a] sm:text-2xl">
            Sign in with your work email
          </h1>
          <p className="mt-1.5 text-center text-xs text-[#5c5875]">
            Use your work email to sign in to your team workspace
          </p>

          {/* google */}
          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#e6e2f0] bg-white/80 py-2.5 text-sm font-medium text-[#14103a] transition-colors hover:bg-white"
          >
            <svg className="size-4" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.8-6.8C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-2.8-.4-4.1H24v8.2h12.5c-.3 2.1-1.6 5.2-4.6 7.3l7.7 6c4.5-4.2 6.5-10.2 6.5-17.4z" />
              <path fill="#FBBC05" d="M10.5 28.6a14.5 14.5 0 0 1 0-9.2l-7.9-6.1a24 24 0 0 0 0 21.4l7.9-6.1z" />
              <path fill="#34A853" d="M24 48c6.2 0 11.5-2 15.6-5.9l-7.7-6c-2.1 1.4-4.9 2.4-7.9 2.4-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
            </svg>
            Sign in with Google
          </button>

          {/* divider */}
          <div className="my-4 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#e6e2f0]" />
            <span className="text-[11px] font-medium tracking-wide text-[#8b87a1]">OR</span>
            <span className="h-px flex-1 bg-[#e6e2f0]" />
          </div>

          {/* email */}
          <label className="block text-[13px] font-medium text-[#14103a]" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            className="mt-1.5 w-full rounded-xl border border-[#e6e2f0] bg-white/60 px-3.5 py-2.5 text-sm text-[#14103a] placeholder:text-[#a29fb5] focus:border-[#3d0fa8] focus:outline-none"
          />

          {/* password */}
          <label className="mt-4 block text-[13px] font-medium text-[#14103a]" htmlFor="password">
            Password
          </label>
          <div className="relative mt-1.5">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full rounded-xl border border-[#e6e2f0] bg-white/60 px-3.5 py-2.5 pr-11 text-sm text-[#14103a] placeholder:text-[#a29fb5] focus:border-[#3d0fa8] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6b6880]"
            >
              {showPassword ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
            </button>
          </div>

          {/* submit */}
          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-[#3d0fa8] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#340d8f]"
          >
            Sign in
          </button>
        </div>

        {/* footer pill */}
        <div className="mt-5 flex justify-center">
          <div className="rounded-full bg-white/80 px-5 py-2.5 text-[13px] text-[#5c5875] shadow-[0_10px_30px_-20px_rgba(61,15,168,0.4)]">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-semibold text-[#7c4dff]">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none my-auto hidden sm:block">
        <Image src="/halfappleforauthpage.png" alt="" width={220} height={280} className="h-auto w-auto" />
      </div>
    </div>
  );
}