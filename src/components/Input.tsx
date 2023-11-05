import React from 'react';

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
}

const Input = ({ name, type, placeholder, className }: IProps) => {
  return (
    <div className="flex flex-col mt-6">
      <label htmlFor={name} className="font-semibold">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        className={`flex h-30  w-full rounded-lg border border-gray-300 p-4 text-base bg-background shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2  focus-visible:ring-primary placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-5 ${className}`}
        required
      />
    </div>
  );
};

export default Input;
