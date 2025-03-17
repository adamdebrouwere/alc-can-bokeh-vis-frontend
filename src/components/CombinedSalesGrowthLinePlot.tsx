"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchCombinedSalesGrowthLinePlot } from "../services/AlcCanBokehService";

const CombinedSalesGrowthLinePlot: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchCombinedSalesGrowthLinePlot);

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

export default CombinedSalesGrowthLinePlot;
