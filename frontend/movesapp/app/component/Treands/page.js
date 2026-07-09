"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Overlay Modal Component
const OverlayModal = ({ onClose, movies, selectmove }) => {
  const modalRef = useRef(null);
  const [matched, setMatched] = useState(null);

  useEffect(() => {
    if (!selectmove || !movies.length) return;
    const found = movies.find((item) => item.id === selectmove.id);
    if (found) setMatched(found);
  }, [selectmove, movies]);

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
        rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden relative"
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

const Treands = () => {
  const [movies, setMovies] = useState([]);
  const [selectmove, setSelectMove] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=addee6445d15b77ab3230f8fafe13edd&page=${page}`
        );
        const data = await res.json();
        setMovies(data.results);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages); 
        // TMDB limits max pages to 500
      } catch (error) {
        console.error("Can't fetch data", error);
      }
    }
    getMovies();
  }, [page]);

  return (
    <div className="p-4 bg-black min-h-screen">
      <h1 className="text-4xl font-bold text-[#e50914]">
        <Link href="/"> NETMOVIES</Link>
      </h1>
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-red-300 mb-10">
        Trending Movies
      </h1>

      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/6 p-2 flex flex-col items-center"
            onClick={() => {
              setSelectMove(movie);
              setShowOverlay(true);
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title?.replace(/"/g, "&quot;") || "Movie poster"}
              width={120}
              height={200}
              className="rounded-md object-cover"
              unoptimized
            />
            <h4 className="text-sm mt-2 text-center text-white">
              {movie.title?.replace(/"/g, "&quot;")}
            </h4>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <Stack spacing={2}>
        <Pagination
  count={totalPages}
  page={page}
  onChange={(e, value) => setPage(value)}
  sx={{
    "& .MuiPaginationItem-root": {
      color: "white", // default numbers white
    },
    "& .Mui-selected": {
      backgroundColor: "#e50914", // Netflix red
      color: "white",
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "rgba(229,9,20,0.3)", // red hover effect
    },
  }}
/>

        </Stack>
      </div>

      {showOverlay && (
        <OverlayModal
          movies={movies}
          selectmove={selectmove}
          onClose={() => setShowOverlay(false)}
        />
      )}
    </div>
  );
};

export default Treands;
