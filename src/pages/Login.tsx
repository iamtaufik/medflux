'use client';
import Input from '@/components/Input';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen w-full flex">
      <div className="relative w-1/2 hidden md:block">
        <div className="background"></div>
        <div className="absolute bottom-14 mx-20 border rounded-tl-[60px] rounded-tr-[40px] rounded-br-[40px] p-6 bg-transparent backdrop-blur-md ">
          <p className="font-medium text-white text-2xl leading-normal tracking-wide ">
            Addressing Supply Chain Issues with <br /> Seasonal Disease & Drug Sales Data <br /> Analysis Using Machine Learning
          </p>
          <Image src="/logo-white.svg" width={101} height={30} className="mt-2" alt="Logo" />
        </div>
      </div>
      <div className="bg-white w-full px-4 py-10  md:px-36 md:py-28 md:w-1/2">
        <div className="w-full ">
          <Image src="/logo.svg" alt="Logo" width={193} height={40} />
          <div className="my-8 text-black">
            <h1 className="text-4xl font-bold mb-1">Login to your Account</h1>
            <p className="font-light">See what is going on with your business</p>
          </div>
          <form action="" className="w-full ">
            <Input name="Email" type="email" placeholder="Enter your email" className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" />
            <Input name="Password" type="password" placeholder="*************" />
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="remember" id="remember" className="checked:bg-primary" />
                <label htmlFor="remember" className="pl-2 text-gray-400 text-sm">
                  Remember Me
                </label>
              </div>
              <div>
                <p className="text-sm text-primary font-semibold">Forgot Password</p>
              </div>
            </div>
            <div className="w-full mt-6">
              <button className="w-full bg-primary rounded-lg py-4 text-white " onClick={() => router.push('/dashboard')}>
                Login
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-sm text-gray-400 text-center">
              Login for owner? <span className="text-primary font-semibold">Login</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
