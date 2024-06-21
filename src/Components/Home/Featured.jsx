import React from "react";
import FeaturedImg from "../../assets/Home/Featured.svg";

export default function Featured() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-10">
      <h1 className="italic text-center text-2xl font-thin my-4">
        as Featured in
      </h1>
      <img src={FeaturedImg} alt="featured" />
    </div>
  );
}
