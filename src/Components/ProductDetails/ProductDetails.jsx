import colorPot from "../../assets/Home/ColorPots.svg";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import Button from "../Button";
import Reviews from "../Reviews/Reviews";
import { NavLink } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div className="pt-28 md:pt-[180px] px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-5 lg:gap-10 ">
        <div className="">
          <img src={colorPot} alt="color_Pot" className="w-full" />
        </div>
        <div className="">
          <div className="upperDetails">
            <div className="flex items-center">
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
              <span>COLOR POTS</span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-2xl mt-2">COLOR POTS</p>
              <FaRegHeart />
            </div>
            <div className="flex items-center justify-between border-b border-black/30 mb-4">
              <p>₹ 3,200</p>
              <div className="my-3 flex items-center justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="me-1" />
                <span>2 review</span>
              </div>
            </div>

            <div>
              <p>(MRP includes Of All Taxes)</p>

              <Button title="ADD TO BAG" />
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                {" "}
                <MdOutlineLocalShipping className="text-2xl" />
                <p className="ms-2 text-sm font-thin"> Free Shipping *</p>
              </div>
              <div className="flex items-center ms-6">
                {" "}
                <BsCash className="text-2xl" />
                <p className="ms-2 text-sm font-thin">COD Available</p>
              </div>
            </div>
          </div>
          {/* Lower Details  Part*/}
          <div className="mt-4">
            <h2 className="text-lg">COLOR POTS</h2>
            <p className="my-4">
              Our cult faves- LAALI + SITARA now as a Gorgeous Gift Set!
            </p>
            <p className="font-semibold">Laali Paint Pot Description</p>
            <div>
              <p className="my-2">
                Laali! An intensely pigmented, luscious matte satin red!
                Composed with ECOCERT certified and cold pressed certified
                organic butters and oils. Complements all skin tones!
              </p>
              <p>
                Inspired by ‘sindoor’ a deep vermilion red, ceremonially worn by
                women in India. A non drying, buildable, long wear formula rich
                in Vitamin E and EFAs. Sensuous and luxurious, with fragrant
                notes of mood-lifting Kashmir lavender and Himalayan deodar
                cedarwood.
              </p>
              <p className="my-2">
                Vegan. It is preservative-free and formulated with certified
                organic, partially fermented cacao butter, coconut and castor
                oils from farms in South India. Sitara means ‘morning star’ in
                the Sanskrit-Indo-Aryan language and lends a no-makeup subtle
                sheen that can also be amped up for fabulous drama and color
                payoff!
              </p>
              <p>
                Handmade with love in India Shelf Life: 24 Months (from date of
                Mfg.)
              </p>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
}
