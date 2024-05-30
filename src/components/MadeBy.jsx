import React from "react";

function MadeBy() {
  return (
    <div className="w-full h-[10vh] cursor-pointer">
      <h3 className="font-lylas text-xs text-zinc-500">
        made by{" "}
        <span
          onClick={() => window.open("https://github.com/ron-42", "_blank")}
          className="hover:text-blue-600"
        >
          @ron-42
        </span>{" "}
      </h3>
    </div>
  );
}

export default MadeBy;
