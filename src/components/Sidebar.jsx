export default function Sidebar({ sidebarOpen, onContainerClick }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64
        bg-white shadow-lg p-4
        transform transition-transform duration-300
        md:static md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        z-50
        flex flex-col
      `}
    >
      <ul className="space-y-4 font-medium text-black">
        <li onClick={() => onContainerClick(1)} className="cursor-pointer hover:text-blue-600">Container 1</li>
        <li onClick={() => onContainerClick(2)} className="cursor-pointer hover:text-blue-600">Container 2</li>
        <li onClick={() => onContainerClick(3)} className="cursor-pointer hover:text-blue-600">Container 3</li>
        <li onClick={() => onContainerClick(4)} className="cursor-pointer hover:text-blue-600">Container 4</li>
        <li onClick={() => onContainerClick(5)} className="cursor-pointer hover:text-blue-600">Container 5</li>
        <li onClick={() => onContainerClick(6)} className="cursor-pointer hover:text-blue-600">Container 6</li>
      </ul>

      <div className="flex-grow"></div>

      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full">
        Logout
      </button>
    </aside>
  );
}
