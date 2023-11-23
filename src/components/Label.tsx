interface IProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  percentage?: string;
  linkName?: string;
  onClick?: () => void;
}

const Label = ({ title, value, icon, percentage, linkName, onClick }: IProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer px-8 py-6 border  w-1/3 rounded-3xl min-h-max transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10">
      <div className="flex whitespace-nowrap gap-4 items-center mb-4">
        {icon}
        <h2 className="text-black text-lg font-medium">{title}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-semibold">{value}</p>
          {!value.includes('Rp.') && <p className="text-base font-light">Products</p>}
        </div>
        {percentage ? (
          <div className="bg-[#0A9D4C] bg-opacity-10 px-2 py-2 rounded-xl flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  text-[#0A9D4C]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
            <p className="text-[#0A9D4C] font-semibold"> {percentage}</p>
          </div>
        ) : (
          linkName && (
            <div>
              <div className="flex gap-2 items-center">
                {linkName}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Label;
