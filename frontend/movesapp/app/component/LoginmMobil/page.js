"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ useRouter instead of useNavigate
import { useState } from "react";

const LoginMobile = () => {
  const router = useRouter(); // ✅ correct hook

  const [message, setMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [User, setUser] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("formdata")) || [];
    const usersArray = Array.isArray(storedUsers) ? storedUsers : [storedUsers];

    const foundUser = usersArray.find(
      (user) =>
        user.email === User.email &&
        user.password === User.password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setMessage({ type: "success", text: "Login successful" });

      setTimeout(() => {
        router.push("/"); // ✅ Redirect to profile page
      }, 1000);
    } else {
      setMessage({ type: "error", text: "Email or password incorrect" });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-black min-h-screen w-full px-4 pt-8 text-amber-50">
      {message && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-md transition-all duration-300 ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {message.text}
        </div>
      )}

      <div className="w-full text-left mb-6">
        <h1 className="text-3xl font-bold text-[#e50914]">
          <Link href="/">NETMOVIES</Link>
        </h1>
      </div>

      <div className="w-full max-w-sm bg-black rounded-lg shadow-lg p-6 space-y-2">
        <h4 className="text-2xl font-bold pb-4 text-center">Sign in</h4>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            value={User.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-amber-50 bg-transparent placeholder:text-sm mb-2"
            type="text"
            placeholder="Email or mobile password"
          />

          <input
            name="password"
            value={User.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-amber-50 bg-transparent placeholder:text-sm mb-2"
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition font-semibold"
          >
            Sign in
          </button>

          <div className="text-center text-sm py-1">OR</div>

          <Link href="/component/Register">
            <p className="text-center underline hover:text-neutral-300 cursor-pointer text-sm mt-2">
              New to Netflix? Sign up now.
            </p>
          </Link>

          <label className="flex items-center space-x-3 text-sm text-white mt-2">
            <input
              type="checkbox"
              name="remember"
              checked={User.remember}
              onChange={handleChange}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded border-2 border-white bg-white peer-checked:bg-emerald-500 flex items-center justify-center transition">
              <svg
                className="w-3 h-3 text-black hidden peer-checked:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span>Remember me</span>
          </label>

          <p className="text-center underline hover:text-neutral-300 cursor-pointer text-sm mt-2">
            Forgot Password?
          </p>

          <div className="mt-4 text-xs text-center">
            <p>
              This page is protected by Google reCAPTCHA to ensure youre not a
              bot.
              {!isOpen && (
                <span
                  onClick={() => setIsOpen(true)}
                  className="underline text-blue-600 cursor-pointer ml-1"
                >
                  Learn more
                </span>
              )}
            </p>

            {isOpen && (
              <div className="mt-2 p-3 bg-gray-100 text-black rounded-md text-left">
                The information you submit will be processed by Google for
                security and spam prevention. Learn more at Google’s reCAPTCHA
                policy.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginMobile;
