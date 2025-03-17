"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchCombinedSalesGrowthBarChart } from "../services/AlcCanBokehService";

const CombinedSalesGrowthBarChartPlot: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchCombinedSalesGrowthBarChart);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!plot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: plot.div }} />
    </div>
  );
};

export default CombinedSalesGrowthBarChartPlot;
