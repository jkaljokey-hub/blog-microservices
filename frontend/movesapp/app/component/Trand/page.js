"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Overlay Modal Component
const OverlayModal = ({ onClose, Trend, selectmove }) => {
  const modalRef = useRef(null);
  const [matched, setMatched] = useState(null);

  useEffect(() => {
    if (!selectmove || !Trend.length) return;
    const found = Trend.find((item) => item.id === selectmove.id);
    if (found) setMatched(found);
  }, [selectmove, Trend]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="overlay-larg fixed inset-0 bg-opacity-60 z-40" />
      <div className="container-larg-ads fixed inset-0 z-50 flex justify-center items-center">
        <div
          ref={modalRef}
          className="text-amber-50 bg-radial-[at_50%_50%] from-red-950 to-zinc-900 to-75% 
          rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-800 text-2xl"
          >
            ×
          </button>
          {matched && (
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/w500${matched.poster_path}`}
                alt={matched.title}
                width={500}
                height={300}
                className="w-full object-cover h-64 sm:h-72 md:h-80"
                unoptimized
              />
              <h4 className="text-xl font-bold mt-4 p-2">
                {matched.title?.replace(/"/g, "&quot;")}
              </h4>
              <p className="text-sm mt-2 p-2">{matched.overview}</p>
              <div className="text-center">
                <Link href="/component/payment">
                  <button className="mb-3 bg-red-600 text-white px-3 py-3 w-1/2 cursor-pointer rounded-md hover:bg-red-700 transition font-semibold">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Trand = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [massge, setmassge] = useState("");
  const [Trend, setTrend] = useState([]);
  const [selectmove, setSelectMove] = useState(null);

  useEffect(() => {
    async function getTrend() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=addee6445d15b77ab3230f8fafe13edd"
        );
        const data = await res.json();
        setTrend(data.results);
      } catch (error) {
        setmassge("Fetching Movies failed. Review your internet connection.");
      }
    }

    getTrend();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-amber-50 mb-4">
        <Link href="/component/Treands" className="px-2 py-1 inline-block">
          Trending now
        </Link>
      </h1>

      {Trend.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {Trend.slice(15, 21).map((movie) => (
            <div
              key={movie.id}
              className="cardSwiper w-48 cursor-pointer transform hover:scale-105 transition"
              onClick={() => {
                setSelectMove(movie);
                setShowOverlay(true);
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
                unoptimized
              />
              <h4 className="text-white mt-2 text-center">
                {movie.title?.replace(/"/g, "&quot;")}
              </h4>
            </div>
          ))}
        </div>
      ) : (
        massge && <p className="text-red-400 text-center mt-4">{massge}</p>
      )}

      {showOverlay && (
        <OverlayModal
          Trend={Trend}
          selectmove={selectmove}
          onClose={() => setShowOverlay(false)}
        />
      )}
    </div>
  );
};

export default Trand;
