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
        flex flex-col items-center
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${active ? "ring-2 ring-black/20" : ""}
      `}
    >
      <div className="flex w-full gap-2 mb-4">
        <button
          onClick={() => setMessage("Button A clicked")}
          className="flex-1 px-3 py-2 bg-blue-600 text-white
                     rounded-md hover:bg-blue-700 transition font-semibold"
        >
          A
        </button>

        <button
          onClick={() => setMessage("Button B clicked")}
          className="flex-1 px-3 py-2 bg-green-600 text-white
                     rounded-md hover:bg-green-700 transition font-semibold"
        >
          B
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        {message ? (
          <p className="text-sm text-gray-700 font-medium">{message}</p>
        ) : (
          <p className="text-sm text-gray-400">Click a button</p>
        )}
      </div>
    </div>
  );
}
