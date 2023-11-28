'use client';
import Table from '@/components/Table';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Link from 'next/link';
import React from 'react';

const distributorsData = [
  {
    name: 'PT. Indofarma G.M',
    distance: '1.2 km',
    address: 'JL. Kaliurang KM 5,5',
    stock: 'Rp. 1,245,000',
  },
  {
    name: 'PT. Indofarma G.M',
    distance: '1.2 km',
    address: 'JL. Kaliurang KM 5,5',
    stock: 'Rp. 1,245,000',
  },
  {
    name: 'PT. Indofarma G.M',
    distance: '1.2 km',
    address: 'JL. Kaliurang KM 5,5',
    stock: 'Rp. 1,245,000',
  },
  {
    name: 'PT. Indofarma G.M',
    distance: '1.2 km',
    address: 'JL. Kaliurang KM 5,5',
    stock: 'Rp. 1,245,000',
  },
  {
    name: 'PT. Indofarma G.M',
    distance: '1.2 km',
    address: 'JL. Kaliurang KM 5,5',
    stock: 'Rp. 1,245,000',
  },
  {
    name: 'PT. Indofarma G.M',
    distance: '1.2 km',
    address: 'JL. Kaliurang KM 5,5',
    stock: 'Rp. 1,245,000',
  },
];

const Page = ({ params }: { params: { code: string } }) => {
  const code = params.code;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });
  return (
    <>
      <div className="px-4 md:px-10">
        <h1 className="text-xl md:text-2xl font-bold">
          <Link className="text-gray-300" href={'/dashboard/stock'}>
            Stock
          </Link>
          <span className="text-gray-300">{'>'}</span>
          <Link className="text-gray-300" href={'/dashboard/stock/data'}>
            Data Stock
          </Link>
          {'>'}
          <span className="text-black">Stock Detail Product</span>
        </h1>
        <p className="text-base font-normal">Detail information of medicines for sales</p>
      </div>
      <div className="px-4 md:px-10 my-10 flex gap-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 border rounded-xl h-full">
          <h2 className="px-6 py-4 text-xl font-semibold">Detail Product Information</h2>
          <hr />
          <ul className="flex flex-col justify-between">
            <li className="px-6 py-4 flex justify-between">
              <span>Medicine Name</span>
              <span>Ol Bioparts Kaps</span>
            </li>
            <hr />
            <li className="px-6 py-4 flex justify-between">
              <span>Medicine Code</span>
              <span className="text-cyan-500 font-semibold">B000182192192</span>
            </li>
            <hr />
            <li className="px-6 py-4 flex justify-between">
              <span>Disease</span>
              <span>Prostate Disorder</span>
            </li>
            <hr />
            <li className="px-6 py-4 flex justify-between">
              <span>Entry Date</span>
              <span>3 May 2023</span>
            </li>
            <hr />
            <li className="px-6 py-4 flex justify-between">
              <span>Last Check Date</span>
              <span>1 August 2023</span>
            </li>
            <hr />
            <li className="px-6 py-4 flex justify-between">
              <span>Expired Date</span>
              <span>1 August 2023</span>
            </li>
            <hr />
            <li className="px-6 py-4 flex justify-between">
              <span>The Real Stock</span>
              <span>12</span>
            </li>
            <hr />
            <li className="px-6 py-4 flex justify-between">
              <span>Max Capacity</span>
              <span>1200</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 border rounded-xl px-6 pb-6">
          <h2 className="text-xl font-bold  py-4">Recomendation Distributors</h2>
          <div className="w-full flex gap-2 justify-end mb-4">
            <div>
              <button className="px-4 py-2 border rounded-3xl">View Full Map</button>
            </div>
          </div>
          <div className="w-full h-[380px]">
            {isLoaded && (
              <GoogleMap
                center={{
                  lat: -7.75986442382859,
                  lng: 110.40902667419697,
                }}
                zoom={13}
                mapContainerStyle={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <MarkerF position={{ lat: -7.75986442382859, lng: 110.40902667419697 }} />
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 mb-10 md:px-10">
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
                  <span>Distributor</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1 justify-center ">
                  <span>Distance</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1 justify-center ">
                  <span>Address</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1 justify-center ">
                  <span>Stock</span>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {distributorsData.map((data, index) => (
              <tr key={index} className="text-center border font-normal whitespace-nowrap">
                <td scope="col" className="px-6 py-3 ">
                  {index + 1}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.name}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.distance}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.address}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.stock}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  <button className="bg-primary text-white px-4 py-2 rounded-full">Buy Now</button>
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
