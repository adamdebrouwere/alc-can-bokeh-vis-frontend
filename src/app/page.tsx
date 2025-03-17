import React from "react";
import "./styles/page.css";
import AlcoholYearlySalesPlot from "@/components/AlcoholYearlySales";
import CannabisYearlySalesPlot from "@/components/CannabisYearlySales";
import CombinedSalesGrowthLinePlot from "@/components/CombinedSalesGrowthLinePlot";
import CombinedSalesGrowthBarChart from "@/components/CombinedSalesGrowthBarChart";
import AlcoholProductMarketSharePies from "@/components/AlcoholProductMarketSharePies";
import CannabisProductMarketSharePies from "@/components/CannabisProductMarketSharePies";
import AlcoholUsePlot from "@/components/AlcoholUsePlot";
import CannabisUsePlot from "@/components/CannabisUsePlot";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 py-4 px-[10vw] md-4">
      <div className="flex flex-col gap-4">
        <h1>
          Analysis of Alcohol and Cannabis in Canada Since Recreational Cannabis
          Legalization
        </h1>
        <h2>By Adam DeBrouwere</h2>
        <p>
          This project provides insight into alcohol and cannabis markets in
          Canada since recreational cannabis legalization in October, 2018. All
          data is provided by Stats Canada. This is not an endorsement for
          either alcohol, nor cannabis.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-2">
        <div className="w-[80vw] h-[60vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <AlcoholYearlySalesPlot />
          <sup className="m2">
            Source:{" "}
            <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601">
              {" "}
              [1]
            </a>
          </sup>
        </div>
        <p>
          Alcohol sales rose from $24.45 billion in 2019 to $26.92 billion in
          2022, then proceeded to drop to $25.61 billion in 2024.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 p-2">
        <div className="w-[80vw] h-[60vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <CannabisYearlySalesPlot />
          <sup>
            Source:{" "}
            <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601">
              {" "}
              [1]
            </a>
          </sup>
        </div>
        <p>
          At the same time, cannabis sales, while dwarfed by alcohols total
          sales, sees steady increases in sales since 2019, tapering off in
          2023.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-2">
        <div className="w-[80vw] h-[60vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <CombinedSalesGrowthLinePlot />
          <sup>
            Source:{" "}
            <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601">
              [1]
            </a>
          </sup>
        </div>
        <p>
          Cannabis saw a ~120% growth in its second year of legalization. Growth
          has remained positive, but delined by over half in 2021 then again in
          2022 tapering off toward 2024. In 2024, cannabis saw little growth
          from 2023. Alcohol growth has been shrinking since 2019 and saw an
          inagural recession in 2023 which continued in 2024.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-2">
        <div className="w-[80vw] h-[60vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <CombinedSalesGrowthBarChart />
          <sup>
            Source:{" "}
            <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601">
              [1]
            </a>
          </sup>
        </div>
        <p>
          Alcohol growth has been in the shadows of cannabis growth for the past
          5 years, but while cannabis growth remains positive, it has been
          equalizing with alcohol growth.
        </p>
      </div>

      <h2>Market Share</h2>
      <div className="flex flex-col items-center gap-4 p-2">
        <h3>Alcohol Product Market Share</h3>
        <div className="w-[80vw] h-[75vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <AlcoholProductMarketSharePies />
          <sup>
            Source:{" "}
            <a href="https://open.canada.ca/data/en/dataset/a27586c2-b9a0-4e37-9374-714099483a4b">
              [2]
            </a>
          </sup>
        </div>
        <p>
          Alcoholic products market shares have been relativeley stagnant for
          the past 5 years. One area of consistant growth is in the ciders and
          coolers market, where in 2020 it held a 5.3% Market share and steadily
          grew to an 8.7% market share in 2024.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 p-2">
        <h3>Cannabis Product Market Share</h3>
        <div className="w-[80vw] h-[75vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <CannabisProductMarketSharePies />
          <sup>
            Source:{" "}
            <a href="https://open.canada.ca/data/en/dataset/1f8d838e-f738-4549-8019-edfc0d931cd7">
              [3]
            </a>
          </sup>
        </div>
        <p>
          Since legalization of cannabis edibles and extracts differed from
          provice to province, Dried Cannabis held the vast majority of the
          market share in 2020 (73.4%). It still holds 52.8% control, but as
          regulations ease, the edibles and extracts markets have grown from
          26.5% in 2020 to 47% in 2024. Edibles held an edge in market control
          over extracts from legalization until 2023 when extracts gained a lead
          with 24.4% of the market compared to edibles at 22.1%, but edibles
          have regained the edge in 2024 (24.5%).
        </p>
      </div>

      <h2>Alcohol and Cannabis Use</h2>

      <div className="flex flex-col items-center gap-4 p-2">
        <div className="w-[80vw] h-[60vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <AlcoholUsePlot />
          <sup>
            Source(s):{" "}
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2013-supplementary-tables.html">
              [4]
            </a>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2015-supplementary-tables.html">
              [5]
            </a>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2017-summary/2017-detailed-tables.html">
              [6]
            </a>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2019-summary/detailed-tables.html">
              [7]
            </a>
            <a href="https://health-infobase.canada.ca/substance-use/csus/">
              [8]
            </a>
          </sup>
        </div>
        <p>
          Reported alcohol consumption in the past 12 months was relatively
          steady amongst people 20+ years old until 2019. For people aged 15-19,
          there has been a steady decline in reported alcohol consumption since
          2013. The period of 2019 to 2023 saw a sharp decline in reported
          alcohol consumption in the past 12 months amongst all demograpthics.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-2">
        <div className="w-[80vw] h-[60vh] p-1 border-2 rounded-md border-gray-300 bg-gray-200 shadow-md">
          <CannabisUsePlot />
          <sup>
            Source(s):{" "}
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2013-supplementary-tables.html">
              [4]
            </a>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2015-supplementary-tables.html">
              [5]
            </a>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2017-summary/2017-detailed-tables.html">
              [6]
            </a>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2019-summary/detailed-tables.html">
              [7]
            </a>
            <a href="https://health-infobase.canada.ca/substance-use/csus/">
              [8]
            </a>
          </sup>
        </div>
        <p>
          Whereas reported cannabis consumption in the past 12 months has seen a
          steady increase in people 20+ since 2013. In 2019, reported cannabis
          consumption in the past 12 months increased for every demographic.
        </p>
      </div>

      <div className="flex flex-col p-2">
        <h2>Conclusion</h2>
        <p>
          Since recreational cannabis legalization, less people report alcohol
          consumption in the past 12 months, while more people report cannabis
          consumption in the past 12 months. Alcohol saw its first ever year of
          negative growth in 2023, and again 2024, while cannabis edibles and
          extracts gained market share in a growing cannabis market. This
          suggests that cannabis edibles and extracts are potentially having an
          impact on alcohol sales in Canada.
        </p>
      </div>
      <div className="flex flex-col">
        <h4>Sources</h4>
        <ol>
          <li>
            <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601">
              Monthly retail trade sales by province and territory (x 1,000),
              Table: 20-10-0056-01
            </a>
          </li>
          <li>
            <a href="https://open.canada.ca/data/en/dataset/a27586c2-b9a0-4e37-9374-714099483a4b">
              Value of sales of alcoholic beverages of liquor authorities and
              other retail outlets, by beverage type (x 1,000), Table:
              10-10-0011-01,
            </a>
          </li>
          <li>
            <a href="https://open.canada.ca/data/en/dataset/1f8d838e-f738-4549-8019-edfc0d931cd7">
              Cannabis Market Data
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2013-supplementary-tables.html">
              Canadian Alcohol and Drugs Survey 2013, Table(s): 8, 12
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2015-supplementary-tables.html">
              Canadian Alcohol and Drugs Survey 2015, Table(s): 11, 15
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2017-summary/2017-detailed-tables.html">
              Canadian Alcohol and Drugs Survey 2017, Table(s): 13, 17
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/health-canada/services/canadian-alcohol-drugs-survey/2019-summary/detailed-tables.html">
              Canadian Alcohol and Drugs Survey 2019, Table(s) 1, 6
            </a>
          </li>
          <li>
            <a href="https://health-infobase.canada.ca/substance-use/csus/">
              Canadian Alcohol and Drugs Survey 2023
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MainPage;
