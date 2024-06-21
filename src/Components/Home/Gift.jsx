import React from "react";
import giftImg from "../../assets/Home/Gift.svg";
import Button from "../Button";

export default function Gift() {
  return (
    <div className=" px-10 md:px-0 container grid place-items-center gap-5 md:grid-cols-2 items-center md:w-[50%] mx-auto">
      <img src={giftImg} alt="gift_Icon" />
      <div className="flex flex-col items-center md:items-start ms-2">
        <p>free gift with purchase (gwp)</p>
        <p className="mt-2 mb-4 text-xs md:text-base">tiny treats! one free deluxe sample with orders ₹7,000+</p>
        <Button title="SHOP NOW" />
      </div>
    </div>
  );
}
