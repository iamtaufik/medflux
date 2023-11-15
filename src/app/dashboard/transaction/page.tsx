'use client';
import Label from '@/components/Label';
import id from 'date-fns/locale/id';
import { GoogleMap, MarkerF, useJsApiLoader, OverlayView } from '@react-google-maps/api';
import { Card, DonutChart, AreaChart, BarChart, DateRangePicker, SearchSelect, SearchSelectItem } from '@tremor/react';
import React, { useState } from 'react';

const genders = [
  { name: 'Laki - Laki', value: 40 },
  { name: 'Perempuan', value: 60 },
];

const transactions = [
  {
    date: '1 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '2 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '3 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '4 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '5 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '6 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '7 Dec',
    value: Math.floor(Math.random() * 100),
  },
  {
    date: '8 Dec',
    value: Math.floor(Math.random() * 100),
  },
];

const payments = [
  {
    name: 'Qris',
    value: 26.3,
  },
  {
    name: 'Kredit',
    value: 25.7,
  },
  {
    name: 'Transfer',
    value: 25.3,
  },
  {
    name: 'Tunai',
    value: 22.8,
  },
];

const buyerDiseases = [
  {
    name: 'Diare',
    value: 260,
  },
  {
    name: 'Hipertensi',
    value: Math.floor(Math.random() * 200),
  },
  {
    name: 'Nyeri',
    value: Math.floor(Math.random() * 200),
  },
  {
    name: 'Infeksi Kulit',
    value: Math.floor(Math.random() * 200),
  },
  {
    name: 'Infeksi Bakteri',
    value: Math.floor(Math.random() * 200),
  },
  {
    name: 'Gangguan Pernaafsan',
    value: Math.floor(Math.random() * 200),
  },
  {
    name: 'Pascaoperasi',
    value: Math.floor(Math.random() * 200),
  },
];

const positions = [
  {
    lat: -7.797068,
    lng: 110.370529,
  },
  {
    lat: -7.797667547998971,
    lng: 110.36837653846591,
  },
];

const valueFormatter = (value: number) => {
  return `${value.toString()}%`;
};
const Marker = ({ text, lat, lng }: { text?: string; lat: number; lng: number }) => (
  <div>
    <svg width={24} height={24} color="#1B81B0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);
const Page = () => {
  const [markers, setMarkers] = useState(positions);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">Transaction</h1>
          <p className="text-base font-normal">Sales transaction report of the pharmacy</p>
        </div>
        <div>
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl transition-colors duration-300 hover:bg-primary hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Download Report</span>
          </button>
        </div>
      </div>
      <div className="px-10 text-black my-10">
        <div className="flex gap-8">
          <Label
            title="Total Expenses"
            value="Rp. 433,097,858"
            icon={
              <div className="bg-[#FFA800] bg-opacity-10 p-4 rounded-full flex items-center">
                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.3335 13.6663V2.99967C24.3335 1.53301 23.1335 0.333008 21.6668 0.333008H3.00016C1.5335 0.333008 0.333496 1.53301 0.333496 2.99967V13.6663C0.333496 15.133 1.5335 16.333 3.00016 16.333H21.6668C23.1335 16.333 24.3335 15.133 24.3335 13.6663ZM21.6668 13.6663H3.00016V2.99967H21.6668V13.6663ZM12.3335 4.33301C10.1202 4.33301 8.3335 6.11967 8.3335 8.33301C8.3335 10.5463 10.1202 12.333 12.3335 12.333C14.5468 12.333 16.3335 10.5463 16.3335 8.33301C16.3335 6.11967 14.5468 4.33301 12.3335 4.33301ZM29.6668 4.33301V18.9997C29.6668 20.4663 28.4668 21.6663 27.0002 21.6663H4.3335C4.3335 20.333 4.3335 20.4663 4.3335 18.9997H27.0002V4.33301C28.4668 4.33301 28.3335 4.33301 29.6668 4.33301Z"
                    fill="#FFA800"
                  />
                </svg>
              </div>
            }
          />
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
            linkName="View Detail"
          />
        </div>
      </div>
      <div className="flex px-10 gap-8 justify-between my-10">
        <Card className="w-1/3">
          <h2 className="text-2xl font-bold">Gender</h2>
          <DonutChart className="mt-6 h-[250px]" data={genders} category="value" index="name" valueFormatter={valueFormatter} colors={['blue', 'cyan']} showLabel={false} variant="donut" showAnimation={true} />
          <div className="flex justify-center items-center gap-4 mt-4 text-sm">
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#3b82f6] w-4 h-4 inline-block "></span> Laki- Laki
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#06b6d4] w-4 h-4 inline-block "></span> Perempuan
            </p>
          </div>
        </Card>
        <Card className="w-2/3">
          <h2 className="text-2xl font-bold">Transaction - Time Series</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div>
              <DateRangePicker className="max-w-min" locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" />
            </div>
            <div className="max-w-md">
              <SearchSelect placeholder="Drug Name">
                <SearchSelectItem value="1">Paracetamol</SearchSelectItem>
                <SearchSelectItem value="2">Ambroxol</SearchSelectItem>
                <SearchSelectItem value="3">CTM</SearchSelectItem>
              </SearchSelect>
            </div>
          </div>
          <AreaChart className="h-72 mt-4" data={transactions} index="date" categories={['value']} colors={['cyan']} valueFormatter={(value: number) => value.toString()} showAnimation={true} curveType="natural" />
        </Card>
      </div>
      <div className="flex px-10 gap-8 justify-between my-10">
        <Card className="w-1/3">
          <h2 className="text-2xl font-bold">Payment Method</h2>
          <DonutChart className="mt-6 h-[250px]" data={payments} category="value" index="name" valueFormatter={valueFormatter} colors={['blue', 'cyan', 'fuchsia', 'orange']} showLabel={true} variant="pie" showAnimation={true} />
          <div className="flex justify-center items-center gap-4 mt-4 text-sm">
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#3b82f6] w-4 h-4 inline-block "></span> Qris
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#06b6d4] w-4 h-4 inline-block "></span> Kredit
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#d946ef] w-4 h-4 inline-block "></span> Transfer
            </p>
            <p className="text-center flex items-center gap-2">
              <span className="bg-[#f97316] w-4 h-4 inline-block "></span> Tunai
            </p>
          </div>
        </Card>
        <Card className="w-2/3">
          <h2 className="text-2xl font-bold">Transaction - Buyer Disease</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div>
              <DateRangePicker className="max-w-min" locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" />
            </div>
          </div>
          <BarChart className="mt-6" data={buyerDiseases} index="name" categories={['value']} colors={['blue']} valueFormatter={(val) => val.toString()} />
        </Card>
      </div>
      <div className="px-10 my-10">
        <Card>
          <h2 className="text-2xl font-bold">Transaction - Buyer Disease</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div>
              <button className="px-4 py-2 border rounded-3xl">View Full Map</button>
            </div>
          </div>
          <div className="w-full h-[450px]">
            {isLoaded && (
              <GoogleMap
                center={{
                  lat: -7.797068,
                  lng: 110.370529,
                }}
                zoom={13}
                mapContainerStyle={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {markers.map((marker, index) => (
                  <MarkerF
                    key={index}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    icon={{
                      url: '/marker.png',
                    }}
                  />
                ))}
              </GoogleMap>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Page;
