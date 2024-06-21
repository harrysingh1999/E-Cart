import { cartData } from "@/Utils/constant";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../Button";

export default function Cart() {
  return (
    <>
      <div className="">
        <p>Cart 3</p>
        {cartData.map((item) => {
          return (
            <div
              key={item.name}
              className="grid grid-cols-2 lg:place-items-center md:border-t border-black/20"
            >
              <div>
                <img src={item.url} alt={item.name} className="w-32" />
              </div>

              <div className="grid place-items-center">
                <div>
                  <p className="w-40 text-xs md:text-sm lg:text-base">
                    {item.product}{" "}
                  </p>
                  <div className="flex items-center">
                    <button className="border border-black/30 py-0 px-3">
                      -
                    </button>
                    <span className="border border-black/30 py-1 text-xs px-4">
                      {item.quantity}
                    </span>
                    <button className="border border-black/30 py-0 px-3">
                      +
                    </button>
                  </div>

                  <div className=" flex items-center">
                    <p>{item.price}</p>
                    <RiDeleteBin6Line className="ms-3" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-2 mt-4 pt-4 border-black">
        <p>Add Order Note</p>
        <p>Shipping & taxes calculated at checkout</p>
        <div>
          <Button title="Checkout" />
        </div>
      </div>
    </>
  );
}
