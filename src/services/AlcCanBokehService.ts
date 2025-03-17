import axiosClient from "../app/api/axios";
import { AlcCanPlotsResponse } from "../types/AlcCanPlots";

export const fetchAlcoholUsePlot = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/alcohol-use-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetching alcohol use view:", error)
        throw error;
    }
}

export const fetchCannabisUsePlot = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/cannabis-use-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetching cannabis use view:", error)
        throw error;
    }
}

export const fetchAlcoholProductMarketSharePies = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/alcohol-product-market-share-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetching Alcohol Product Market Share view:", error)
        throw error;
    }
}

export const fetchCannabisProductMarketSharePies = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/cannabis-product-market-share-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetching Cannabis Product Market Share view:", error)
        throw error;
    }
}

export const fetchAlcoholYearlySalesPlot = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/alcohol-yearly-sales-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetching Alcohol Yearly Sales view:", error)
        throw error;
    }
}

export const fetchCannabisYearlySalesPlot = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/cannabis-yearly-sales-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetching Cannabis Yearly Sales view:", error)
        throw error;
    }
}

export const fetchCombinedSalesGrowthLinePlot = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/combined-sales-growth-line-plot-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetchingCombined Sales Growth Line Plot view:", error)
        throw error;
    }
}

export const fetchCombinedSalesGrowthBarChart = async (): Promise<AlcCanPlotsResponse> => {
    try {
        const response = await axiosClient.get<AlcCanPlotsResponse>("/combined-sales-growth-bar-chart-view/")
        return response.data;
    }catch (error) {
        console.error("Error fetchingCombined Sales Growth Bar Chart view:", error)
        throw error;
    }
}


