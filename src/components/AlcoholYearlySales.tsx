"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchAlcoholYearlySalesPlot } from "../services/AlcCanBokehService";

const AlcoholYearlySalesPlot: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchAlcoholYearlySalesPlot);

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

export default AlcoholYearlySalesPlot;
