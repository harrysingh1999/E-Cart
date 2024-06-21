import React from "react";

export default function Button({ title, handleClick }) {
  return (
    <>
      <button
        className="bg-black w-full text-white text-center my-4 py-1 md:py-2 rounded-md hover:bg-white transition 
      hover:text-black border border-black"
        onClick={handleClick}
      >
        <span className="text-xs md:text-base">{title}</span>
      </button>
    </>
  );
}
