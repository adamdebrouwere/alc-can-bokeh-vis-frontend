"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchAlcoholUsePlot } from "../services/AlcCanBokehService";

const AlcoholUsePlot: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchAlcoholUsePlot);

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

export default AlcoholUsePlot;
