"use client";
import React from "react";
// import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";
import dynamic from "next/dynamic";
import BasicTableOne from "../tables/BasicTableOne";
import Pagination from "../tables/Pagination";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function TableCard() {
 
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Alert Trend Analysis
          </h3>
          {/* <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            
          </p> */}
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
               {/* Header */}


        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
        
             {/* body  */}
            <BasicTableOne  />
            <div className="w-full items-center flex justify-center my-2">
             <Pagination currentPage={0} totalPages={100} onPageChange={()=>undefined}  />
            </div>

        </div>
      </div>
    </div>
  );
}



