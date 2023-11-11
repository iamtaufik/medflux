'use client';
import Card from '@/components/Card';
import Label from '@/components/Label';
import React, { useState } from 'react';

const Page = () => {
  const [isNotify, setIsNotify] = useState<boolean>(true);
  return (
    <>
      <div className="bg-[#F7FAFD] py-8 mb-6 px-10">
        <div className="relative max-w-md">
          <input
            type="search"
            className="flex h-9 w-full max-w-md  rounded-2xl border border-gray-300 px-3 py-1 text-sm bg-[#E3EBF3] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:ring-gray-500 placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search for anything here..."
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute  right-0 -translate-y-1/2 top-1/2 mr-3 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-base font-normal">A quick data overview of the inventory</p>
        </div>
        <div className={`p-2 rounded-lg border border-[#F5CE00] bg-[#F5CE00] bg-opacity-10 flex items-center gap-2 transition-transform ease-in-out duration-300 ${isNotify ? 'scale-100' : 'scale-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#F5CE00]">
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>

          <p>
            Your inventory is running low, it's time to restock the items now!{' '}
            <a href="#" className="font-bold">
              Restock Now
            </a>
          </p>
          <div className="cursor-pointer" onClick={() => setIsNotify(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-black font-bold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
      <div className="my-6 flex w-full justify-between px-10">
        <Label
          title="Drug Stock Sold"
          value="3,529"
          icon={
            <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center">
              <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary w-8 h-8 ">
                <path
                  d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                  fill="#1B81B0"
                />
              </svg>
            </div>
          }
          percentage="4.8%"
        />

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
          linkName="Check Stock"
        />
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
          linkName="See Now"
        />
      </div>
      <div className="flex w-full px-10 justify-between">
        <div className="w-full max-w-xl  ">
          <h2 className="text-2xl font-bold">Recomendations</h2>
          <p className="text-base font-normal mt-2">Machine Learning Analytics</p>
          <div className="flex flex-col my-2">
            <Card title="Oil Bioprost Kaps" quantity={12} distributors={['PT. Kimiafarma', 'PBF Bali Jaya Farmasindo']} detailLink="#" />
            <Card title="Asifit Kaplet-Blister" quantity={9} distributors={['PT. Kimiafarma', 'PBF Bali Jaya Farmasindo']} detailLink="#" />
            <Card title="Fituno Kaplet-Blister" quantity={15} distributors={['PT. Kimiafarma', 'PBF Bali Jaya Farmasindo']} detailLink="#" />
            <Card title="Paracetamol Tablet" quantity={5} distributors={['PT. Kimiafarma', 'PBF Bali Jaya Farmasindo']} detailLink="#" />
          </div>
        </div>
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold">
            Announcment <span className="bg-red-600 text-white  px-2 rounded-3xl text-base">2</span>
          </h2>
          <p className="text-base font-normal mt-2">Let's check our recomendation</p>
          <div className="flex flex-col my-4">
            <div className="flex border rounded-2xl px-4 py-3 justify-between items-center">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold">123</h3>
                  <p className="text-base font-extralight">Products</p>
                </div>
                <p className='text-base font-normal'>Potential Loss Drugs</p>
              </div>
              <div>
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L8 8.5L1 15.5" stroke="#313C4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex border rounded-2xl px-4 py-3 justify-between items-center">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold">23</h3>
                  <p className="text-base font-extralight">Products</p>
                </div>
                <p className='text-base font-normal'>Drugs Almost Expired</p>
              </div>
              <div>
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L8 8.5L1 15.5" stroke="#313C4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
