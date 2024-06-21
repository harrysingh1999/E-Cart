import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MyButton } from "../ui/MyButton";
import ReviewForm from "./ReviewForm";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaRegShareFromSquare } from "react-icons/fa6";

export default function Reviews() {
  const [writeReview, setWriteReview] = useState(false);
  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl mb-4">Customer Reviews</h1>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>5.0 ⭐⭐⭐⭐⭐</p>
          <p>Based on 2 Reviews</p>
        </div>

        <div onClick={() => setWriteReview((prevState) => !prevState)}>
          <MyButton>
            <FaRegEdit className="me-2" /> Write a Review
          </MyButton>
        </div>
      </div>
      <div className="mt-4">
        <span className="border-b-2 border-black">Reviews 2</span>
        {writeReview && <ReviewForm />}
        <div className="">
          <div className="text-end flex justify-end">
            <div className=" border rounded-sm border-gray-400"></div>
          </div>
          <div className="px-5 md:px-20">
            <div className="text-end flex justify-end">
              <div className=" border rounded-sm border-gray-400">
                <select name="">
                  <option value="sort">Sort</option>
                  <option value="Most Recent">Most Recent</option>
                  <option value="Highest Rating">Highest Rating</option>
                  <option value="Lowest Rating">Lowest Rating</option>
                  <option value="Most Helpful">Most Helpful</option>
                </select>
              </div>
            </div>
            <div className="grid place-items-center">
              <div className="grid items-center sm:grid-cols-2 p-4 gap-5">
                <div className=" text-sm border border-gray-400 p-4 max-w-60">
                  <div className="text-xl flex">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                  <p className=" font-semibold">Sharada S.</p>
                  <div className="w-full h-44 overflow-y-auto">
                    <div className="flex gap-2 py-2 items-center">
                      <span className=" font-semibold">Beautiful</span>
                      <FaHeart />
                    </div>
                    <p className="py-5">Love the colour!</p>
                    <p className=" mt-72 mb-3">Laali-Lip Paint Pot</p>
                  </div>
                  <div className="mx-3 flex gap-1 text-xs md:text-base items-center">
                    <FaRegShareFromSquare />
                    <p>Share</p>
                  </div>
                  <div className="flex gap-1 text-xs md:text-base items-center">
                    <p className=" w-max md:me-2 ">Was this helpful?</p>
                    <BiSolidLike /> 0
                    <BiSolidDislike /> 0
                  </div>
                </div>

                <div className=" text-sm border border-gray-400 p-4 max-w-60">
                  <div className="text-xl flex">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                  <p className=" font-semibold">Manjari M.</p>
                  <div className="w-full h-44 overflow-y-auto">
                    <div className="flex gap-2 py-2 items-center">
                      <span className=" font-semibold">
                        Wow! Havender and cedarwood!
                      </span>
                    </div>
                    <p className="py-5">Beautiful</p>
                    <p className=" mt-72 mb-3">Laali-Lip Paint Pot</p>
                  </div>
                  <div className="mx-3 flex gap-1 text-xs md:text-base items-center">
                    <FaRegShareFromSquare />
                    <p>Share</p>
                  </div>
                  <div className="flex gap-1 text-xs md:text-base items-center">
                    <p className=" w-max md:me-2 ">Was this helpful?</p>
                    <BiSolidLike /> 0
                    <BiSolidDislike /> 0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center mt-10 bg-gray-200 py-8">
          <h2 className="text-2xl italic mb-3">Pure, Potent & Precious</h2>
          <p className="w-[50%] mx-auto">
            We offer high performance Ayurvedic formulations to nourish your
            skin & senses. Ethically sourced, fair trade and Leaping Bunny
            cruelty free approved.
          </p>
        </div>
      </div>
    </div>
  );
}
