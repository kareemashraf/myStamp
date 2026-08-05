"use client";

import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

interface ApexChartProps {
  type: "area" | "bar" | "donut";
  series: ApexCharts.ApexOptions["series"];
  options: ApexCharts.ApexOptions;
  height?: number | string;
}

export default function ApexChart({
  type,
  series,
  options,
  height = 300,
}: ApexChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ApexCharts | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = new ApexCharts(ref.current, {
      ...options,
      series,
      chart: { ...options.chart, type, height },
    });
    chartRef.current = chart;
    chart.render();
    return () => {
      chart.destroy();
      chartRef.current = null;
    };
  }, [options, series, type, height]);

  return <div ref={ref} style={{ width: "100%", height }} />;
}
