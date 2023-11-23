import Label from '@/components/Label';
import Table from '@/components/Table';
import Link from 'next/link';
import React from 'react';

const stockSold = [
  {
    name: 'Fituno Kaplet-Blister',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Paracetamol Tablet',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Augmentin 625 Duo Tablet',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Asifit Kaplet-Blister',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Fituno Kaplet-Blister',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Paracetamol Tablet',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Augmentin 625 Duo Tablet',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Asifit Kaplet-Blister',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Fituno Kaplet-Blister',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Paracetamol Tablet',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
];

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">
            <Link className="text-gray-300" href={'/dashboard'}>
              Dashboard
            </Link>
            {'>'}
            <span className="text-black">Medicine Expired</span>
          </h1>
          <p className="text-base font-normal">List of medicines that expired</p>
        </div>
        <div>
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl transition-colors duration-300 hover:bg-primary hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Download Report</span>
          </button>
        </div>
      </div>
      <div className="px-10 my-10">
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
        />
      </div>
      <div className="px-10 my-10">
        <Table
          paggination={{
            total: 10,
            page: 1,
            limit: 10,
            setLimit: (limit: number) => {},
            setOffset: (offset: number) => {},
          }}
        >
          <thead className="border-b ">
            <tr className="whitespace-nowrap">
              <th scope="col" className="px-6 py-3 ">
                No
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1 justify-center ">
                  <span>Medicine Name</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1 justify-center ">
                  <span>Unit</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1 justify-center ">
                  <span>Sold Amount</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1 justify-center ">
                  <span>Total Sales</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                Real Stock
              </th>
              <th scope="col" className="px-6 py-3 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {stockSold.map((stock, index) => (
              <tr key={index} className="text-center border h-10 font-normal  whitespace-nowrap ">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{stock.name}</td>
                <td className="px-6 py-3">{stock.unit}</td>
                <td className="px-6 py-3">{stock.soldAmount}</td>
                <td className="px-6 py-3">{stock.totalSales}</td>
                <td className="px-6 py-3">{stock.realStock}</td>
                <td className="px-6 py-3">
                  <Link href={`/dashboard/stock/data/detail/${stock.name}`} className="flex gap-2 items-center">
                    View Full Detail
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Page;
