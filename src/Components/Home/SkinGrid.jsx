import React from "react";
import model_1 from "../../assets/Home/Model_1.svg";
import model_2 from "../../assets/Home/Model_2.svg";
import model_3 from "../../assets/Home/Model_3.svg";
import model_4 from "../../assets/Home/Model_4.svg";

export default function SkinGrid() {
  return (
    <div className="pt-6 ">
      <div>
        <h1 className="text-3xl italic">Shop by Skin Condition</h1>
        <p className="text-xs my-4">A GUIDE TO PUREARTH RITUALS</p>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 place-items-center">
        <div className=" relative">
          <img src={model_1} alt="model1" className="w-72" />
          <div className=" absolute bottom-0 w-full text-center text-white text-sm md:text-balance italic px-3 py-1">
            <p className=" ">ACENIC & OILY. </p>
            <p>COMBINATION & CONGESTED</p>
          </div>
        </div>
        <div className=" relative">
          <img src={model_2} alt="model2" className="w-72" />
          <div className=" absolute bottom-0 w-full text-center text-white text-sm md:text-balance italic px-3 py-1">
            <p className=" ">ACENIC & OILY. </p>
            <p>COMBINATION & CONGESTED</p>
          </div>
        </div>
        <div className=" relative">
          <img src={model_3} alt="model3" className="w-72" />

          <div className=" absolute bottom-0 w-full text-center text-white text-sm md:text-balance italic px-3 py-1">
            <p className=" ">ACENIC & OILY. </p>
            <p>COMBINATION & CONGESTED</p>
          </div>
        </div>
        <div className=" relative">
          <img src={model_4} alt="model4" className="w-72" />
          <div className=" absolute bottom-0 w-full text-center text-white text-sm md:text-balance italic px-3 py-1">
            <p className=" ">ACENIC & OILY. </p>
            <p>COMBINATION & CONGESTED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
