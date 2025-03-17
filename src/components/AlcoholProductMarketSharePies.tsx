"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchAlcoholProductMarketSharePies } from "../services/AlcCanBokehService";

const AlcoholProductMarketSharePies: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchAlcoholProductMarketSharePies);

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

export default AlcoholProductMarketSharePies;

