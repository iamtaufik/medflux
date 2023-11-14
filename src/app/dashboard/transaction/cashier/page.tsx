"use client"
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="px-10">
        <h1 className="text-2xl font-bold">
          <Link className="text-gray-300" href={'/dashboard/transaction'}>
            Transaction
          </Link>{' '}
          {'>'} <span className="text-black">Cashier</span>
        </h1>
        <p className="text-base font-normal">Sales transaction report of the pharmacy</p>
      </div>
      <div className="px-10 flex justify-between">
        <div className="w-2/3"></div>
        <div className="w-1/3 flex flex-col justify-between gap-56">
          <ul className="font-semibold flex flex-col gap-3">
            <li>Sub Total</li>
            <li>Biaya Service</li>
            <li>Biaya Embalase</li>
            <li>Ongkos Kirim</li>
            <li>Biaya Lainnya</li>
          </ul>
          <div className="bg-primary h-36 text-white flex items-center justify-center">
            <div className="flex gap-2">
              <p className="text-sm">Rp.</p>
              <p className="text-5xl">0,00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
