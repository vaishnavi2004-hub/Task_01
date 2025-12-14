import { useState } from "react";

const images = Object.values(
  import.meta.glob("../assets/*.{jpg,png,jpeg}", {
    eager: true,
    import: "default",
  })
);

export default function Container3({ active }) {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    <div
      className={`
        h-60 w-full bg-white
        rounded-xl overflow-hidden
        shadow-md
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:shadow-xl
        ${active ? "ring-2 ring-black/20" : ""}
      `}
    >
      <div className="relative h-36 flex items-center justify-center bg-gray-100">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="h-full w-full object-cover border-2 border-black/40"
        />

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     bg-black/60 px-3 py-1 rounded-full
                     text-white font-bold
                     hover:bg-black transition"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     bg-black/60 px-3 py-1 rounded-full
                     text-white font-bold
                     hover:bg-black transition"
        >
          ›
        </button>
      </div>

      <div className="h-24 p-3 flex items-center justify-center">
        <p className="text-sm font-bold text-gray-800 tracking-wide">
          IMAGE SLIDER
        </p>
      </div>
    </div>
  );
}
