import { Card } from "../ProductCard/Card";
import roseHip_Oil from "../../assets/Home/rosehip_Oil.svg";
import strobeLighter from "../../assets/Home/strobelighter.svg";

export default function VideoBeauty() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-10 lg:max-h-[600px] mt-6 md:mt-16">
        <div className="w-full max-h-[300px] sm:max-h-[500px] lg:max-h-[600px]">
          <video
            className="w-full h-full object-cover even:hover:not-sr-only"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/385a9ddafeb5471e82c558f710585ca5.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex justify-center lg:items-end">
          <div className="p-4 lg:p-0">
            <p
              style={{ fontWeight: "100", fontFamily: "jost" }}
              className="text-2xl md:text-4xl italic text-center"
            >
              beauty hall of fame
            </p>
            <p className=" uppercase text-center text-xl my-5">
              PURE · POTENT · PRECIOUS
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card
                name="SITAR CRÈME STROBELIGHTER"
                price="₹ 1,800"
                rating="40"
                url={strobeLighter}
                url2="https://india.purearth.asia/cdn/shop/files/Sitara1_900x.png?v=1704796412"
              />
              <Card
                name="WILD ROSEHIP SUPERCRITICAL"
                price="₹ 7,000"
                rating="12"
                url={roseHip_Oil}
                url2="https://india.purearth.asia/cdn/shop/files/rosehip_900x.jpg?v=1689922031"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
