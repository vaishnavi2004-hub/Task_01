import { useState } from "react";

// Automatically import all images from assets folder
const images = Object.values(
  import.meta.glob("../assets/*.{jpg,png,jpeg}", { eager: true, import: "default" })
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
        h-60 w-full
        rounded-xl shadow-lg
        overflow-hidden
        relative
        transition-transform duration-300 ease-in-out
        hover:scale-105
        ${active ? "scale-105 shadow-xl" : "scale-100"}
      `}
    >
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="h-full w-full object-cover transition-transform duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2
                   bg-black/40 px-3 py-1 rounded-full
                   hover:bg-black text-white transition-colors duration-200"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2
                   bg-black/40 px-3 py-1 rounded-full
                   hover:bg-black text-white transition-colors duration-200"
      >
        ›
      </button>
    </div>
  );
}
