import { useState } from "react";

export default function Container5({ active }) {
  const [message, setMessage] = useState("");

  return (
    <div
      className={`
        h-60 w-full
        bg-white
        rounded-xl shadow-md
        p-4
        flex flex-col justify-center items-center gap-4
        transform transition-transform duration-300
        hover:scale-105 hover:shadow-lg
        ${active ? "scale-105 shadow-xl" : "scale-100"}
      `}
    >
      <h3 className="text-lg font-semibold text-gray-800">
        Action Buttons
      </h3>

      <div className="flex gap-4">
        <button
          onClick={() => setMessage("Button A clicked")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Button A
        </button>

        <button
          onClick={() => setMessage("Button B clicked")}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Button B
        </button>
      </div>

      {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
    </div>
  );
}
