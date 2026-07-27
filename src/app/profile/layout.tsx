"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopNav from "@/components/dashboard/TopNav";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-surface dark:bg-[#0b1326]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 md:ml-[260px] flex flex-col min-h-screen">
        <TopNav onMenuClick={() => setSidebarOpen(true)} />
        {children}
      </main>
    </div>
  );
}
