"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function First() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(() => {
  const checkLogin = () => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user); // true if exists
  };

  checkLogin(); // run once on component mount

  window.addEventListener("storage", checkLogin); // listen to login/logout changes

  return () => {
    window.removeEventListener("storage", checkLogin); // cleanup on unmount
  };
}, []);

const handleLogout = () => {
  // ✅ This will change the button back to "Sign in"
};

 



  return (
    <div className="relative w-full text-white overflow-hidden pb-16 sm:pb-20">
      {/* Background image */}
      <div className="absolute inset-0 h-full max-h-[800px]">
        <Image
          src="https://i.imgur.com/ECKbXX9.jpeg"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          unoptimized
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-6">
       
        <h3 className="text-xl sm:text-2xl font-bold text-red-600">
          NETMOVIES
        </h3>
        <div className="flex items-center gap-2 ">
             {isLoggedIn ? (
         
            
            <button onClick={handleLogout}  className=" cursor-pointer   bg-red-600 text-white px-3 py-1 text-sm sm:text-base rounded-md hover:bg-red-700 transition">
              Sign out
            </button>
           ) : (  <Link href="/component/RootLogin">
            {" "}
            <button className=" cursor-pointer   bg-red-600 text-white px-3 py-1 text-sm sm:text-base rounded-md hover:bg-red-700 transition">
              Sign in
            </button>
          </Link> )}
          <div className="flex items-center gap-1 border border-gray-500 px-2 py-1 rounded">
            <Image
              src="https://img.icons8.com/?size=30&id=12455&format=png&color=faf7f7"
              alt="flag"
              width={20}
              height={20}
              unoptimized
            />
            <span className="text-sm sm:text-base">English</span>
            <Image
              src="https://img.icons8.com/?size=30&id=85018&format=png&color=faf7f7"
              alt="arrow"
              width={10}
              height={10}
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-20 sm:pt-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          Unlimited movies, TV shows, and more
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-xl">
          Starts at SAR 35 Cancel anytime.
        </p>

        <p className="mt-2 text-sm sm:text-base md:text-lg max-w-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-6 w-full max-w-md flex flex-col gap-3 px-4 sm:px-0">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 rounded-md border border-gray-400 bg-black bg-opacity-40 text-white placeholder-gray-300"
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
