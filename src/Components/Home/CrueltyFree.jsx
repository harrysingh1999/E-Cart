import React from "react";
import crueltyFree_Img from "../../assets/Home/crueltyFree_img.svg";
import crueltyFree_logo from "../../assets/Home/crueltyFree_logo.svg";

export default function CrueltyFree() {
  return (
    <>
      <div className=" grid gap-5 md:grid-cols-2 mt-8">
        <div>
          <img src={crueltyFree_Img} className="" alt="crueltyFree_Img" />
        </div>
        <div className="flex flex-col items-center justify-around  ">
          <p className=" md:w-[70%] ">
            FAIR TRADE, SUSTAINABLY WILD HARVESTED OR CULTIVATED ORGANICALLY,
            OUR RARE & PRECIOUS BOTANICALS COME FROM WOMEN FARMERS AND
            GRASSROOTS PRODUCERS IN THE HIGH ALTITUDE HIMALAYAS. WE ARE IN
            REVERENT PURSUIT OF HEROINE INGREDIENTS THAT ACTIVELY WORK FOR YOUR
            SKIN - OFFERING NUTRIENT RICH RESULTS. GENTLE ON THE EARTH AND ITS
            CREATURES, OUR LINE IS LEAPING BUNNY CRUELTY FREE.
          </p>
          <img src={crueltyFree_logo} className="w-32" alt="crueltyFree_Icon" />
        </div>
      </div>
    </>
  );
}
