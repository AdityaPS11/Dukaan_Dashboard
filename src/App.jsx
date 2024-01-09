
import Data from "./components/Data";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="flex min-h-screen w-[100vw]">
      <SidePanel />
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <div className="flex-grow bg-neutral-50 p-8 pl-12">
          <Data/>
        </div>
      </div>
    </div>
  );
}

export default App;
