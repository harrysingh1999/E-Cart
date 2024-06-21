import { TbUserQuestion } from "react-icons/tb";
import { LuMoreVertical } from "react-icons/lu";

//         {/* <div className="flex flex-col items-center justify-center w-[50%] mx-auto my-20">
//           <h1 className="font-semibold text-lg">Love It? Add To My Wishlist</h1>
//           <p className="my-6">
//             My Wishlist allows you to keep track of all of your favorites and
//             shopping activity whether you're on your computer, phone, or tablet.
//             You won't have to waste time searching all over again for that item
//             you loved on your phone the other day - it's all here in one place!
//           </p>

//           <button className="px-4 py-2 bg-gray-600 text-white rounded-md">
//             Continue Shopping
//           </button>
//         </div> */}

import WishlistCard from "./WishlistCard";

export default function Wishlist() {
  return (
    <>
      <div className="flex items-center bg-gray-500 text-white justify-end pe-6 py-3 cursor-pointer">
        <TbUserQuestion />
        <p className="px-4">Guest Shopper</p>
      </div>
      <div className="flex items-center justify-between mx-6 pb-6 mt-6 border-b border-black/20">
        <p>My Wishlist</p>
        <LuMoreVertical />
      </div>
      <div className="px-2 md:px-10 flex flex-col items-center md:flex-row md:justify-around">
        <WishlistCard
          name="The Hydrate & Glow Set"
          url="https://cdn.shopify.com/s/files/1/0480/7694/7609/files/CLEAN_CLEARINRWEBSITE.png?v=1691645126"
          price="₹3800.00"
        />
        <WishlistCard
          name="The Hydrate & Glow Set"
          url="https://cdn.shopify.com/s/files/1/0480/7694/7609/files/CLEAN_CLEARINRWEBSITE.png?v=1691645126"
          price="₹3800.00"
        />
        <WishlistCard
          name="The Hydrate & Glow Set"
          url="https://cdn.shopify.com/s/files/1/0480/7694/7609/files/CLEAN_CLEARINRWEBSITE.png?v=1691645126"
          price="₹3800.00"
        />
      </div>
    </>
  );
}
