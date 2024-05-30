import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MadeBy from "./MadeBy";

function Home() {
  const [time, setTime] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currDate = new Date();
      const hr = currDate.getHours();
      const mn = currDate.getMinutes();
      const sc = currDate.getSeconds();
      const ms = currDate.getMilliseconds();
      const day = String(currDate.getDate()).padStart(2, "0");
      const month = String(currDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = currDate.getFullYear();
      const dateStr = `${day}/${month}/${year}`;
      setDate(dateStr);
      setTime([hr, mn, sc, ms]);
    }, 1);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-full w-full text-white font-lexend-regular ">
      <div className="w-full flex p-10 items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-semibold text-zinc-600">time.co</h1>
        </Link>
        <Link to="/time">
          <h1 className="text-md font-semibold text-zinc-600 hover:text-blue-500">
            Time
          </h1>
        </Link>
      </div>
      <div className="absolute w-3/4 h-[20vw] top-[50%] left-1/2 -translate-y-[50%] -translate-x-[50%] select-none ">
        <div className="time w-full h-[85%] flex items-center justify-between text-6xl px-20">
          <div className="hr h-full w-[19%] flex items-center justify-center text-zinc-600">
            <h1 className="glow">{time[0] < 10 ? "0" + time[0] : time[0]}</h1>
          </div>
          <div className="text-3xl text-zinc-500">
            <h1>:</h1>
          </div>
          <div className="mn h-full w-[19%] flex items-center justify-center text-zinc-500">
            <h1 className="glow">{time[1] < 10 ? "0" + time[1] : time[1]}</h1>
          </div>
          <div className="text-3xl text-zinc-500">
            <h1>:</h1>
          </div>
          <div className="sc h-full w-[19%] flex items-center justify-center text-zinc-400">
            <h1 className="glow">{time[2] < 10 ? "0" + time[2] : time[2]}</h1>
          </div>
          <div className="text-3xl text-zinc-500">
            <h1>:</h1>
          </div>
          <div className="ms h-full w-[19%] flex items-center justify-center text-zinc-300">
            <h1 className="glow">{time[3]}</h1>
          </div>
        </div>
        <div className="date w-full h-[15%] flex items-center justify-end px-[10%]">
          <h1 className="text-sm text-zinc-400">{date}</h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <MadeBy />
      </div>
    </div>
  );
}

export default Home;
