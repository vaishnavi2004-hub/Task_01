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
  };

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {/* HEADER */}
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* BODY */}
      <div className="flex pt-20 h-full">
        {/* SIDEBAR */}
        <Sidebar sidebarOpen={sidebarOpen} onContainerClick={handleContainerClick} />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Container1 active={activeContainer === 1} />
            <Container2 active={activeContainer === 2} />
            <Container3 active={activeContainer === 3} />
            <Container4 active={activeContainer === 4} />
            <Container5 active={activeContainer === 5} />
            <Container6 active={activeContainer === 6} />
          </div>
        </main>
      </div>
    </div>
  );
}
