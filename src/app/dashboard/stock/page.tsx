'use client';
import id from 'date-fns/locale/id';
import { Card, DonutChart, AreaChart, BarChart, DateRangePicker, SearchSelect, SearchSelectItem } from '@tremor/react';
import React from 'react';

const disease = [
  {
    name: 'Luka Bakar',
    value: Math.floor(Math.random() * 100),
  },
  {
    name: 'Sakit Maag',
    value: Math.floor(Math.random() * 100),
  },
  {
    name: 'Sakit Kepala',
    value: Math.floor(Math.random() * 100),
  },
  {
    name: 'Sakit Gigi',
    value: Math.floor(Math.random() * 100),
  },
  {
    name: 'Sakit Mata',
    value: Math.floor(Math.random() * 100),
  },
  {
    name: 'Sakit Telinga',
    value: Math.floor(Math.random() * 100),
  },
  {
    name: 'Sakit Perut',
    value: Math.floor(Math.random() * 100),
  },
  {
    name: 'Lainnya',
    value: Math.floor(Math.random() * 100),
  },
];

const stocks = [
  {
    date: '1 Dec',
    value: Math.floor(Math.random() * 500),
  },
  {
    date: '2 Dec',
    value: Math.floor(Math.random() * 500),
  },
  {
    date: '3 Dec',
    value: Math.floor(Math.random() * 500),
  },
  {
    date: '4 Dec',
    value: Math.floor(Math.random() * 500),
  },
  {
    date: '5 Dec',
    value: Math.floor(Math.random() * 500),
  },
  {
    date: '6 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '7 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '8 Dec',
    value: Math.floor(Math.random() * 100),
  },
];

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">Stock</h1>
          <p className="text-base font-normal">Stock of medicines availabel for sales</p>
        </div>
        <div className="flex gap-4">
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Report
          </button>
          <button className="flex bg-primary gap-2 text-white px-4 py-2 items-center border border-primary rounded-3xl">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z"
                fill="white"
              />
            </svg>
            Add Stock
          </button>
        </div>
      </div>
      <div className="px-10 flex gap-8 justify-between my-10 ">
        <Card className="w-1/3">
          <h2 className="text-2xl font-bold">Distribution of Disease</h2>
          <DonutChart
            className="mt-6 h-[250px]"
            data={disease}
            category="value"
            index="name"
            valueFormatter={(val) => `${val.toString()}%`}
            colors={['blue', 'cyan', 'fuchsia', 'orange', 'green', 'red', 'yellow', 'purple']}
            showLabel={true}
            variant="pie"
            showAnimation={true}
          />
          <div className="flex justify-center items-center gap-4 mt-4 text-sm flex-wrap">
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#3b82f6] w-4 h-4 inline-block "></span> Luka Bakar
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#06b6d4] w-4 h-4 inline-block "></span> Sakit Maag
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#d946ef] w-4 h-4 inline-block "></span> Sakit Kepala
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#f97316] w-4 h-4 inline-block "></span> Sakit Gigi
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#22c55e] w-4 h-4 inline-block "></span> Sakit Mata
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#ef4444] w-4 h-4 inline-block "></span> Sakit Telinga
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#eab308] w-4 h-4 inline-block "></span> Sakit Perut
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#a855f7] w-4 h-4 inline-block "></span> Lainnya
            </p>
          </div>
        </Card>
        <Card className="w-2/3">
          <h2 className="text-2xl font-bold">Stock - History</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div className="w-full max-w-xs">
              <DateRangePicker className="w-full " locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" />
            </div>
          </div>
          <AreaChart className="h-72 mt-4" data={stocks} index="date" categories={['value']} colors={['cyan']} valueFormatter={(value: number) => value.toString()} showAnimation={true} curveType="natural" />
          <div className="bg-[#E95D32] bg-opacity-10 text-[#E95D32] gap-2 items-center mt-4  flex justify-center py-2 rounded-xl">
            <div className="bg-[#E95D32] text-white p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <p className="w-max">
              <span className="font-bold">Diarrhea</span> casses increase in your area! Check{' '}
              <a href="" className="underline">
                <span className="font-bold">Imodium</span> stock avability now
              </a>
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Page;
