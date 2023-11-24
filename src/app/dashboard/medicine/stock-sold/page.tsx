import Table from '@/components/Table';
import Link from 'next/link';
import React from 'react';

const stockSold = [
  {
    name: 'Fituno Kaplet-Blister',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Paracetamol Tablet',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Augmentin 625 Duo Tablet',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Asifit Kaplet-Blister',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Fituno Kaplet-Blister',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Paracetamol Tablet',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Augmentin 625 Duo Tablet',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Asifit Kaplet-Blister',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Fituno Kaplet-Blister',
    code: 'OB91182120',
    unit: 'ST30',
    soldAmount: 150,
    totalSales: 'Rp. 1.500.000',
    realStock: 150,
  },
  {
    name: 'Paracetamol Tablet',
    code: 'OB91182120',
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
            <span className="text-black">Medicine Stock Sold</span>
          </h1>
          <p className="text-base font-normal">List of medicines stock sold</p>
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
      <div className="px-10 my-10 flex gap-10">
        <div className=" flex gap-8 justify-between px-8 py-6 border  w-1/2 rounded-3xl max-h-[170px] transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10">
          <div className="flex items-center gap-4 w-2/5">
            <div className="bg-[#F49200] bg-opacity-10 p-4 rounded-full flex items-center">
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.129 5.6409L18.3783 10.1344C18.5987 10.5755 19.0242 10.8814 19.5176 10.9522L24.5493 11.6764C25.7924 11.8559 26.2871 13.3626 25.3874 14.2259L21.7489 17.7221C21.3914 18.0659 21.2286 18.5601 21.3132 19.0455L22.1719 23.9813C22.3833 25.2023 21.0838 26.1339 19.9726 25.5562L15.4754 23.2242C15.0345 22.9954 14.5065 22.9954 14.0644 23.2242L9.56716 25.5562C8.45599 26.1339 7.15643 25.2023 7.36918 23.9813L8.22658 19.0455C8.31117 18.5601 8.1484 18.0659 7.79083 17.7221L4.15232 14.2259C3.25262 13.3626 3.74733 11.8559 4.9905 11.6764L10.0221 10.9522C10.5156 10.8814 10.9423 10.5755 11.1628 10.1344L13.4107 5.6409C13.9669 4.52986 15.5728 4.52986 16.129 5.6409Z"
                  stroke="#F49200"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg">Top 5 Best Seller</h2>
          </div>

          <div className="relative w-3/5 scroll overflow-y-scroll py-2 px-4">
            <ul className="flex flex-col gap-6 font-normal text-base whitespace-nowrap">
              <li className="flex gap-4">
                <span>1</span>
                <span>Augmentin 625 Duo Tablet</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>2</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>3</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>4</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>5</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div className=" flex gap-8 justify-between px-8 py-6 border  w-1/2 rounded-3xl max-h-[170px] transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10">
          <div className="flex items-center gap-4 w-2/5">
            <div className="bg-[#F0483E] bg-opacity-10 p-4 rounded-full flex items-center">
              <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8451 26.62C11.8451 26.62 21.6104 23.5869 21.6104 15.2253C21.6104 6.86237 21.9642 6.20953 21.1801 5.40523C20.3973 4.60092 13.1256 2 11.8451 2C10.5646 2 3.2928 4.60092 2.50872 5.40523C1.72592 6.20953 2.07977 6.86237 2.07977 15.2253C2.07977 23.5869 11.8451 26.62 11.8451 26.62Z"
                  stroke="#F0483E"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M16 18L8 10" stroke="#F0483E" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                <path d="M8 18L16 10" stroke="#F0483E" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              </svg>
            </div>
            <h2 className="font-semibold text-lg">5 Product Less Popular</h2>
          </div>

          <div className="relative w-3/5 scroll overflow-y-scroll py-2 px-4">
            <ul className="flex flex-col gap-6 font-normal text-base whitespace-nowrap">
              <li className="flex gap-4">
                <span>1</span>
                <span>Aminofisin Hepar</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>2</span>
                <span>Tramadal 50 mg</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>3</span>
                <span>Desoxmentason Cream</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>4</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>5</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
            </ul>
          </div>
        </div>
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
                Medicine Code
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
                <td className="px-6 py-3">{stock.code}</td>
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
