"use client";

import { useRouter, usePathname } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0] ?? "home";
  const current = first === "dashboard" ? "home" : first;

  return {
    current,
    pathname,
    segments,
    to: (route, options = {}) => {
      const { params = false, replace = false, relative = false } = options;

      let path;
      if (route === "home") {
        path = "/";
      } else if (route.startsWith("/")) {
        path = route;         
      } else if (relative) {
        path = `${pathname.replace(/\/$/, "")}/${route}`;  
      } else {
        path = `/${route}`;
      }

      const query = params ? new URLSearchParams(params).toString() : "";
      const url = query ? `${path}?${query}` : path;

      replace ? router.replace(url) : router.push(url);
    },
    back: () => router.back(),
    refresh: () => router.refresh(),
  };
};