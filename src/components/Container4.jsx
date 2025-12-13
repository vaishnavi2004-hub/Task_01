export default function Container4({ active }) {
  return (
    <div
      className={`
        h-60 w-full
        bg-white
        rounded-xl shadow-md
        p-4
        flex flex-col justify-center
        transform transition-transform duration-300
        hover:scale-105 hover:shadow-lg
        ${active ? "scale-105 shadow-xl" : "scale-100"}
      `}
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-800">
        Static Information
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        This section displays static content such as text, images, or a combination
        of both. It is designed to remain unchanged and provides important
        information to users in a clear and readable format.
      </p>
    </div>
  );
}
