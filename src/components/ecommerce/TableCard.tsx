"use client";
import React from "react";
import BasicTableOne from "../tables/BasicTableOne";
import Pagination from "../tables/Pagination";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";


export default function TableCard() {
 
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full xl:flex justify-between items-center space-y-3 xl:space-y-0">
          <h3 className=" text-lg mb-1 xl:mb-0 font-semibold xl:text-nowrap text-gray-800 dark:text-white/90">
          Alert Trend Analysis
          </h3>
         
        <div className="flex items-start w-full gap-3 sm:justify-end">
        <div className="mt-1 text-gray-500 flex items-center gap-2 text-theme-sm dark:text-gray-400">
              <Input  placeholder="Search Users"  />
              <Button size="sm">Search</Button>
          </div>
        </div>
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



