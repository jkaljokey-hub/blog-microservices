"use client";
import { useEffect, useState } from "react";
import Trand from "../Trand/page";
import TrandMobile from "../TrandMobile/page";

const RootTrand = () => {
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
      {isMobile ? <TrandMobile /> : <Trand />}
    </div>
  );
};

export default RootTrand;
