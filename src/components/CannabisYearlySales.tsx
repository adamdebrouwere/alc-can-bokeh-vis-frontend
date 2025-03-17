"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchCannabisYearlySalesPlot } from "../services/AlcCanBokehService";

const CannabisYearlySalesPlot: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchCannabisYearlySalesPlot);

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

export default CannabisYearlySalesPlot;
