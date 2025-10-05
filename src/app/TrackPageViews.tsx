"use client";

// Add this to fix the TypeScript error
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TrackPageViews() {
  const pathname = usePathname();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      process.env.NEXT_PUBLIC_GA_ID
    ) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);
  return null;
}