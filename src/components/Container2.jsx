export default function Container2({ active }) {
  return (
    <div
      className={`
        h-60 bg-white rounded-lg shadow-md p-4 flex flex-col justify-center
        transition-all duration-300 ease-in-out
        hover:bg-gray-100 hover:shadow-xl hover:scale-105
        ${active ? "scale-105 shadow-xl" : ""}
      `}
    >
      <h2 className="text-lg font-semibold mb-2 transition-colors duration-300 
                     hover:text-gray-900 text-black">
        About This Dashboard
      </h2>

      <p className="text-sm text-gray-700 leading-relaxed transition-colors duration-300 
                    hover:text-gray-800">
        This responsive layout adapts seamlessly across desktop and mobile devices.
        It uses modern CSS techniques like Flexbox and Grid to ensure consistency,
        readability, and a smooth user experience.
      </p>
    </div>
  );
}
