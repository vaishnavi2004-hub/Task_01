import { useState, useEffect } from "react";

export default function Container6({ active }) {
  const slides = [
    "Slide 1: Welcome to App",
    "Slide 2: How can I help you ?",
    "Slide 3: Thank You for visiting",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className={`
        h-60 w-full
        bg-gradient-to-r from-purple-400 via-pink-400 to-red-400
        rounded-xl shadow-md
        p-4
        flex flex-col justify-center items-center
        text-white
        relative
        transform transition-transform duration-300
        hover:scale-105 hover:shadow-xl
        ${active ? "scale-105 shadow-xl" : "scale-100"}
      `}
    >
      <h3 className="text-lg font-bold mb-2">Animated Slider</h3>

      <p
        key={current} // ensures transition triggers on slide change
        className="text-center text-md transition-opacity duration-500 opacity-0 animate-fadeIn"
      >
        {slides[current]}
      </p>

      

      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-fadeIn { animation: fadeIn 0.5s forwards; }
        `}
      </style>
    </div>
  );
}
