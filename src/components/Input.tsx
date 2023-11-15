import React from 'react';

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  isRequired?: boolean;
  className?: string;
}

const Input = ({ name, type, placeholder, className, isRequired = true }: IProps) => {
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
        className={`flex h-30  w-full rounded-lg border border-gray-300 p-4 text-base bg-background shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1  focus-visible:ring-cyan-500 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-5 ${className}`}
        required={isRequired}
      />
    </div>
  );
};

export default Input;
