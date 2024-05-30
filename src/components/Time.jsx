import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MadeBy from "./MadeBy";

function Time() {
  const [time, setTime] = useState([]);
  const [date, setDate] = useState("");
  const [timeDiff, setTimeDiff] = useState([]);

  useEffect(() => {
    document.title ="Time | Counter"
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

      const targetDate = new Date(2024, 9, 31);
      const diff = targetDate - currDate;

      const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const diffHrs = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const diffMins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const diffSecs = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeDiff([diffDays, diffHrs, diffMins, diffSecs]);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative h-full w-full text-white font-lexend-regular ">
      <div className="w-full flex p-10 items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-semibold text-zinc-600">time.co</h1>
        </Link>
        <Link to="/">
          <h1 className="text-md font-semibold text-zinc-600 hover:text-blue-500">
            Home
          </h1>
        </Link>
      </div>
      <div className="absolute w-3/4 h-[20vw] top-[50%] left-1/2 -translate-y-[50%] -translate-x-[50%] select-none ">
        <div className="time w-full h-[85%] flex items-center justify-between text-6xl px-20">
          <div className="hr h-full w-[19%] flex items-center justify-center text-zinc-600">
            <h1 className="glow">
              {timeDiff[0] < 10 ? "0" + timeDiff[0] : timeDiff[0]}{" "}
              <sub className="text-sm">(D)</sub>{" "}
            </h1>
          </div>
          <div className="text-3xl text-zinc-500">
            <h1>:</h1>
          </div>
          <div className="mn h-full w-[19%] flex items-center justify-center text-zinc-500">
            <h1 className="glow">
              {timeDiff[1] < 10 ? "0" + timeDiff[1] : timeDiff[1]}{" "}
              <sub className="text-sm">(H)</sub>
            </h1>
          </div>
          <div className="text-3xl text-zinc-500">
            <h1>:</h1>
          </div>
          <div className="sc h-full w-[19%] flex items-center justify-center text-zinc-400">
            <h1 className="glow">
              {timeDiff[2] < 10 ? "0" + timeDiff[2] : timeDiff[2]}{" "}
              <sub className="text-sm">(M)</sub>
            </h1>
          </div>
          <div className="text-3xl text-zinc-500">
            <h1>:</h1>
          </div>
          <div className="ms h-full w-[19%] flex items-center justify-center text-zinc-300">
            <h1 className="glow">
              {timeDiff[3] < 10 ? "0" + timeDiff[3] : timeDiff[3]}{" "}
              <sub className="text-sm">(S)</sub>
            </h1>
          </div>
        </div>
        <div className="date w-full h-[15%] flex items-center justify-end px-[10%]">
          <h1 className="text-sm text-zinc-100">untill 31/10/2024</h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <MadeBy />
      </div>
    </div>
  );
}

export default Time;
