'use client';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { Card } from '@tremor/react';
import Image from 'next/image';
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

const Page = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });
  return (
    <>
      <div className="w-full px-10 text-black flex gap-10">
        <div className="w-2/3 flex flex-col gap-10">
          <div className="flex gap-6 max-w-md">
            <div>
              <Image src={'/prof.jpg'} width={120} height={120} alt="prof" className="rounded-full aspect-square" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold">Supplier & Distributor</h1>
                <p className="text-base font-normal">Yogyakarta, Indonesia</p>
              </div>
              <div className="flex justify-between ">
                <div>
                  <h2 className="text-xl font-semibold text-center">10</h2>
                  <p className="text-sm font-normal text-center">Agreement</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-center">2</h2>
                  <p className="text-sm font-normal text-center">On Going</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-center">32</h2>
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
        <div className="w-1/3 flex flex-col gap-10">
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
                  <div className="p-1 rounded-full border">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border">
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
                  <div className="p-1 rounded-full border">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border">
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
                  <div className="p-1 rounded-full border">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border">
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
                  <div className="p-1 rounded-full border">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-1 rounded-full border">
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
                  <button className="px-4 py-2 rounded-full border border-primary mt-2">Profile</button>
                </div>
              </div>
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
                  <button className="px-4 py-2 rounded-full border border-primary mt-2">Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 my-10">
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
              {distributorsData.map((data, index) => (
                <tr key={index} className="text-center border h-14 font-normal">
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.distance}</td>
                  <td>{data.address}</td>
                  <td>{data.stock}</td>
                  <td>
                    <button className='bg-primary text-white px-4 py-2 rounded-full'>Buy Now</button>
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
