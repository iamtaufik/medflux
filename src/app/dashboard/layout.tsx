import Sidebar from '@/components/Sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex relative">
      <Sidebar />
      {children}
    </section>
  );
};

export default layout;
