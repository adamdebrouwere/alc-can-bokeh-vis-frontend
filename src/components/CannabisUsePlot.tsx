"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchCannabisUsePlot } from "../services/AlcCanBokehService";

const CannabisUsePlot: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchCannabisUsePlot);

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

export default CannabisUsePlot;
