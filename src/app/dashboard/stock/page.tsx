'use client';
import id from 'date-fns/locale/id';
import { Card, DonutChart, AreaChart, BarChart, DateRangePicker, SearchSelect, SearchSelectItem } from '@tremor/react';
import React from 'react';
import { ShowModal } from '@/components/Modal';
import Label from '@/components/Label';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const handleAddStock = () => {
    ShowModal();
  };
  return (
    <>
      <div className="flex justify-between md:items-center flex-col px-4 md:px-10 md:flex-row">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Stock</h1>
          <p className="text-base font-normal">Stock of medicines availabel for sales</p>
        </div>
        <div className=" gap-4 hidden md:flex">
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl transition-colors duration-300 hover:bg-primary hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Download Report</span>
          </button>
          <button onClick={handleAddStock} className="flex gap-2 text-white px-4 py-2 border bg-primary border-primary rounded-3xl items-center transition-colors duration-300 hover:bg-[#13668D] hover:text-white">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z"
                fill="white"
              />
            </svg>
            <span>Add Stock</span>
          </button>
        </div>
      </div>
      <div className="px-4 md:px-10 flex flex-col gap-8 my-10 md:flex-row">
        <Label
          title="Medicine Available"
          value="312"
          icon={
            <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path
                  d="M24.6665 6.00033H19.3332V3.33366C19.3332 1.86699 18.1332 0.666992 16.6665 0.666992H11.3332C9.8665 0.666992 8.6665 1.86699 8.6665 3.33366V6.00033H3.33317C1.8665 6.00033 0.666504 7.20033 0.666504 8.66699V24.667C0.666504 26.1337 1.8665 27.3337 3.33317 27.3337H24.6665C26.1332 27.3337 27.3332 26.1337 27.3332 24.667V8.66699C27.3332 7.20033 26.1332 6.00033 24.6665 6.00033ZM11.3332 3.33366H16.6665V6.00033H11.3332V3.33366ZM24.6665 24.667H3.33317V8.66699H24.6665V24.667Z"
                  fill="#03A9F5"
                />
                <path d="M15.3332 11.334H12.6665V15.334H8.6665V18.0007H12.6665V22.0007H15.3332V18.0007H19.3332V15.334H15.3332V11.334Z" fill="#03A9F5" />
              </svg>
            </div>
          }
          onClick={() => router.push('/dashboard/medicine/avaliable')}
          linkName="Check"
        />

        <div className=" flex gap-8 justify-between p-4 md:px-8 md:py-6 border w-full md:w-1/2 rounded-3xl max-h-[170px] transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10">
          <div className="flex items-center gap-4 md:gap-10 w-4/12">
            <div className="bg-[#F5CE00] bg-opacity-10 p-4 rounded-full flex items-center">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.1044 3.38477H9.43431C5.71596 3.38477 3.38477 6.01752 3.38477 9.74325V19.7967C3.38477 23.5224 5.70489 26.1552 9.43431 26.1552H20.1032C23.8338 26.1552 26.1552 23.5224 26.1552 19.7967V9.74325C26.1552 6.01752 23.8338 3.38477 20.1044 3.38477Z"
                  stroke="#F5CE00"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M14.7634 19.6929V14.7695" stroke="#F5CE00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.7572 10.0978H14.7695" stroke="#F5CE00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h2 className="font-medium text-lg">Almost Expired</h2>
          </div>

          <div className="relative w-8/12 scroll overflow-y-scroll py-2 px-4">
            <ul className="flex flex-col gap-6 font-normal text-base ">
              <li className="flex gap-4 items-center">
                <span>1</span>
                <span>Aminofisin Hepar</span>
                <span className="text-red-500 text-sm">(01 Jan 2024)</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>2</span>
                <span>Tramadal 50 mg</span>
                <span className="text-red-500 text-sm">(01 Jun 2024)</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>3</span>
                <span>Desoxmentason Cream</span>
                <span className="text-red-500 text-sm">(01 Aug 2024)</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>4</span>
                <span>Asifit Kaplet-Blister</span>
                <span className="text-red-500 text-sm">(01 Dec 2024)</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>5</span>
                <span>Asifit Kaplet-Blister</span>
                <span className="text-red-500 text-sm">(01 Nov 2024)</span>
              </li>
              <hr />
            </ul>
          </div>
        </div>

        <Label
          title="Medicine Expired"
          value="12"
          icon={
            <div className="bg-[#F0483E] bg-opacity-10 p-4 rounded-full flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path
                  d="M16.0002 7.98699L26.0402 25.3337H5.96016L16.0002 7.98699ZM16.0002 2.66699L1.3335 28.0003H30.6668L16.0002 2.66699ZM17.3335 21.3337H14.6668V24.0003H17.3335V21.3337ZM17.3335 13.3337H14.6668V18.667H17.3335V13.3337Z"
                  fill="#F0483E"
                />
              </svg>
            </div>
          }
          onClick={() => router.push('/dashboard/medicine/expired')}
          linkName="Check"
        />
      </div>
      <div className="px-4 md:px-10 mb-10 flex gap-8 justify-between flex-col md:flex-row">
        <Card className="md:w-1/3">
          <h2 className="text-xl md:text-2xl font-bold">Distribution of Disease</h2>
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
        <Card className="md:w-2/3">
          <h2 className="text-xl md:text-2xl font-bold">Stock - History</h2>
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
