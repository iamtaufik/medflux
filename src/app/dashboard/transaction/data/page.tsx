'use client';
import { DateRangePicker, Select, SelectItem, TextInput } from '@tremor/react';
import id from 'date-fns/locale/id';
import Link from 'next/link';
import React from 'react';

const SearchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
};

const transactionData = [
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-16:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
  {
    date: '11/10/2023-17:30',
    name: 'Augmentin 6250 Duo Tablet',
    struct: '10001210210',
    totalSales: 'Rp. 1.000.000,00',
  },
];
const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">
            <Link className="text-gray-300" href={'/dashboard/transaction'}>
              Transaction
            </Link>{' '}
            {'>'} <span className="text-black">Data Transaction</span>
          </h1>
          <p className="text-base font-normal">Sales transaction report of the pharmacy</p>
        </div>
        <div className="flex gap-6">
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Report
          </button>
          <button className="flex gap-2 text-white px-4 py-2 border bg-primary border-primary rounded-3xl items-center">
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ">
              <path
                d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z"
                fill="white"
              />
            </svg>
            Transaction
          </button>
        </div>
      </div>
      <div className="px-10 my-10 flex justify-between">
        <div className="flex gap-10">
          <div className="w-full max-w-xs ">
            <TextInput className="px-4" icon={SearchIcon} placeholder="Search Transaction..." />
          </div>
          <div className="w-full max-w-[290px] ">
            <DateRangePicker locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" displayFormat="dd MMM yyyy" />
          </div>
        </div>
        <div className="w-full max-w-[250px]">
          <Select placeholder="Select sort">
            <SelectItem value="1">Ascending</SelectItem>
            <SelectItem value="2">Descending</SelectItem>
          </Select>
        </div>
      </div>
      <div className="px-10 ">
        <div className=" rounded-xl border py-4">
          <table className="table-auto w-full ">
            <thead className="border-b ">
              <tr className="text-center">
                <th>No</th>
                <th>Date Time</th>
                <th>Medicine Name</th>
                <th>Struct Number</th>
                <th>Total Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((data, index) => (
                <tr key={index} className="text-center border h-10 font-normal">
                  <td>{index + 1}</td>
                  <td>{data.date}</td>
                  <td>{data.name}</td>
                  <td>{data.struct}</td>
                  <td>{data.totalSales}</td>
                  <td>
                    <button>View Full Detail {'>>'}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between my-4 px-4">
            <p className="font-semibold">Showing 1 - 8 results of 298</p>
            <div className="flex gap-2">
              <div>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="27" height="27" rx="13.5" transform="matrix(-1 0 0 1 27 0)" fill="white" />
                  <rect x="-0.2" y="0.2" width="26.6" height="26.6" rx="13.3" transform="matrix(-1 0 0 1 26.6 0)" stroke="#1D242E" strokeOpacity="0.3" strokeWidth="0.4" />
                  <path
                    d="M14.7906 16.774L12.013 13.9964L14.7906 11.2188C15.0698 10.9396 15.0698 10.4886 14.7906 10.2094C14.5114 9.9302 14.0604 9.9302 13.7812 10.2094L10.4953 13.4953C10.2161 13.7745 10.2161 14.2255 10.4953 14.5047L13.7812 17.7906C14.0604 18.0698 14.5114 18.0698 14.7906 17.7906C15.0626 17.5114 15.0698 17.0532 14.7906 16.774Z"
                    fill="#1D242E"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
              <p className="font-normal">Page 01</p>
              <div>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.2" y="0.2" width="26.6" height="26.6" rx="13.3" stroke="#1B81B0" strokeWidth="0.4" />
                  <path
                    d="M12.2094 16.774L14.987 13.9964L12.2094 11.2188C11.9302 10.9396 11.9302 10.4886 12.2094 10.2094C12.4886 9.9302 12.9396 9.9302 13.2188 10.2094L16.5047 13.4953C16.7839 13.7745 16.7839 14.2255 16.5047 14.5047L13.2188 17.7906C12.9396 18.0698 12.4886 18.0698 12.2094 17.7906C11.9374 17.5114 11.9302 17.0532 12.2094 16.774Z"
                    fill="#1B81B0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
