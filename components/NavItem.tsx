"use client";

import { useState, type ReactNode } from "react";

export default function NavItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [closed, setClosed] = useState(false);

  return (
    <li
      data-closed={closed}
      className={`group/nav ${className}`}
      onClick={(e) => {
        // koi bhi link click hua to popup band
        if ((e.target as HTMLElement).closest("a[href]")) {
          setClosed(true);
          (document.activeElement as HTMLElement | null)?.blur();
        }
      }}
      // mouse bahar gaya to agli baar hover pe phir khulega
      onMouseLeave={() => setClosed(false)}
    >
      {children}
    </li>
  );
}