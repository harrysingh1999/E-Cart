import React from "react";
import { Card } from "../ProductCard/Card";
import colorPot from "../../assets/Home/ColorPots.svg";
import Filters from "../Filters";

export default function ShopAll() {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-12 pt-24 md:pt-40 ">
        <Filters />
        <div className="px-2 col-span-10">
          <h1 className="text-2xl font-semibold text-center mb-6">Shop All</h1>
          <div className="flex flex-wrap justify-evenly">
            {Array.from({ length: 16 }).map((_, i) => {
              return (
                <div className="mb-4" key={crypto.randomUUID()}>
                  <Card
                    name="COLOR POTS"
                    price="₹ 3,200"
                    rating="1"
                    url={colorPot}
                    url2="https://india.purearth.asia/cdn/shop/files/C-LLP4G_2_900x.jpg?v=1716293148"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" text-center mt-10 bg-gray-200 py-8">
        <h2 className="text-2xl italic mb-3">Pure, Potent & Precious</h2>
        <p className="w-[50%] mx-auto">
          We offer high performance Ayurvedic formulations to nourish your skin
          & senses. Ethically sourced, fair trade and Leaping Bunny cruelty free
          approved.
        </p>
      </div>
    </>
  );
}
