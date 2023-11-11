import React from 'react';

interface IProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  percentage?: string;
  linkName?: string;
}

const Label = ({ title, value, icon, percentage, linkName }: IProps) => {
  return (
    <div className="px-8 py-6 bg-[#f1f7fd] max-w-xs w-full rounded-3xl h-full">
      <div className="flex whitespace-nowrap gap-4 items-center mb-4">
        {icon}
        <h2 className="text-black text-lg font-medium">{title}</h2>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold">{value}</p>
        {percentage ? (
          <div className="bg-[#0A9D4C] bg-opacity-10 px-2 py-2 rounded-xl flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  text-[#0A9D4C]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
            <p className="text-[#0A9D4C] font-semibold"> {percentage}</p>
          </div>
        ) : (
          <div>
            <a href="#">
              {linkName}
              <span className="font-bold">{'>>'}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Label;
