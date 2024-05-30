import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Time from "./components/Time";

function App() {
  return (
    <div className=" h-screen w-screen bg-zinc-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </div>
  );
}

export default App;
