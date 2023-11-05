'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [transactionIsOpen, setTransactionIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div className="w-1/5 min-h-screen bg-[#283342] py-7 flex flex-col gap-8 fixed">
      <div className=" px-6">
        <Image src="/logo-white.svg" alt="Logo" width={170} height={40} />
      </div>
      <div className="flex gap-2 items-center  px-6 justify-between">
        <div>
          <Image src="/prof.jpg" alt="Profile" width={42} height={42} className="aspect-square rounded-full" />
        </div>
        <div className="text-white whitespace-nowrap">
          <h1 className="text-base">PT. Apotek Jogja</h1>
          <p className="text-xs font-thin">Jl. Affandi No 31, Sleman</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </div>
      </div>
      <div>
        <ul className="text-white">
          <li className={`cursor-pointer px-6 py-4 flex gap-4 items-center ${pathname === '/dashboard' ? 'bg-primary' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path
                d="M12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0ZM1.55556 12.4444V1.55556H6.22222V12.4444H1.55556ZM12.4444 12.4444H7.77778V7H12.4444V12.4444ZM12.4444 5.44444H7.77778V1.55556H12.4444V5.44444Z"
                fill="white"
              />
            </svg>
            <Link href="/dashboard" className="w-full h-full">
              Dashboard
            </Link>
          </li>
          <li className={`cursor-pointer px-6 py-4 ${pathname === '/dashboard/transaction' ? 'bg-primary' : ''}`}>
            <div className=" flex gap-4 items-center">
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M9.8231 10.7621V2.81836" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.2017 8.37305L9.82304 10.7628L7.44434 8.37305" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.03159 1.23535V9.17906" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.65283 3.62507L4.03154 1.23535L6.41024 3.62507" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <Link href="/dashboard/transaction" className="w-full h-full">
                Transaction
              </Link>
              <div className="w-max h-max" onClick={() => setTransactionIsOpen(!transactionIsOpen)}>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-2 h-2 transition-transform duration-75 ${transactionIsOpen ? 'rotate-[360deg]' : '-rotate-180'}`}>
                  <path
                    d="M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li className={` px-14 bg-black  ${transactionIsOpen ? 'block ' : 'hidden'}`}>
            <ul>
              <li className="cursor-pointer py-4">Time Series</li>
              <li className="cursor-pointer py-4">Data</li>
            </ul>
          </li>

          <li className={`cursor-pointer px-6 py-4 flex gap-4 items-center ${pathname === '/dashboard/stock' ? 'bg-primary' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path
                d="M12.6 0H1.4C0.7 0 0 0.63 0 1.4V3.507C0 4.011 0.301 4.445 0.7 4.69V12.6C0.7 13.37 1.47 14 2.1 14H11.9C12.53 14 13.3 13.37 13.3 12.6V4.69C13.699 4.445 14 4.011 14 3.507V1.4C14 0.63 13.3 0 12.6 0ZM11.9 12.6H2.1V4.9H11.9V12.6ZM12.6 3.5H1.4V1.4H12.6V3.5Z"
                fill="white"
              />
              <path d="M9.2 8H5V9.4H9.2V8Z" fill="white" />
              <path d="M6.3999 6.5998L6.3999 10.7998L7.7999 10.7998L7.7999 6.5998L6.3999 6.5998Z" fill="white" />
            </svg>

            <Link href="/dashboard/stock" className="w-full h-full">
              Stock
            </Link>
          </li>
          <li className={`cursor-pointer px-6 py-4 flex gap-4 items-center ${pathname === '/dashboard/machine-learning' ? 'bg-primary' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path
                d="M0 10.8889V12.4444H4.66667V10.8889H0ZM0 1.55556V3.11111H7.77778V1.55556H0ZM7.77778 14V12.4444H14V10.8889H7.77778V9.33333H6.22222V14H7.77778ZM3.11111 4.66667V6.22222H0V7.77778H3.11111V9.33333H4.66667V4.66667H3.11111ZM14 7.77778V6.22222H6.22222V7.77778H14ZM9.33333 4.66667H10.8889V3.11111H14V1.55556H10.8889V0H9.33333V4.66667Z"
                fill="white"
              />
            </svg>

            <Link href="/dashboard/machine-learning" className="w-full h-full">
              Machine Learning
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-4 right-0  bg-[#455162] px-2 py-5 -mr-7">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 -rotate-90`}>
          <path
            d="M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
