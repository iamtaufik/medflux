'use client';
import React from 'react';
import id from 'date-fns/locale/id';
import { BarChart, Card, DateRangePicker, LineChart, AreaChart } from '@tremor/react';

const demandForecast = [
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

const buyerDiseases = [
  {
    name: 'Diare',
    'Record Count': 260,
  },
  {
    name: 'Hipertensi',
    'Record Count': Math.floor(Math.random() * 200),
  },
  {
    name: 'Nyeri',
    'Record Count': Math.floor(Math.random() * 200),
  },
  {
    name: 'Infeksi Kulit',
    'Record Count': Math.floor(Math.random() * 200),
  },
  {
    name: 'Infeksi Bakteri',
    'Record Count': Math.floor(Math.random() * 200),
  },
  {
    name: 'Gangguan Pernaafsan',
    'Record Count': Math.floor(Math.random() * 200),
  },
  {
    name: 'Pascaoperasi',
    'Record Count': Math.floor(Math.random() * 200),
  },
];

const stocks = [
  {
    name: 'Paracetamol',
    'Avability Stock': Math.floor(Math.random() * 500),
  },
  {
    name: 'Amoxilin',
    'Avability Stock': Math.floor(Math.random() * 500),
  },
  {
    name: 'Promag',
    'Avability Stock': Math.floor(Math.random() * 500),
  },
  {
    name: 'Bodrex',
    'Avability Stock': Math.floor(Math.random() * 500),
  },
  {
    name: 'Antangin',
    'Avability Stock': Math.floor(Math.random() * 500),
  },
  {
    name: 'Paramex',
    'Avability Stock': Math.floor(Math.random() * 500),
  },
];

const Page = () => {
  return (
    <>
      <div className="px-4 md:px-10">
        <h1 className="text-xl md:text-2xl font-bold">Machine Learning Dashboard</h1>
        <p className="text-base font-normal">A quick recomendations machine learning analytics</p>
      </div>
      <div className="px-4 md:px-10 my-10 flex gap-8 justify-between flex-col md:flex-row">
        <Card className="md:w-1/2">
          <h2 className="text-xl font-bold">Demand Forecasting Model</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div className="w-full max-w-[250px]">
              <DateRangePicker className="w-full " locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" />
            </div>
          </div>
          <LineChart data={demandForecast} index="date" categories={['value']} colors={['blue']} valueFormatter={(val) => val.toString()} showAnimation={true} />
        </Card>
        <Card className="md:w-1/2">
          <h2 className="text-xl font-bold">Disease Trend</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div className="w-full max-w-[250px]">
              <DateRangePicker className="w-full " locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" />
            </div>
          </div>
          <BarChart className="mt-6" data={buyerDiseases} index="name" categories={['Record Count']} colors={['blue']} valueFormatter={(val) => val.toString()} showAnimation={true} />
        </Card>
      </div>
      <div className="px-4 md:px-10 mb-10  flex gap-8 justify-between flex-col md:flex-row">
        <Card className="md:w-1/2">
          <h2 className="text-xl font-bold">Stock Trend</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div className="w-full max-w-[250px]">
              <DateRangePicker className="w-full " locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" />
            </div>
          </div>
          <BarChart className="mt-6" data={stocks} index="name" categories={['Avability Stock']} colors={['blue']} valueFormatter={(val) => val.toString()} showAnimation={true} />
        </Card>
        <Card className="md:w-1/2">
          <h2 className="text-xl font-bold">Trade Series</h2>
          <div className="w-full flex gap-2 justify-end my-4">
            <div className="w-full max-w-[250px]">
              <DateRangePicker className="w-full " locale={id} defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }} enableSelect={false} placeholder="Date Range" />
            </div>
          </div>
          <AreaChart data={demandForecast} index="date" categories={['value']} colors={['blue']} valueFormatter={(val) => val.toString()} showAnimation={true} />
        </Card>
      </div>
    </>
  );
};

export default Page;
