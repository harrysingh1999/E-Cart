import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../Utils/constant";

export default function HeroSection() {
  return (
    <>
      <Slider
        className="h-95vh overflow-hidden md:overflow-y-auto lg:overflow-hidden"
        {...settings}
      >
        <div className="w-full relative h-[95vh] overflow-x-hidden">
          <img
            className="w-full h-full object-cover "
            src="https://www.purearth.asia/cdn/shop/files/NAYAN_WEBSITE_BANNER_NEW_2200x.png?v=1717678564"
            alt="slide-img-2"
          />
          <div className=" text-white absolute bottom-0 md:bottom-5 lg:bottom-14 left-3 md:left-8 lg:left-16 w-96">
            <p
              style={{ textShadow: "2px 2px 4px black" }}
              className="text-3xl md:text-4xl lg:text-5xl  "
            >
              15% off sitewide
              <br /> exclusive offer
            </p>
            <div className=" leading-7 mt-4">
              <p
                style={{ textShadow: "2px 2px 4px black" }}
                className=" uppercase"
              >
                code: wed15
                <br />
                june: 5-10
              </p>
              <button className="uppercase bg-white text-black py-2 px-9 my-7 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[95vh]">
          <img
            className="w-full h-full object-cover"
            src="https://www.purearth.asia/cdn/shop/files/purearth-cassia-homepage-desk-banner-12-09-22-01_1400x.jpg?v=1662962621"
            alt="slide-img-2"
          />
          <div className=" text-white absolute bottom-0 md:bottom-5 lg:bottom-14 left-3 md:left-8 lg:left-16 w-96">
            <p
              style={{ textShadow: "2px 2px 4px black" }}
              className="text-3xl md:text-4xl lg:text-5xl  "
            >
              a cult bestseller
              <br /> vit c + ha
            </p>
            <div className=" leading-7 mt-4">
              <p
                style={{ textShadow: "2px 2px 4px black" }}
                className=" uppercase"
              >
                cassia Brightening serum
              </p>
              <button className=" invisible uppercase bg-white text-black py-2 px-9 my-7 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[95vh]">
          <img
            className="w-full h-full object-cover"
            src="https://www.purearth.asia/cdn/shop/files/12345_fa8dc355-9e1f-4ea8-aca2-a0d54f73ccea_2200x.png?v=1707197678"
            alt=""
          />
          <div className=" text-white absolute bottom-0 md:bottom-5 lg:bottom-14 left-3 md:left-8 lg:left-16 w-96">
            <p
              style={{ textShadow: "2px 2px 4px black" }}
              className="text-3xl md:text-4xl lg:text-5xl  "
            >
              ayurvedic supplements
            </p>
            <div className=" leading-7 mt-4">
              <p
                style={{ textShadow: "2px 2px 4px black" }}
                className=" uppercase"
              >
                Exclusive Formula
              </p>
              <button className="uppercase bg-white text-black py-2 px-9 my-7 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[95vh]">
          <img
            className="w-full h-full object-cover"
            src="https://www.purearth.asia/cdn/shop/files/Purearth_wildseaberry_orange_oil_whitebackground_2200x.jpg?v=1691645002"
            alt=""
          />
          <div className=" text-white absolute bottom-0 md:bottom-5 lg:bottom-14 left-3 md:left-8 lg:left-16 w-96">
            <p
              style={{ textShadow: "2px 2px 4px black" }}
              className="text-3xl md:text-4xl lg:text-5xl  "
            >
              purity
              <br />
              <i>born</i> in the
              <br />
              himalayas!
            </p>
            <div className=" leading-7 mt-4">
              <p
                style={{ textShadow: "2px 2px 4px black" }}
                className=" uppercase"
              >
                Cruelty free Beauty
              </p>
              <button className="uppercase bg-white text-black py-2 px-9 my-7 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[95vh]">
          <img
            className="w-full h-full object-cover"
            src="https://www.purearth.asia/cdn/shop/files/Dhauladhar_Brand_Mountain_2200x.jpg?v=1683020561"
            alt=""
          />
          <div className=" text-white absolute bottom-0 md:bottom-5 lg:bottom-14 left-3 md:left-8 lg:left-16 w-96">
            <p
              style={{ textShadow: "2px 2px 4px black" }}
              className="text-3xl md:text-4xl lg:text-5xl  "
            >
              purity
              <br />
              <i>born</i> in the
              <br />
              himalayas!
            </p>
            <div className=" leading-7 mt-4">
              <p
                style={{ textShadow: "2px 2px 4px black" }}
                className=" uppercase"
              >
                Cruelty free Beauty
              </p>
              <button className="uppercase bg-white text-black py-2 px-9 my-7 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
