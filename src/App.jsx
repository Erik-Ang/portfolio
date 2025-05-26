import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
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
