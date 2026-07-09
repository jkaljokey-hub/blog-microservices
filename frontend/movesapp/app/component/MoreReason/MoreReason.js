"use client";

import Image from "next/image";

const features = [
  {
    title: "Enjoy on your TV",
    text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "https://img.icons8.com/?size=100&id=ZJ4VRrHw2maQ&format=png&color=000000",
  },
  {
    title: "Download your shows to watch offline",
    text: "Save your favorites easily and always have something to watch.",
    icon: "https://img.icons8.com/?size=100&id=108642&format=png&color=000000",
  },
  {
    title: "Watch everywhere",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "https://img.icons8.com/?size=100&id=17326&format=png&color=000000",
  },
  {
    title: "Create profiles for kids",
    text: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: "https://img.icons8.com/?size=100&id=4hXMm3zO1vu5&format=png&color=000000",
  },
];

export default function MoreReason() {
  return (
    <section className="bg-black text-white px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10">More Reasons to Join</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 rounded-lg p-6 flex items-start gap-4 shadow-lg hover:scale-[1.02]"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={56}
              height={56}
              className="object-contain"
              unoptimized
            />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
