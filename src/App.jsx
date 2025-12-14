import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";
import Container5 from "./components/Container5";
import Container6 from "./components/Container6";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeContainer, setActiveContainer] = useState(null);

  const handleContainerClick = (num) => {
    setActiveContainer((prev) => (prev === num ? null : num));
    setSidebarOpen(false);
  };

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex pt-20 h-full relative">
        <Sidebar
          sidebarOpen={sidebarOpen}
          onContainerClick={handleContainerClick}
        />

       
        <main className="flex-1 overflow-y-auto p-4 relative">
          <div
            className={`
              grid gap-4 md:grid-cols-3
              transition-all duration-300
              ${activeContainer ? "blur-sm pointer-events-none" : ""}
            `}
          >
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Container5 />
            <Container6 />
          </div>

         
          {activeContainer && (
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <div className="relative w-full max-w-md">

             
                <button
                  onClick={() => setActiveContainer(null)}
                  className="absolute -top-3 -right-3 z-50
                             bg-black text-white
                             w-8 h-8 rounded-full
                             flex items-center justify-center
                             hover:bg-red-600 transition"
                >
                  ✕
                </button>

                {activeContainer === 1 && <Container1 active />}
                {activeContainer === 2 && <Container2 active />}
                {activeContainer === 3 && <Container3 active />}
                {activeContainer === 4 && <Container4 active />}
                {activeContainer === 5 && <Container5 active />}
                {activeContainer === 6 && <Container6 active />}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
