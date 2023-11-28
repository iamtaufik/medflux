'use client';
import SearchIcon from '@/components/SearchIcon';
import { Select, SelectItem, TextInput } from '@tremor/react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import React from 'react';
import Table from '@/components/Table';
import { ShowModal } from '@/components/Modal';

const stocks = [
  {
    code: 'OB12121219',
    name: 'Vitamin B Complex',
    disease: 'Suplemen Vitamin K',
    price: 100000,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: 'OB12121219',
    name: 'Augmentin 6250 Duo Tablet',
    disease: 'Suplemen Vitamin K',
    price: 208000,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: 'OB12121219',
    name: 'Augmentin 6250 Duo Tablet',
    disease: 'Suplemen Vitamin K',
    price: 208000,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: 'OB17298127',
    name: 'Augmentin 6250 Duo Tablet',
    disease: 'Suplemen Vitamin K',
    price: 200000,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 200,
    stockSystem: 200,
    stockReal: 200,
  },
  {
    code: 'OB12121219',
    name: 'Augmentin 6250 Duo Tablet',
    disease: 'Suplemen Vitamin K',
    price: 208000,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: 'OB17298127',
    name: 'Augmentin 6250 Duo Tablet',
    disease: 'Suplemen Vitamin K',
    price: 200000,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 200,
    stockSystem: 200,
    stockReal: 200,
  },
  {
    code: 'OB12121219',
    name: 'Augmentin 6250 Duo Tablet',
    disease: 'Suplemen Vitamin K',
    price: 208000,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: 'OB17298127',
    name: 'Augmentin 6250 Duo Tablet',
    disease: 'Suplemen Vitamin K',
    price: 202120,
    unit: 'ST30',
    enter: '01-Jul-2023',
    check: '09-Aug-2023',
    expired: '01-Jan-2024',
    remain: 200,
    stockSystem: 200,
    stockReal: 200,
  },
];

const Page = () => {
  const handleAddStock = () => {
    ShowModal();
    toast.success('Medicine Added to iventory', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <>
      <div className="px-4 flex justify-between flex-col gap-4 md:items-center md:px-10 md:flex-row">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            <Link className="text-gray-300" href={'/dashboard/stock'}>
              Stock
            </Link>{' '}
            {'>'} <span className="text-black">Data Stock</span>
          </h1>
          <p className="text-base font-normal">List of medicines available for sales</p>
        </div>
        <div className="flex gap-6 justify-between md:justify-normal">
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl transition-colors duration-300 hover:bg-primary hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Download Report</span>
          </button>
          <button onClick={handleAddStock} className="flex gap-2 text-white px-4 py-2 border bg-primary border-primary rounded-3xl items-center transition-colors duration-300 hover:bg-[#13668D] hover:text-white">
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ">
              <path
                d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z"
                fill="white"
              />
            </svg>
            <span>Add Stock</span>
          </button>
        </div>
      </div>
      <div className="px-4 md:px-10 my-10 flex gap-4 md:gap-10 flex-col md:flex-row">
        <div className="w-full md:max-w-xs ">
          <TextInput className="px-4" icon={SearchIcon} placeholder="Search Transaction..." />
        </div>
        <div className="w-full md:max-w-[250px]">
          <Select placeholder="Select sort">
            <SelectItem value="1">Ascending</SelectItem>
            <SelectItem value="2">Descending</SelectItem>
          </Select>
        </div>
      </div>
      <div className="px-4 mb-10 md:px-10">
        <Table
          paggination={{
            total: 10,
            page: 1,
            limit: 8,
            setLimit: (limit: number) => {},
            setOffset: (offset: number) => {},
          }}
        >
          <thead className="border-b">
            <tr className="whitespace-nowrap">
              <th scope="col" className="px-6 py-3 ">
                No
              </th>
              <th scope="col" className="px-6 py-3 ">
                Medicine Code
              </th>
              <th scope="col" className="px-6 py-3 ">
                Medicine Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Disease
              </th>
              <th scope="col" className="px-6 py-3 ">
                Purchase Price
              </th>
              <th scope="col" className="px-6 py-3 ">
                Unit
              </th>
              <th scope="col" className="px-6 py-3 ">
                Enter
              </th>
              <th scope="col" className="px-6 py-3 ">
                Check
              </th>
              <th scope="col" className="px-6 py-3 ">
                Expired
              </th>
              <th scope="col" className="px-6 py-3 ">
                Remain
              </th>
              <th scope="col" className="px-6 py-3 ">
                Stock on System
              </th>
              <th scope="col" className="px-6 py-3 ">
                Real Stock
              </th>
              <th scope="col" className="px-6 py-3 ">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index} className="text-center border h-10 font-normal  whitespace-nowrap ">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{stock.code}</td>
                <td className="px-6 py-3">{stock.name}</td>
                <td className="px-6 py-3">{stock.disease}</td>
                <td className="px-6 py-3">Rp. {stock.price.toLocaleString('id-ID')}</td>
                <td className="px-6 py-3">{stock.unit}</td>
                <td className="px-6 py-3">{stock.enter}</td>
                <td className="px-6 py-3">{stock.check}</td>
                <td className="px-6 py-3">{stock.expired}</td>
                <td className="px-6 py-3">{stock.remain}</td>
                <td className="px-6 py-3">{stock.stockSystem}</td>
                <td className="px-6 py-3">{stock.stockReal}</td>
                <td className="px-6 py-3">
                  <Link href={`/dashboard/stock/data/detail/${stock.code}`} className="flex gap-2 items-center">
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
