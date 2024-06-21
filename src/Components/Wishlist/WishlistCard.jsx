import { RxCross2 } from "react-icons/rx";
import Button from "../Button";
export default function WishlistCard({ name, url, price }) {
  return (
    <>
      <div className="w-44 md:w-56 my-8 border border-black/30">
        <div className="relative">
          <img className="" src={url} alt={name} />
          <RxCross2 className="text-xl text-gray-600 cursor-pointer absolute top-2 right-2" />

          <div className="px-2">
            <p className=" text-gray-600">{name}</p>
            <p className="text-gray-600 md:text-lg my-2">{price}</p>
          </div>
          <Button title="ADD TO BAG" />
        </div>
      </div>
    </>
  );
}
