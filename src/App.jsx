
import Data from "./components/Data";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <div className="flex flex-col w-[1216px] min-h-screen">
        <Header />
        <div className="flex-grow bg-neutral-50 p-8">
          <Data/>
        </div>
      </div>
    </div>
  );
}

export default App;
