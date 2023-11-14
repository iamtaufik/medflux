'use client';
import SearchIcon from '@/components/SearchIcon';
import { Select, SelectItem, TextInput } from '@tremor/react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  setTimeout(() => {
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
  }, 500);
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">
            <Link className="text-gray-300" href={'/dashboard/stock'}>
              Stock
            </Link>{' '}
            {'>'} <span className="text-black">Data Stock</span>
          </h1>
          <p className="text-base font-normal">List of medicines available for sales</p>
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
            Add Stock
          </button>
        </div>
      </div>
      <div className="px-10 my-10 flex gap-10">
        <div className="w-full max-w-xs ">
          <TextInput className="px-4" icon={SearchIcon} placeholder="Search Transaction..." />
        </div>
        <div className="w-full max-w-[250px]">
          <Select placeholder="Select sort">
            <SelectItem value="1">Ascending</SelectItem>
            <SelectItem value="2">Descending</SelectItem>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Page;
