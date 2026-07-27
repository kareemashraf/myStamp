"use client";

import MaterialIcon from "@/components/MaterialIcon";

const kpis = [
  {
    label: "Total Customers",
    value: "25,430",
    change: "+12.5%",
    trend: "up" as const,
    icon: "group",
    color: "primary",
  },
  {
    label: "Total Loyalty Points",
    value: "1.2M",
    change: "+8.2%",
    trend: "up" as const,
    icon: "star",
    color: "secondary",
  },
  {
    label: "Total Free Items",
    value: "4,560",
    change: "+5.4%",
    trend: "up" as const,
    icon: "card_giftcard",
    color: "tertiary",
  },
  {
    label: "Total Products",
    value: "128",
    change: "Stable",
    trend: "stable" as const,
    icon: "shopping_bag",
    color: "outline",
  },
];

const customers = [
  {
    name: "Alexander Wright",
    email: "a.wright@enterprise.com",
    points: "12,450 pts",
    mostOrdered: "Premium Roast",
    orderedIcon: "coffee",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpfwBxQsI9gQUeakk_xQ5l3huSuGY3H8f3Hl2VCVkcGthjVYWNdF5y0IU6tRBAKVQlwg4rF7y5EuECK1aKVYHW6VXIQ05xfRmij2dj9cJQjLdWSmR87VvqYgrq6lh37BUYlOd9gFmTPL89gkTht95BWrMaLyPRX-VmFopmonzo4dt6czq5JpYtbjj0NhKGAcYMqJwZniiwKGOYiylNJmDs_zGNAju3TNIN1YYGUst2s3g9FAVAZAWSQl_cp47mWlTNcbp1XfeVjYyn",
  },
  {
    name: "Elena Rodriguez",
    email: "elena.rod@global.net",
    points: "8,920 pts",
    mostOrdered: "Echo Wireless",
    orderedIcon: "devices",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu69_zOadfIYpItlSA4coVkgozdCiCbov1wVsRCN7r77BlgVK4iiA0VLI7xU9p4j_BS0f6xaZo0q_S4pziTHh5UhvDIsTiJIXhn4FvUcKsACAOoPeaGwU6JZVhzxGsY8BXY5Ad1C4idw5WxpqWFmzUlseempqtwKy-K2zYczczfwcBnxoUJJJEf0PGANYHlJWVhG6vnSA3iBZYzp5oRRvHfIaJsGAnekiUvsRvyURmVJLWeg_dYdzd3rr8QVnUj5FvB-NjPo_Wp4Ir",
  },
  {
    name: "James Chen",
    email: "j.chen@techsolutions.io",
    points: "22,100 pts",
    mostOrdered: "Leather Tote",
    orderedIcon: "shopping_bag",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMKt2--ci5u6Du6i0liPzzbT9L_FoMuc53WVNzUk9I7jWIuGa6oAMQ5tpjU-HoFTFGojpmUdaRT_RA16ln8ga6ddMaiLc9KFTTCWXmOsPfom4DNy_Pf_X9Pt0BfsUGXbBzcV1xmMYQb-RfPR2_mWdYMoRMwarbDcW78dBUHPwzips7onX11-flmvjuFBJymY5kGkv_cz2mDbgUQhNbOaBjWKFDx9dzmzlZI2nHDSir8yE7uwWLFWn-l1SIMR1c_YjJgFHAh35kqDNz",
  },
];

const barData = [
  { label: "A", customers: 40, points: 65 },
  { label: "B", customers: 60, points: 45 },
  { label: "C", customers: 85, points: 30 },
  { label: "D", customers: 50, points: 90 },
];

const topProducts = [
  { name: "Premium Roast", pct: "45%", color: "bg-primary" },
  { name: "Echo Wireless", pct: "22%", color: "bg-secondary" },
  { name: "Leather Tote", pct: "18%", color: "bg-tertiary" },
  { name: "Other", pct: "15%", color: "bg-outline", faded: true },
];

export default function DashboardPage() {
  return (
    <div className="p-6 flex flex-col gap-6 max-w-[1600px] mx-auto w-full">
      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-surface-container-lowest dark:bg-surface-container-low rounded-xl p-6 shadow-[0px_2px_10px_0px_rgba(75,70,92,0.1)] hover:shadow-[0px_4px_18px_0px_rgba(75,70,92,0.15)] transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-on-surface-variant mb-1 font-mono">
                  {kpi.label}
                </span>
                <span className="text-3xl font-bold text-on-surface font-heading">
                  {kpi.value}
                </span>
                <div className="flex items-center gap-1 mt-2">
                  {kpi.trend === "up" ? (
                    <span className="bg-green-500/15 text-green-600 dark:text-green-400 text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                      <MaterialIcon name="arrow_upward" size={14} /> {kpi.change}
                    </span>
                  ) : (
                    <span className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                      {kpi.change}
                    </span>
                  )}
                  <span className="text-xs text-on-surface-variant">vs last month</span>
                </div>
              </div>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  kpi.color === "primary"
                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary"
                    : kpi.color === "secondary"
                    ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary"
                    : kpi.color === "tertiary"
                    ? "bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary"
                    : "bg-outline-variant/10 text-outline group-hover:bg-outline group-hover:text-on-primary"
                }`}
              >
                <MaterialIcon name={kpi.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-8 bg-surface-container-lowest dark:bg-surface-container-low rounded-xl shadow-[0px_2px_10px_0px_rgba(75,70,92,0.1)] overflow-hidden flex flex-col h-[400px]">
          <div className="px-6 py-4 flex items-center justify-between border-b border-outline-variant/30">
            <div>
              <h3 className="text-lg font-semibold text-on-surface font-heading">
                Total Customers Per Day
              </h3>
              <p className="text-xs text-on-surface-variant">
                Performance analysis for the last 7 days
              </p>
            </div>
            <select className="bg-surface dark:bg-surface-container border border-outline-variant rounded-lg text-sm px-3 py-2 focus:ring-primary focus:border-primary">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex-1 relative p-6 flex items-end justify-between">
            <div className="absolute inset-0 p-6 opacity-50 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="purpleGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,150 C100,140 200,170 300,100 C400,30 500,120 600,80 C700,40 800,90 800,90 L800,200 L0,200 Z"
                  fill="url(#purpleGradient)"
                />
                <path
                  d="M0,150 C100,140 200,170 300,100 C400,30 500,120 600,80 C700,40 800,90 800,90"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="flex-1 flex items-end justify-between gap-4 h-full z-10 pt-10">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="flex flex-col items-center gap-3 flex-1">
                  <span className="text-xs text-on-surface-variant">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="lg:col-span-4 bg-surface-container-lowest dark:bg-surface-container-low rounded-xl shadow-[0px_2px_10px_0px_rgba(75,70,92,0.1)] overflow-hidden flex flex-col h-[400px]">
          <div className="px-6 py-4 border-b border-outline-variant/30">
            <h3 className="text-lg font-semibold text-on-surface font-heading">
              Customers vs Points
            </h3>
            <p className="text-xs text-on-surface-variant">Segment correlation</p>
          </div>
          <div className="flex-1 p-6 flex items-end justify-around gap-4">
            {barData.map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-3 h-full justify-end">
                <div className="flex gap-1 h-full items-end">
                  <div
                    className="w-4 bg-primary rounded-t-sm transition-all hover:brightness-110"
                    style={{ height: `${d.customers}%` }}
                  />
                  <div
                    className="w-4 bg-secondary rounded-t-sm transition-all hover:brightness-110"
                    style={{ height: `${d.points}%` }}
                  />
                </div>
                <span className="text-xs text-on-surface-variant">{d.label}</span>
              </div>
            ))}
          </div>
          <div className="p-6 flex items-center justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" /> Customers
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full" /> Points
            </div>
          </div>
        </div>
      </div>

      {/* Table & Donut Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Table */}
        <div className="lg:col-span-9 bg-surface-container-lowest dark:bg-surface-container-low rounded-xl shadow-[0px_2px_10px_0px_rgba(75,70,92,0.1)] overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-on-surface font-heading">
              Latest Customers
            </h3>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant">
                <MaterialIcon
                  name="filter_list"
                  className="text-on-surface-variant"
                  size={20}
                />
              </button>
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition-all">
                Add Customer
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-surface-container dark:bg-surface-container-high text-on-surface-variant text-xs uppercase tracking-wider text-left font-mono">
                <tr>
                  <th className="px-6 py-4 border-b border-outline-variant">Name</th>
                  <th className="px-6 py-4 border-b border-outline-variant">Email</th>
                  <th className="px-6 py-4 border-b border-outline-variant">Points</th>
                  <th className="px-6 py-4 border-b border-outline-variant">Most Ordered</th>
                  <th className="px-6 py-4 border-b border-outline-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-on-surface">
                {customers.map((c) => (
                  <tr
                    key={c.email}
                    className="hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors cursor-default"
                  >
                    <td className="px-6 py-4 border-b border-outline-variant">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={c.avatar}
                          alt={c.name}
                        />
                        <span className="font-medium">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-outline-variant text-on-surface-variant">
                      {c.email}
                    </td>
                    <td className="px-6 py-4 border-b border-outline-variant">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs">
                        {c.points}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-outline-variant">
                      <span className="flex items-center gap-2">
                        <MaterialIcon
                          name={c.orderedIcon}
                          size={18}
                          className="text-tertiary"
                        />
                        {c.mostOrdered}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-outline-variant text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <MaterialIcon name="more_vert" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 flex items-center justify-between border-t border-outline-variant">
            <span className="text-xs text-on-surface-variant">
              Showing 3 of 25,430 customers
            </span>
            <div className="flex gap-1">
              <button className="w-8 h-8 rounded bg-surface dark:bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant">
                <MaterialIcon name="chevron_left" size={18} />
              </button>
              <button className="w-8 h-8 rounded bg-primary text-on-primary font-bold text-sm">
                1
              </button>
              <button className="w-8 h-8 rounded bg-surface dark:bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors">
                2
              </button>
              <button className="w-8 h-8 rounded bg-surface dark:bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant">
                <MaterialIcon name="chevron_right" size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="lg:col-span-3 bg-surface-container-lowest dark:bg-surface-container-low rounded-xl shadow-[0px_2px_10px_0px_rgba(75,70,92,0.1)] overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-outline-variant/30">
            <h3 className="text-lg font-semibold text-on-surface font-heading">
              Top 5 Products
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
            <div className="relative w-48 h-48">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  className="text-surface-container-high dark:text-surface-container"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="12"
                />
                <circle
                  className="text-primary"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                  strokeLinecap="round"
                  strokeWidth="12"
                />
                <circle
                  className="text-secondary"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeDasharray="251.2"
                  strokeDashoffset="150"
                  strokeLinecap="round"
                  strokeWidth="12"
                />
                <circle
                  className="text-tertiary"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeDasharray="251.2"
                  strokeDashoffset="200"
                  strokeLinecap="round"
                  strokeWidth="12"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-on-surface font-heading">
                  72%
                </span>
                <span className="text-xs text-on-surface-variant">Top Tier</span>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6 flex flex-col gap-3">
            {topProducts.map((p) => (
              <div
                key={p.name}
                className={`flex items-center justify-between ${p.faded ? "opacity-50" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${p.color}`} />
                  <span className="text-sm text-on-surface">{p.name}</span>
                </div>
                <span className="font-bold text-on-surface">{p.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-on-surface-variant border-t border-outline-variant/30">
        <span>&copy; 2024 myStamp. All Rights Reserved.</span>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <a href="#" className="hover:text-primary transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Support
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            License
          </a>
        </div>
      </footer>

      {/* FAB */}
      {/* <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <MaterialIcon name="add" filled size={28} />
        <span className="absolute right-full mr-4 bg-inverse-surface text-inverse-on-surface px-4 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          New Campaign
        </span>
      </button> */}
    </div>
  );
}
