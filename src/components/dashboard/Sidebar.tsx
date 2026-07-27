"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "@/components/ThemeProvider";
import MaterialIcon from "@/components/MaterialIcon";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/profile/dashboard" },
  { label: "Profile", icon: "person", href: "/profile" },
  { label: "Loyalty Cards", icon: "loyalty", href: "/profile/loyalty-cards" },
  { label: "Customers", icon: "group", href: "/profile/customers" },
  { label: "Reports", icon: "assessment", href: "/profile/reports" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { theme } = useTheme();
  const user = session?.user;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-[260px] bg-surface dark:bg-[#141b2f] shadow-[0px_2px_10px_0px_rgba(75,70,92,0.1)] z-50 flex flex-col gap-2 p-4 overflow-y-auto transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-6 px-4">
          <Image
            src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"}
            alt="myStamp"
            width={150}
            height={36}
            priority
          />
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-md"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <MaterialIcon name={item.icon} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant px-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low dark:bg-surface-container-low">
            {user?.image ? (
              <img
                className="w-10 h-10 rounded-full object-cover shadow-sm"
                src={user.image}
                alt={user.name || "User"}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {user?.name?.charAt(0) || "U"}
              </div>
            )}
            <div className="overflow-hidden flex-1">
              <p className="text-sm font-medium text-on-surface truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-on-surface-variant truncate">
                {user?.email || "user@email.com"}
              </p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="p-2 hover:bg-surface-container-high rounded-lg transition-colors"
              title="Sign out"
            >
              <MaterialIcon
                name="logout"
                className="text-on-surface-variant"
                size={20}
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
