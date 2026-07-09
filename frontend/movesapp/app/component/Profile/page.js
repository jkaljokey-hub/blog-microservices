"use client";

import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [firstChar, setFirstChar] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
      setFirstChar(storedUser.firstname?.charAt(0).toUpperCase() || "");
    }
  }, []);

  return (
    <div className="text-white flex flex-col items-center justify-center mt-2">
      {/* Profile Circle with Hover Group */}
      <div className="relative group">
        <div className="cursor-pointer bg-black text-white rounded-full flex items-center justify-center w-15 h-15 transition hover:scale-105 duration-200">
          <h1 className="text-3xl font-bold">{firstChar}</h1>
        </div>

        {/* Hidden Details on Hover */}
        {user && (
          <div className="absolute top-15 left-1/2 -translate-x-1/2 bg-black bg-opacity-90 text-white rounded-md p-4 shadow-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 z-50">
            <h2 className="text-lg font-semibold">{user.firstname} {user.lastname}</h2>
            <p className="text-sm text-gray-300">{user.email}</p>
            <p className="text-sm text-gray-400">{user.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
