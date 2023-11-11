'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { sidebarToggle } from '@/context/sidebarToggle';

const Sidebar = () => {
  const { isActive, setIsActive } = sidebarToggle();
  const [transactionIsOpen, setTransactionIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div className={`w-1/5 min-h-screen bg-[#283342] py-7 flex  flex-col gap-8 fixed transition-all duration-300 ${isActive ? 'ml-0' : '-ml-[304px]'}`}>
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
          <li className={` ${pathname === '/dashboard' ? 'bg-primary' : ''}`}>
            <Link href="/dashboard" className="w-full h-full cursor-pointer px-6 py-4 flex gap-4 items-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path
                  d="M12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0ZM1.55556 12.4444V1.55556H6.22222V12.4444H1.55556ZM12.4444 12.4444H7.77778V7H12.4444V12.4444ZM12.4444 5.44444H7.77778V1.55556H12.4444V5.44444Z"
                  fill="white"
                />
              </svg>
              Dashboard
            </Link>
          </li>
          <li className={` ${pathname === '/dashboard/transaction' ? 'bg-primary' : ''}`}>
            <div className=" flex gap-4 items-center">
              <Link href="/dashboard/transaction" className="w-full h-ful flex gap-4 items-center cursor-pointer px-6 py-4">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M9.8231 10.7621V2.81836" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.2017 8.37305L9.82304 10.7628L7.44434 8.37305" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.03159 1.23535V9.17906" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.65283 3.62507L4.03154 1.23535L6.41024 3.62507" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
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
          <li className={` ${pathname === '/dashboard/suppliers' ? 'bg-primary' : ''}`}>

            <Link href="/dashboard/suppliers" className="w-full h-full cursor-pointer px-6 py-4 flex gap-4 items-center">
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <path d="M1 4.89286H7V5.75H1V4.89286ZM0 2.75H5V3.60714H0V2.75Z" fill="white" />
              <path
                d="M13.9611 5.57044L12.522 2.38893C12.4851 2.30716 12.4236 2.23746 12.3452 2.1885C12.2669 2.13953 12.175 2.11346 12.0812 2.1135H10.642V1.2045C10.642 1.08396 10.5915 0.968356 10.5015 0.88312C10.4115 0.797885 10.2895 0.75 10.1623 0.75H2.4869V1.659H9.68259V7.36572C9.464 7.48598 9.2727 7.64605 9.11972 7.8367C8.96675 8.02735 8.85512 8.2448 8.79128 8.47653H5.77677C5.66001 8.04809 5.38233 7.6747 4.99579 7.42635C4.60925 7.17801 4.14038 7.07176 3.67707 7.12751C3.21375 7.18327 2.78781 7.3972 2.47907 7.72922C2.17033 8.06124 2 8.48854 2 8.93103C2 9.37352 2.17033 9.80082 2.47907 10.1328C2.78781 10.4649 3.21375 10.6788 3.67707 10.7345C4.14038 10.7903 4.60925 10.684 4.99579 10.4357C5.38233 10.1874 5.66001 9.81397 5.77677 9.38553H8.79128C8.89564 9.7756 9.13429 10.1216 9.46949 10.3687C9.80469 10.6158 10.2173 10.75 10.642 10.75C11.0667 10.75 11.4793 10.6158 11.8145 10.3687C12.1497 10.1216 12.3884 9.7756 12.4927 9.38553H13.5203C13.6475 9.38553 13.7695 9.33764 13.8595 9.25241C13.9495 9.16717 14 9.05157 14 8.93103V5.74952C14 5.68794 13.9868 5.62701 13.9611 5.57044ZM3.92604 9.84003C3.73628 9.84003 3.55079 9.78672 3.39301 9.68684C3.23523 9.58695 3.11226 9.44499 3.03964 9.27889C2.96703 9.11279 2.94803 8.93002 2.98505 8.75369C3.02207 8.57736 3.11344 8.41539 3.24762 8.28827C3.3818 8.16114 3.55275 8.07456 3.73886 8.03949C3.92497 8.00442 4.11788 8.02242 4.29319 8.09122C4.46851 8.16002 4.61835 8.27653 4.72377 8.42601C4.82919 8.5755 4.88546 8.75124 4.88546 8.93103C4.88521 9.17204 4.78404 9.4031 4.60417 9.57352C4.4243 9.74394 4.18041 9.83979 3.92604 9.84003ZM10.642 3.02251H11.7645L12.793 5.29502H10.642V3.02251ZM10.642 9.84003C10.4523 9.84003 10.2668 9.78672 10.109 9.68684C9.95121 9.58695 9.82824 9.44499 9.75562 9.27889C9.683 9.11279 9.664 8.93002 9.70102 8.75369C9.73804 8.57736 9.82942 8.41539 9.9636 8.28827C10.0978 8.16114 10.2687 8.07456 10.4548 8.03949C10.6409 8.00442 10.8339 8.02242 11.0092 8.09122C11.1845 8.16002 11.3343 8.27653 11.4397 8.42601C11.5452 8.5755 11.6014 8.75124 11.6014 8.93103C11.6012 9.17204 11.5 9.4031 11.3201 9.57352C11.1403 9.74394 10.8964 9.83979 10.642 9.84003ZM13.0406 8.47653H12.4927C12.3871 8.08721 12.148 7.74213 11.8131 7.49537C11.4782 7.24862 11.0663 7.11414 10.642 7.11302V6.20402H13.0406V8.47653Z"
                fill="white"
              />
            </svg>
              Suppliers
            </Link>
          </li>
          <li className={` ${pathname === '/dashboard/stock' ? 'bg-primary' : ''}`}>

            <Link href="/dashboard/stock" className="w-full h-full cursor-pointer px-6 py-4 flex gap-4 items-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <path
                d="M12.6 0H1.4C0.7 0 0 0.63 0 1.4V3.507C0 4.011 0.301 4.445 0.7 4.69V12.6C0.7 13.37 1.47 14 2.1 14H11.9C12.53 14 13.3 13.37 13.3 12.6V4.69C13.699 4.445 14 4.011 14 3.507V1.4C14 0.63 13.3 0 12.6 0ZM11.9 12.6H2.1V4.9H11.9V12.6ZM12.6 3.5H1.4V1.4H12.6V3.5Z"
                fill="white"
              />
              <path d="M9.2 8H5V9.4H9.2V8Z" fill="white" />
              <path d="M6.3999 6.5998L6.3999 10.7998L7.7999 10.7998L7.7999 6.5998L6.3999 6.5998Z" fill="white" />
            </svg>
              Stock
            </Link>
          </li>

          <li className={` ${pathname === '/dashboard/machine-learning' ? 'bg-primary' : ''}`}>

            <Link href="/dashboard/machine-learning" className="w-full h-full cursor-pointer px-6 py-4 flex gap-4 items-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <path
                d="M0 10.8889V12.4444H4.66667V10.8889H0ZM0 1.55556V3.11111H7.77778V1.55556H0ZM7.77778 14V12.4444H14V10.8889H7.77778V9.33333H6.22222V14H7.77778ZM3.11111 4.66667V6.22222H0V7.77778H3.11111V9.33333H4.66667V4.66667H3.11111ZM14 7.77778V6.22222H6.22222V7.77778H14ZM9.33333 4.66667H10.8889V3.11111H14V1.55556H10.8889V0H9.33333V4.66667Z"
                fill="white"
              />
            </svg>
              Machine Learning
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-4 right-0  bg-[#455162] px-2 py-5 -mr-7" onClick={() => setIsActive()}>
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
