import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Input from './Input';
import { Select, SelectItem } from '@tremor/react';
import { toast } from 'react-toastify';

interface ModalProps {
  isOpen?: boolean;
}

const Modal = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen || false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Medicine Added to iventory', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <div className={`relative z-50 n ${!isOpen && 'hidden'} `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-opacity bg-zinc-900 bg-opacity-40"></div>
      <div className=" min-w-screen fixed inset-0 z-10 ">
        <div className="flex  items-center justify-center min-h-full text-center sm:items-center sm:p-0">
          <div className="relative h-screen w-screen max-h-screen  px-32 py-14  text-left transition-all transform  rounded-md shadow-xl ">
            {/* Content */}
            <div className="w-full p-10 h-full bg-white rounded-2xl ">
              <div className="flex justify-between items-center ">
                <h1 className="text-black text-xl font-bold">Add Stock Medicine</h1>
                <div onClick={() => setIsOpen(false)} className="cursor-pointer">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.89 6.84888L10 8.74617L8.11 6.84888C7.72 6.45738 7.09 6.45738 6.7 6.84888C6.31 7.24039 6.31 7.87282 6.7 8.26432L8.59 10.1616L6.7 12.0589C6.31 12.4504 6.31 13.0828 6.7 13.4743C7.09 13.8658 7.72 13.8658 8.11 13.4743L10 11.577L11.89 13.4743C12.28 13.8658 12.91 13.8658 13.3 13.4743C13.69 13.0828 13.69 12.4504 13.3 12.0589L11.41 10.1616L13.3 8.26432C13.69 7.87282 13.69 7.24039 13.3 6.84888C12.91 6.46742 12.27 6.46742 11.89 6.84888ZM10 0.123047C4.47 0.123047 0 4.61028 0 10.1616C0 15.7129 4.47 20.2002 10 20.2002C15.53 20.2002 20 15.7129 20 10.1616C20 4.61028 15.53 0.123047 10 0.123047ZM10 18.1925C5.59 18.1925 2 14.5886 2 10.1616C2 5.7346 5.59 2.13076 10 2.13076C14.41 2.13076 18 5.7346 18 10.1616C18 14.5886 14.41 18.1925 10 18.1925Z"
                      fill="#313C4A"
                    />
                  </svg>
                </div>
              </div>
              <div className="overflow-y-scroll scroll w-full h-full px-2">
                <form className="flex justify-between gap-60" onSubmit={handleSubmit}>
                  <div className="w-1/2">
                    <Input name="Medicine Name" placeholder="Medicine Name" type="text" className="h-0 py-6" />
                    <Input name="Medicine ID" placeholder="Enter medicine ID" type="text" className="h-0 py-6" />
                    <Input name="Disase" placeholder="Enter disase" type="text" className="h-0 py-6" />
                    <Input name="Buy Price" placeholder="Rp. 0.00" type="number" className="h-0 py-6" />
                    <div className="flex flex-col mt-6">
                      <label htmlFor="typeId" className="font-semibold">
                        Type ID
                      </label>
                      <select
                        name="typeId"
                        id="typeId"
                        className={`flex  w-full rounded-lg border border-gray-300 py-3 px-4 text-base bg-background shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1  focus-visible:ring-cyan-500 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-5`}
                        required
                      >
                        <option value="">Select Type ID</option>
                        <option value="121902120912">121902120912</option>
                        <option value="183713717983">183713717983</option>
                        <option value="810108310013">810108310013</option>
                        <option value="180317318310">180317318310</option>
                      </select>
                    </div>
                    <Input name="Arival Date" placeholder="Select Arival Date" type="date" className="h-0 py-6" />
                    <Input name="Check Date" placeholder="Select Check Date" type="date" className="h-0 py-6" />
                  </div>
                  <div className="w-1/2">
                    <Input name="Expired Date" placeholder="Select Expired Date" type="date" className="h-0 py-6" />
                    <Input name="The Real Stock" placeholder="Enter The Real Stock" type="number" className="h-0 py-6" />
                    <Input name="Total Price" placeholder="Rp. 0,00" type="number" className="h-0 py-6" />
                    <Input name="Price of Lost" placeholder="Rp. 0,00" type="number" className="h-0 py-6" />
                    <Input name="Price of Over" placeholder="Rp. 0,00" type="number" className="h-0 py-6" />
                    <Input name="Additional Information" placeholder="Enter Additional Information" type="text" className="h-0 py-6" isRequired={false} />
                    <div className="mt-6 flex justify-end gap-4">
                      <button onClick={() => setIsOpen(false)} className="border border-primary rounded-full py-2 px-6 cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-white">
                        Cancel
                      </button>
                      <button type="submit" className="border border-primary bg-primary text-white rounded-full py-2 px-6 cursor-pointer transition-colors duration-300 hover:bg-[#13668D] hover:text-white">
                        Add to iventory
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShowModal = () => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  document.body.appendChild(modal);
  const root = createRoot(modal);

  root.render(<Modal isOpen={true} />);
};
