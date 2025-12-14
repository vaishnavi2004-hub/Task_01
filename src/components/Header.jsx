export default function Header({ toggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50
      bg-white/30 backdrop-blur-lg
      shadow-[0_4px_15px_rgba(0,0,0,0.4)]
      flex items-center justify-between px-6">

      <h1 className="text-xl font-extrabold text-black">Responsive Dashboard</h1>
  <button
  onClick={toggleSidebar}
  className="md:hidden text-2xl font-bold text-black"
>
  ☰
</button>

    </header>
  );
}
