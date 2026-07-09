"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = () => {
 const router = useRouter();
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("formdata")) || [];
    const usersArray = Array.isArray(existingUsers) ? existingUsers : [existingUsers];

    const emailExists = usersArray.some((user) => user.email === formData.email);

    if (emailExists) {
      setMessage({ type: "error", text: "User with this email already exists." });
    } else {
      usersArray.push(formData);
      localStorage.setItem("formdata", JSON.stringify(usersArray));
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
      });

    }

setMessage({ type: "success", text: "Registered successfully!" });
localStorage.setItem("loggedInUser", JSON.stringify(formData)); // ✅ Add this

setTimeout(() => {
  setMessage(null);
  router.push("/");
}, 2000);
  };





  
  return (
    <>
      {/* Notification Message */}
      {message && (
        <div
          className={`fixed top-5 right-5 z-[9999] px-4 py-3 rounded shadow-md transition-all duration-300 ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {message.text}
        </div>
      )}

      <div className="relative bg-black min-h-screen px-6 py-2 sm:py-4 lg:px-8 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.imgur.com/ECKbXX9.jpeg"
            alt="background"
            layout="fill"
            objectFit="cover"
            unoptimized
            className="opacity-60"
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-6">
            <Link href="/">
              <h1 className="text-3xl font-bold text-[#e50914]">NETMOVIES</h1>
            </Link>
          </div>

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create your account
            </h2>
            <p className="mt-2 text-gray-400 text-sm">
              Fill in your information to get started.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl bg-black p-6 rounded-xl shadow-lg backdrop-blur-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:ring focus:ring-indigo-500"
                  type="text"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:ring focus:ring-indigo-500"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:ring focus:ring-indigo-500"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:ring focus:ring-indigo-500"
                  type="password"
                  placeholder="********"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:ring focus:ring-indigo-500"
                  type="tel"
                  placeholder="05xxxxxxxx"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md shadow transition duration-200"
              >
                Register
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/component/RootLogin" className="text-indigo-400 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
