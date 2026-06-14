import React from "react";

const MARK = `${process.env.PUBLIC_URL || ""}/ailimits-mark.png`;

// The AILIMITS wing mark + wordmark. Use across nav, footer, auth and founder pages.
export const Logo = ({ className = "", markClass = "h-8 w-auto", wordClass = "text-lg" }) => (
  <span className={`flex items-center gap-2.5 ${className}`}>
    <img src={MARK} alt="AILIMITS" className={markClass} />
    <span className={`font-heading font-bold tracking-tight text-white ${wordClass}`}>
      AI<span className="text-violet-400">LIMITS</span>
    </span>
  </span>
);

export const LogoMark = ({ className = "h-8 w-auto" }) => (
  <img src={MARK} alt="AILIMITS" className={className} />
);
