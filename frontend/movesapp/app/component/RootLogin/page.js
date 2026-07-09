
"use client";
import { useEffect, useState } from "react";

import LoginMobile from "../LoginmMobil/page";
import Login from "../Login/page";

const RootLogin = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind"s md breakpoint
    };

    checkScreen(); // Check on load
    window.addEventListener("resize", checkScreen); // Update on resize

    return () => {
      window.removeEventListener("resize", checkScreen); // Cleanup
    };
  }, []);

  return (
    <div>
      {isMobile ? <LoginMobile /> : <Login />}
    </div>
  );
};

export default RootLogin;


