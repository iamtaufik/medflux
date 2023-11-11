import Label from '@/components/Label';
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">Transaction</h1>
          <p className="text-base font-normal">Sales transaction report of the pharmacy</p>
        </div>
        <div>
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Report
          </button>
        </div>
      </div>
      <div className="px-10 text-black my-10">
        <div className="flex gap-6">
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
      <div className="px-10">
        <div className="min-w-min max-w-3xl p-4 border rounded-2xl">
          <div className="px-6 justify-between flex items-center">
          <h2 className="text-black font-bold text-xl px-6">Transaction - History</h2>
            <div className="flex gap-2 ">
              <div className="flex border rounded-lg p-2 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  ></path>
                </svg>
                <p className="mx-2">Date Range</p>
              </div>
              <div className="flex border rounded-lg p-2 bg-white">
                <p className="mx-2">Drug Name</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-[5px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </div>
            </div>
          </div>

          <iframe
            width="750"
            height="500"
            className="mt-2"
            src="https://lookerstudio.google.com/embed/reporting/10ca24f0-6425-4a4f-a84c-20b5226c3d99/page/p_qzfggwy88c"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
      <div className="px-10 my-10">
        <div className="min-w-min max-w-3xl p-4 border rounded-2xl">
          <div className="px-6 justify-between flex items-center">
            <h2 className="text-black font-bold text-xl px-6">Transaction - Buyer Disease</h2>
            <div className="flex gap-2 ">
              <div className="flex border rounded-lg p-2 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  ></path>
                </svg>
                <p className="mx-2">Date Range</p>
              </div>
            </div>
          </div>

          <iframe
            width="750"
            height="420"
            className="ml-2"
            src="https://lookerstudio.google.com/embed/reporting/10ca24f0-6425-4a4f-a84c-20b5226c3d99/page/p_qs7h34y88c"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Page;
