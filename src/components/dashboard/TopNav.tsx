"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useTheme } from "@/components/ThemeProvider";
import MaterialIcon from "@/components/MaterialIcon";

interface TopNavProps {
  onMenuClick: () => void;
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  const { data: session } = useSession();
  const { theme, toggle } = useTheme();
  const user = session?.user;

  return (
    <header className="sticky top-0 w-full z-40 bg-surface/80 dark:bg-[#0b1326]/80 backdrop-blur-md shadow-[0px_2px_10px_0px_rgba(75,70,92,0.1)] flex justify-between items-center h-16 px-6">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-surface-container-high rounded-lg transition-colors"
        >
          <MaterialIcon name="menu" className="text-on-surface-variant" />
        </button>
        <div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-primary/20 transition-all rounded-lg overflow-hidden">
          <MaterialIcon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            size={20}
          />
          <input
            className="w-full bg-transparent border-none pl-10 pr-4 py-2 text-sm focus:ring-0 placeholder:text-on-surface-variant/50"
            placeholder="Search (Ctrl+/)"
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded-full p-2 transition-all">
          <MaterialIcon
            name="notifications"
            className="text-on-surface-variant"
          />
        </button>
        <button
          onClick={toggle}
          className="hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded-full p-2 transition-all"
        >
          <MaterialIcon
            name={theme === "dark" ? "light_mode" : "dark_mode"}
            className="text-on-surface-variant"
          />
        </button>
        <div className="h-8 w-[1px] bg-outline-variant mx-2" />
        <Link
          href="/profile/dashboard"
          className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all group"
        >
          {user?.image ? (
            <img
              className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
              src={user.image}
              alt={user.name || "User"}
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs ring-2 ring-transparent group-hover:ring-primary transition-all">
              {user?.name?.charAt(0) || "U"}
            </div>
          )}
          <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors hidden sm:block">
            {user?.name || "User"}
          </span>
        </Link>
      </div>
    </header>
  );
}
