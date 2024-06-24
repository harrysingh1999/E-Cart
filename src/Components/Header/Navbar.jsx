import { BsRecordCircle } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FiCircle } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
import { NavLink } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import Cart from "../Cart/Cart";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import useScroll from "@/Utils/CustomHooks/useScroll";

export const Navbar = () => {
  const [menu, setMenu] = useState("hidden");
  const [scrolled, setScrolled] = useState(null);

  useScroll(setScrolled);

  return (
    <>
      <nav
        className={`${
          scrolled
            ? "bg-white text-black shadow-lg border-b border-black/40"
            : "bg-transparent text-white"
        } fixed w-full top-0 left-0 z-10`}
      >
        <div className="py-1.5 flex justify-center items-center w-full">
          <BsRecordCircle className="text-xl me-2" />
          <BiDollar className="text-sm" />
          <span className="text-sm"> USD</span>
          <MdOutlineHorizontalRule className="mx-3" />
          <FiCircle className="text-xl me-2" />
          <MdCurrencyRupee />
          <span className="text-sm">INR</span>
        </div>
        <div className="mx-auto grid grid-cols-12 px-2 md:px-8 py-2">
          <div className="flex items-center justify-start col-span-4">
            <FaBars
              className="text-2xl ms-2 md:ms-0 me-2 lg:hidden cursor-pointer"
              onClick={() => setMenu("block")}
            />
          </div>
          <div className="flex justify-center items-center col-span-4">
            <p className="flex items-center w-max">
              <span className="w-max text-xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-widest">
                <NavLink to="/">E-commerce</NavLink>
              </span>
              <span>
                <sub>&#174;</sub>
              </span>
            </p>
          </div>
          <div className="flex items-center justify-end col-span-4 cursor-pointer">
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-green-500 border-b border-green-500"
                    : "text-inherit"
                }`
              }
            >
              <LuUser2 className="mx-1 hidden md:block md:mx-3 text-2xl" />
            </NavLink>
            <IoSearchSharp className="mx-1 md:mx-3 text-2xl" />

            <Dialog>
              <DialogTrigger asChild>
                <FaRegHeart className="mx-1 hidden md:block md:mx-3 text-2xl" />
              </DialogTrigger>
              <DialogContent className="max-w-full md:max-w-[80%] max-h-full md:max-h-[90%] overflow-y-scroll px-0 py-0">
                <Wishlist />
              </DialogContent>
            </Dialog>
            <Sheet>
              <SheetTrigger asChild>
                <RiShoppingBagLine className="mx-1 me-2 md:me-0 md:mx-3 text-2xl" />
              </SheetTrigger>
              <SheetContent className="min-w-[35%] overflow-y-scroll ">
                <Cart />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className={`${menu} lg:block`}>
          <div
            id="menu"
            className=" transition-all ease-linear fixed w-[320px] lg:ms-[0px] lg:m-0 h-screen lg:h-max top-0 left-0 lg:py-4 lg:w-full lg:static"
          >
            <div className="my-2 lg:hidden flex ms-2">
              <div className="p-1" onClick={() => setMenu("hidden")}>
                <RxCross2 className="text-2xl cursor-pointer" />
              </div>
            </div>

            <div className="h-[75vh] overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden ms-4 lg:h-5 cursor-pointer">
              <ul className="px-2 lg:h-80 lg:px-0 lg:flex uppercase text-sm lg:justify-evenly">
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <NavLink
                    to="/ShopAll"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-green-500 border-b border-green-500"
                          : "text-inherit"
                      }`
                    }
                  >
                    shop all
                  </NavLink>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#"></a>shop by skin condition{" "}
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#">gwp</a>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#">most loved</a>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#">face</a>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#">body & hair</a>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#">well - Being</a>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#">gifting</a>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 border-b lg:border-none border-solid border-gray-400">
                  <a href="#">ingredients</a>
                </li>
                <li className="py-4 lg:py-0 my-1 lg:my-0 lg:border-none border-solid border-gray-400">
                  <a href="#">about us</a>
                </li>
              </ul>
              <div className="text-sm ms-2 border-t border-black/20 py-6 flex flex-col">
                <NavLink to="/Login">
                  <span
                    onClick={() => setMenu("hidden")}
                    className="text-black my-2 border border-black/30 py-1 px-4 rounded-md"
                  >
                    ACCOUNT
                  </span>
                </NavLink>

                <Dialog>
                  <DialogTrigger asChild>
                    <span className="text-black my-2 border border-black/30 py-1 px-4 rounded-md">
                      WISHLIST
                    </span>
                  </DialogTrigger>
                  <DialogContent className="max-w-full md:max-w-[80%] max-h-full md:max-h-[90%] overflow-y-scroll px-0 py-0">
                    <Wishlist />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="block lg:hidden">
              <p className="h-[1px] my-3 bg-slate-400"></p>
              <div className="flex justify-evenly my-3">
                <div className="grid place-items-center mx-2 w-8 h-8 p-0.5">
                  <FaFacebookF className="text-[#8b8b8b] hover:text-[#cecece] text-2xl" />
                </div>
                <div className="grid place-items-center mx-2 w-8 h-8 p-0.5">
                  <FaXTwitter className="text-[#8b8b8b] hover:text-[#cecece] text-2xl" />
                </div>
                <div className="grid place-items-center mx-2 w-8 h-8 p-0.5">
                  <FaInstagram className="text-[#8b8b8b] hover:text-[#cecece] text-2xl" />
                </div>
                <div className="grid place-items-center mx-2 w-8 h-8 p-0.5">
                  <TbBrandYoutubeFilled className="text-[#8b8b8b] hover:text-[#cecece] text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
