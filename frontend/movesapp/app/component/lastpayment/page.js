'use client';
import Link from 'next/link';
import  { useState } from 'react';

export default function CreditCardForm() {
  const [form, setForm] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
<div>
        <div className='flex justify-between p-8 '>
  <div className="w-full text-left">
    <h1 className="text-4xl font-bold text-[#e50914]"><Link href="/">NETMOVIES</Link></h1>
  </div>
  <div>
    <h2 className="text-2xl  sm:text-lg font-bold text-gray-700  cursor-pointer hover:underline whitespace-nowrap">
      Sign Out
    </h2>
  </div>
</div>
    <div className="max-w-xl mx-auto px-4 py-8 text-gray-800 bg-white">
      <h3 className="text-sm font-medium text-gray-500 mb-1">STEP 3 OF 3</h3>
      <h1 className="text-3xl font-bold mb-4">Set up your credit or debit card</h1>

      {/* Card Logos */}
      <div className="flex gap-2 mb-4">
        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="w-10 h-6" />
        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="mastercard" className="w-10 h-6" />
        <img src="https://img.icons8.com/color/48/amex.png" alt="amex" className="w-10 h-6" />
      </div>

      {/* Card Number */}
      <input
        name="cardNumber"
        type="text"
        placeholder="Card number"
        value={form.cardNumber}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded"
      />

      {/* Expiry + CVV */}
      <div className="flex gap-2 mb-4">
        <input
          name="expiry"
          type="text"
          placeholder="Expiration date"
          value={form.expiry}
          onChange={handleChange}
          className="w-1/2 p-3 border rounded"
        />
        <input
          name="cvv"
          type="text"
          placeholder="CVV"
          value={form.cvv}
          onChange={handleChange}
          className="w-1/2 p-3 border rounded"
        />
      </div>

      {/* Name */}
      <input
        name="name"
        type="text"
        placeholder="Name on card"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded"
      />

      {/* Price and Plan */}
      <div className="bg-gray-100 p-4 rounded mb-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">SAR 71/month</p>
          <p className="text-sm text-gray-600">Premium</p>
        </div>
        <button className="text-blue-600 font-medium hover:underline">Change</button>
      </div>

      {/* Info Text */}
      <p className="text-xs text-gray-600 mb-4">
        Your payments will be processed internationally. Additional bank fees may apply.
      </p>

      <p className="text-xs text-gray-600 mb-4">
        By checking the checkbox below, you agree to our{' '}
        <a href="#" className="text-blue-600 underline">Terms of Use</a>,{' '}
        <a href="#" className="text-blue-600 underline">Privacy Statement</a>, and that you are over 18. Netflix will
        automatically continue your membership and charge the membership fee (currently SAR 71/month) to your payment
        method until you cancel. You may cancel at any time to avoid future charges.
      </p>

      {/* Checkbox */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm">I agree.</label>
      </div>

      <button
        disabled={!form.agree}
        className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition"
      >
        Start Membership
      </button>
    </div></div>
  );
}
