import React from 'react';

interface IProps {
  className?: string;
  children: React.ReactNode;
  paggination?: {
    total: number;
    page: number;
    limit: number;
    setLimit: (limit: number) => void;
    setOffset: (offset: number) => void;
  };
}

const Table = (props: IProps) => {
  return (
    <div className=" rounded-xl border overflow-hidden    py-4 relative w-full">
      <div className="relative w-full scroll-x overflow-x-auto py-2">
        <table className=" table-auto w-full ">{props.children}</table>
      </div>
      {props.paggination && (
        <div className="flex justify-between my-4 px-4">
          <p className="font-semibold">
            Showing {props.paggination?.limit} results of {props.paggination?.total}
          </p>
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
            <p className="font-normal">Page {props.paggination.page}</p>
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
      )}
    </div>
  );
};

export default Table;
