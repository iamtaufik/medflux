import React from 'react';

const Page = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-bold">Stock</h1>
          <p className="text-base font-normal">Stock of medicines availabel for sales</p>
        </div>
        <div className="flex gap-4">
          <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Report
          </button>
          <button className="flex bg-primary gap-2 text-white px-4 py-2 items-center border border-primary rounded-3xl">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z"
                fill="white"
              />
            </svg>
            Add Stock
          </button>
        </div>
      </div>
      <div className="px-10 flex justify-between my-10 ">
        <div className="w-full max-w-2xl p-4 border rounded-2xl ">
          <h2 className="text-black font-bold text-xl px-6">Stock - History</h2>
          <iframe className="w-full h-[400px]" src="https://lookerstudio.google.com/embed/reporting/10ca24f0-6425-4a4f-a84c-20b5226c3d99/page/p_p35mu7288c" frameBorder={0} style={{ border: 0 }} allowFullScreen={true}></iframe>
          <div className='mt-4 flex items-center gap-4 bg-[#F0483E] bg-opacity-10 w-full rounded-3xl px-4 py-2'>
            <div className="bg-[#F0483E]  p-1 rounded-full ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <p className='text-[#F0483E]'>
              <span className='font-bold'>Diarrhea</span> cases increase in your area! Check <span className='font-bold'>Imodium</span> stock avability now
            </p>
          </div>
        </div>
        <div className="w-full max-w-md p-4 border rounded-2xl">
          <h2 className="text-black font-bold text-xl px-6">Distribution Of Disease</h2>
          <iframe className="w-full h-[400px]" src="https://lookerstudio.google.com/embed/reporting/10ca24f0-6425-4a4f-a84c-20b5226c3d99/page/p_i2fvif088c" frameBorder={0} style={{ border: 0 }} allowFullScreen={true}></iframe>
        </div>
      </div>
    </>
  );
};

export default Page;
