'use client';
import Sidebar from '@/components/Sidebar';
import { sidebarToggle } from '@/context/sidebarToggle';

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isActive } = sidebarToggle();
  return (
    <section className="flex relative">
      <Sidebar />
      <section className={`bg-white min-h-screen w-full overflow-y-auto transition-all ease-in-out duration-300 ${isActive ? 'ml-72' : 'ml-0'}`}>{children}</section>
    </section>
  );
};

export default layout;
