"use client"
import { useEffect, useState } from "react";
import { AlcCanPlotsResponse } from "../types/AlcCanPlots";


const useBokehPlot = (fetchPlotData: () => Promise<AlcCanPlotsResponse>) => {
  const [plot, setPlot] = useState<AlcCanPlotsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlotData = async () => {
      try {
        const data = await fetchPlotData();
        setPlot(data);
      } catch (err) {
        console.error("Error fetching plot data:", err);
        setError("Failed to fetch the plot data.");
      }
    };

    getPlotData();
  }, [fetchPlotData]);

  useEffect(() => {
    if (plot) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = plot.script;
      script.onload = () => {
        console.log("Bokeh plot script loaded successfully.");
      };
      document.body.appendChild(script);
    }
  }, [plot]);

  return { plot, error };
};

export default useBokehPlot;
