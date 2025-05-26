import "./App.css";
import HomePage from "./components/HomePage.jsx";
import Experience from "./components/Experience.jsx";
import Workflow from "./components/Workflow.jsx";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-col overflow-y-auto">
        <div id="homepage">
          <HomePage />
        </div>
        <div id="workflow">
          <Workflow />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
