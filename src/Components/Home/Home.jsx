import React from "react";
import SkinGrid from "./SkinGrid";
import CrueltyFree from "./CrueltyFree";
import MostLoved from "./MostLoved";
import Featured from "./Featured";
import Gift from "./Gift";
import HeroSection from "../Header/HeroSection";
import VideoBeauty from "../VideoComponent/VideoBeauty";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="px-4 md:px-10">
        <VideoBeauty />
        <SkinGrid />
        <CrueltyFree />
        <MostLoved />
        <Featured />
        <Gift />
      </div>
    </>
  );
}
