"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import MaterialIcon from "@/components/MaterialIcon";
import { useTheme } from "@/components/ThemeProvider";
import { getChartTheme } from "@/components/dashboard/chartTheme";

const ApexChart = dynamic(
  () => import("@/components/dashboard/ApexChart"),
  { ssr: false }
);

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

const topProducts = [
  { name: "Premium Roast", pct: "45%", color: "bg-primary" },
  { name: "Echo Wireless", pct: "22%", color: "bg-secondary" },
  { name: "Leather Tote", pct: "18%", color: "bg-tertiary" },
  { name: "Other", pct: "15%", color: "bg-outline", faded: true },
];

export default function DashboardPage() {
  const { theme } = useTheme();
  const chartTheme = useMemo(() => getChartTheme(theme === "dark"), [theme]);
  const tooltipTheme: "light" | "dark" = theme === "dark" ? "dark" : "light";

  const lineChart = useMemo(
    () => ({
      options: {
        chart: { type: "area" as const,zoom: {
          enabled: false,
        }, toolbar: { show: false } },
        colors: [chartTheme.primary],
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" as const, width: 4, lineCap: "round" as const },
        fill: {
          type: "gradient" as const,
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 100],
          },
        },
        grid: { show: false, padding: { left: 12, right: 0, bottom: 12 } },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: { style: { colors: chartTheme.text, fontSize: "12px" }, offsetY: 0, offsetX: 0 },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: { show: false },
        legend: { show: false },
        tooltip: { theme: tooltipTheme },
      },
      series: [{ name: "Customers", data: [50, 60, 30, 100, 170, 80, 120] }],
    }),
    [chartTheme, tooltipTheme]
  );

  const barChart = useMemo(
    () => ({
      options: {
        chart: { type: "bar" as const, toolbar: { show: false } },
        colors: [chartTheme.primary, chartTheme.secondary],
        dataLabels: { enabled: false },
        plotOptions: {
          bar: { borderRadius: 5, borderRadiusApplication: "end" as const, columnWidth: "45%" },
        },
        grid: { show: false, padding: { bottom: 8 } },
        stroke: {
          show: true,
          width: 1,
          colors: chartTheme.text,
        },
        xaxis: {
          categories: ["A", "B", "C", "D"],
          labels: { style: { colors: chartTheme.text, fontSize: "12px" }, offsetY: 6 },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: { show: false },
        legend: {
          position: "bottom" as const,
          horizontalAlign: "center" as const,
          labels: { colors: chartTheme.text },
          markers: { size: 6, shape: "circle" as const, strokeWidth: 0 },
          itemMargin: { horizontal: 10 },
          offsetY: 0,
        },
        tooltip: { theme: tooltipTheme },
      },
      series: [
        { name: "Customers", data: [40, 60, 85, 50] },
        { name: "Points", data: [65, 45, 30, 90] },
      ],
    }),
    [chartTheme, tooltipTheme]
  );

  const donutChart = useMemo(
    () => ({
      options: {
        chart: { type: "donut" as const },
        labels: ["Premium Roast", "Echo Wireless", "Leather Tote", "Other"],
        colors: [chartTheme.primary, chartTheme.secondary, chartTheme.tertiary, chartTheme.outline],
        legend: { show: false, position: 'bottom', },
        dataLabels: { enabled: false },
        plotOptions: {
          // pie: { donut: { size: "72%", labels: { show: true } } },
          pie: {
          // Round the corners of every slice (px)
            borderRadius: 1,
            // Leave a gap between adjacent slices (px)
            spacing: 1,
            donut: {
              size: '68%',
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Total Orders',
                  color: chartTheme.text,
                },
              },
            },
          },
        },
        stroke: { width: 1, colors: [chartTheme.surface] },
        tooltip: { theme: tooltipTheme, show: true },
      },
      series: [45, 22, 18, 15],
    }),
    [chartTheme, tooltipTheme]
  );

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
          <div className="flex-1 px-6 min-h-0">
            <ApexChart
              type="area"
              options={lineChart.options}
              series={lineChart.series}
              height="100%"
            />
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
          <div className="flex-1 px-6 min-h-0">
            <ApexChart
              type="bar"
              options={barChart.options}
              series={barChart.series}
              height="100%"
            />
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
              <ApexChart
                type="donut"
                options={donutChart.options}
                series={donutChart.series}
                // height={192}
              />
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-on-surface font-heading">
                  72%
                </span>
                <span className="text-xs text-on-surface-variant">Top Tier</span>
              </div> */}
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
