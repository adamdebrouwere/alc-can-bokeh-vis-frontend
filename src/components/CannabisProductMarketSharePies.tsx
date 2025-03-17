"use client"
import React from "react";
import useBokehPlot from "@/hooks/useBokehPlot";
import { fetchCannabisProductMarketSharePies } from "../services/AlcCanBokehService";

const CannabisProductMarketSharePies: React.FC = () => {
  const { plot, error } = useBokehPlot(fetchCannabisProductMarketSharePies);

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

export default CannabisProductMarketSharePies;
