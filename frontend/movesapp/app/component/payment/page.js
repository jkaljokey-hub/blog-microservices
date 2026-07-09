"use client";

import Link from "next/link";
import Image from "next/image";


export default function NetflixPaymentOptions() {
  return (
    <div className="bg-white">
      <div className="flex justify-between p-4 ">
        <div className="w-full text-left">
          <h1 className="text-4xl font-bold text-[#e50914]">
            <Link href="/"> NETMOVIES</Link>
          </h1>
        </div>
        <div>
          <h2 className="text-2xl sm:text-lg font-bold text-gray-700 cursor-pointer hover:underline whitespace-nowrap">
            Sign Out
          </h2>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Lock Icon */}
        <div className="text-center mb-4">
          <div className="text-red-500 text-3xl">
            <Image
              src="https://img.icons8.com/?size=100&id=znpDNZWhQe6p&format=png&color=000000"
              alt="lock"
              width={64}
              height={64}
              unoptimized
            />
          </div>
        </div>

        {/* Step Header */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-500 font-semibold">STEP 3 OF 3</p>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-1">Choose how to pay</h2>
          <p className="text-gray-600 text-sm mt-2">
            Your payment is encrypted and you can change how you pay anytime.
          </p>
          <p className="font-medium mt-2">
            Secure for peace of mind. <br /> Cancel easily online.
          </p>
        </div>

        {/* Payment Options */}
        <div className="w-full max-w-md space-y-3 ">
          <Link href="/component/lastpayment">
            <button className="flex justify-between items-center w-full border rounded px-4 py-3 hover:bg-amber-200 transition">
              <span>Credit or Debit Card</span>
              <span className="flex gap-1">
                <Image
                  src="https://img.icons8.com/color/48/visa.png"
                  alt="visa"
                  width={24}
                  height={24}
                  unoptimized
                />
                <Image
                  src="https://img.icons8.com/color/48/mastercard.png"
                  alt="mastercard"
                  width={24}
                  height={24}
                  unoptimized
                />
                <Image
                  src="https://img.icons8.com/color/48/amex.png"
                  alt="amex"
                  width={24}
                  height={24}
                  unoptimized
                />
              </span>
              <Image
                src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000"
                alt="arrow"
                width={32}
                height={32}
                unoptimized
              />
            </button>
          </Link>

          <Link href="/component/lastpayment">
            <button className="mt-2 flex justify-between items-center w-full border rounded px-4 py-3 hover:bg-amber-200 transition">
              <span>Add to mobile bill</span>
              <span className="flex gap-2">
                {/* You can add STC/Mobily/Zain logos here later */}
              </span>
              <Image
                src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000"
                alt="arrow"
                width={32}
                height={32}
                unoptimized
              />
            </button>
          </Link>

          <Link href="/component/lastpayment">
            <button className="mt-2 flex justify-between items-center w-full border rounded px-4 py-3 hover:bg-amber-200 transition">
              <span>Gift Code</span>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
                width={60}
                height={20}
                unoptimized
              />
              <Image
                src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000"
                alt="arrow"
                width={32}
                height={32}
                unoptimized
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
