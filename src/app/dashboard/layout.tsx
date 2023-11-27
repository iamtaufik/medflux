'use client';
import SearchIcon from '@/components/SearchIcon';
import Sidebar from '@/components/Sidebar';
import { sidebarToggle } from '@/context/sidebarToggle';

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isActive, setIsActive } = sidebarToggle();
  return (
    <section className="flex relative">
      <Sidebar />
      <section className={`bg-white min-h-screen w-full overflow-y-auto overflow-x-hidden transition-all flex flex-col ease-in-out duration-300  ${isActive ? 'md:ml-72' : 'ml-0'}`}>
        <div className="bg-[#F7FAFD] py-8 mb-6 px-10 hidden md:block">
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
        <div className="py-4 mb-6 px-4 flex justify-between md:hidden">
          <div className="max-w-min" onClick={() => setIsActive()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className="bg-[#F7FAFD] p-2 rounded-full">
            <SearchIcon />
          </div>
        </div>
        {children}
      </section>
    </section>
  );
};

export default layout;
