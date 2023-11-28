'use client';
import Table from '@/components/Table';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { Card } from '@tremor/react';
import Image from 'next/image';
import React from 'react';

const distributorsData = [
  {
    name: 'PT. Indofarma G.M',
    distance: '0.5 m',
    address: 'Jl. Tembak No 2, Manggarani, Umbulharjo, Yogyakarta, Indonesia',
    stock: 1245000,
  },
  {
    name: 'PT. Indofarma G.M Cabang Jember',
    distance: '120 km',
    address: 'Jl. Situbondo No 2, Jember, Jawa Timur, Indonesia',
    stock: 1245000,
  },
];

const Page = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });
  return (
    <>
      <div className="w-full px-4 md:px-10 text-black flex gap-10 flex-col md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          <div className="flex gap-6 max-w-md">
            <div>
              <Image src={'/drug.jpg'} width={120} height={120} alt="drug" className="rounded-full aspect-square" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold">Supplier & Distributor</h1>
                <p className="text-base font-normal">Yogyakarta, Indonesia</p>
              </div>
              <div className="flex justify-between ">
                <div>
                  <h2 className="text-2xl font-semibold text-center">10</h2>
                  <p className="text-sm font-normal text-center">Agreement</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-center">2</h2>
                  <p className="text-sm font-normal text-center">On Going</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-center">32</h2>
                  <p className="text-sm font-normal text-center">Notifications</p>
                </div>
              </div>
            </div>
          </div>
          <Card>
            <h2 className="text-xl font-bold">Recomendation Distributors</h2>
            <div className="w-full flex gap-2 justify-end mb-4">
              <div>
                <button className="px-4 py-2 border rounded-3xl">View Full Map</button>
              </div>
            </div>
            <div className="w-full h-[450px]">
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
          </Card>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-10">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Distributor Active</h3>
              <a href="#" className="text-cyan-500 text-sm">
                View All
              </a>
            </div>
            <div className="flex flex-col gap-4 my-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center">
                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5 ">
                      <path
                        d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                        fill="#1B81B0"
                      />
                    </svg>
                  </div>
                  <p>PD. Rumah Berkah</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center">
                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5 ">
                      <path
                        d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                        fill="#1B81B0"
                      />
                    </svg>
                  </div>
                  <p>PD. Rumah Berkah</p>
                </div>
                <div className="flex gap-2 items-center ">
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center">
                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5 ">
                      <path
                        d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                        fill="#1B81B0"
                      />
                    </svg>
                  </div>
                  <p>PD. Rumah Berkah</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Supplier Active</h3>
              <a href="#" className="text-cyan-500 text-sm">
                View All
              </a>
            </div>
            <div className="flex flex-col gap-4 my-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center">
                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5 ">
                      <path
                        d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                        fill="#1B81B0"
                      />
                    </svg>
                  </div>
                  <p>PD. Rumah Berkah</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Feedback & Ratings</h3>
              <a href="#" className="text-cyan-500 text-sm">
                View All
              </a>
            </div>
            <div className="flex flex-col gap-4 my-4">
              <div className="flex gap-2 items-center">
                <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center">
                  <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5 ">
                    <path
                      d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                      fill="#1B81B0"
                    />
                  </svg>
                </div>
                <div>
                  <p>PD. Rumah Berkah</p>
                  <button className="px-4 py-2 rounded-full border border-primary mt-2 transition-colors duration-300 hover:bg-primary hover:text-white">Profile</button>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-primary bg-opacity-10 p-4 rounded-full flex items-center ">
                  <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5 ">
                    <path
                      d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                      fill="#1B81B0"
                    />
                  </svg>
                </div>
                <div>
                  <p>PD. Rumah Berkah</p>
                  <button className="px-4 py-2 rounded-full border border-primary mt-2 transition-colors duration-300 hover:bg-primary hover:text-white">Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 my-10">
        <Table
          paggination={{
            total: 10,
            page: 1,
            limit: 2,
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
                  Rp. {data.stock.toLocaleString('id-ID')}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  <button className="bg-primary text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#13668D] hover:text-white">Buy Now</button>
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
